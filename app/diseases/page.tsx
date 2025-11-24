"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { TableComponent } from "@/components/table-component"
import { Modal } from "@/components/modal"

interface Disease {
  id: string
  code: string
  name: string
  description: string
  severity: string
}

const initialDiseases: Disease[] = [
  { id: "1", code: "D001", name: "Mastitis", description: "Peradangan ambing", severity: "Tinggi" },
  { id: "2", code: "D002", name: "Diare", description: "Gangguan pencernaan", severity: "Sedang" },
  { id: "3", code: "D003", name: "Antraks", description: "Infeksi bakteri serius", severity: "Sangat Tinggi" },
]

export default function DiseasesPage() {
  const [diseases, setDiseases] = useState<Disease[]>(initialDiseases)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ code: "", name: "", description: "", severity: "" })

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({ code: "", name: "", description: "", severity: "" })
    setIsModalOpen(true)
  }

  const handleEdit = (item: Disease) => {
    setEditingId(item.id)
    setFormData({ code: item.code, name: item.name, description: item.description, severity: item.severity })
    setIsModalOpen(true)
  }

  const handleDelete = (item: Disease) => {
    if (confirm(`Hapus penyakit ${item.name}?`)) {
      setDiseases(diseases.filter((d) => d.id !== item.id))
    }
  }

  const handleSave = () => {
    if (editingId) {
      setDiseases(diseases.map((d) => (d.id === editingId ? { ...d, ...formData } : d)))
    } else {
      setDiseases([...diseases, { id: Date.now().toString(), ...formData }])
    }
    setIsModalOpen(false)
  }

  const columns = [
    { key: "code", label: "Kode" },
    { key: "name", label: "Nama Penyakit" },
    { key: "description", label: "Deskripsi" },
    { key: "severity", label: "Tingkat Keparahan" },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Penyakit</h1>
          <p className="text-muted-foreground">Kelola daftar penyakit sapi dalam sistem</p>
        </div>

        <TableComponent
          columns={columns}
          data={diseases}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingId ? "Edit Penyakit" : "Tambah Penyakit"}
          footer={
            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSave}
                className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Simpan
              </button>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Kode Penyakit</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="D001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nama Penyakit</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="Mastitis"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Deskripsi</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground resize-none"
                placeholder="Deskripsi penyakit..."
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Tingkat Keparahan</label>
              <select
                value={formData.severity}
                onChange={(e) => setFormData({ ...formData, severity: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
              >
                <option value="">Pilih tingkat keparahan</option>
                <option value="Ringan">Ringan</option>
                <option value="Sedang">Sedang</option>
                <option value="Tinggi">Tinggi</option>
                <option value="Sangat Tinggi">Sangat Tinggi</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>
    </LayoutWrapper>
  )
}
