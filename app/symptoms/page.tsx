"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { TableComponent } from "@/components/table-component"
import { Modal } from "@/components/modal"

interface Symptom {
  id: string
  code: string
  name: string
  category: string
}

const initialSymptoms: Symptom[] = [
  { id: "1", code: "G001", name: "Demam Tinggi", category: "Umum" },
  { id: "2", code: "G002", name: "Diare", category: "Pencernaan" },
  { id: "3", code: "G003", name: "Pembengkakan Ambing", category: "Reproduksi" },
]

export default function SymptomsPage() {
  const [symptoms, setSymptoms] = useState<Symptom[]>(initialSymptoms)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ code: "", name: "", category: "" })

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({ code: "", name: "", category: "" })
    setIsModalOpen(true)
  }

  const handleEdit = (item: Symptom) => {
    setEditingId(item.id)
    setFormData({ code: item.code, name: item.name, category: item.category })
    setIsModalOpen(true)
  }

  const handleDelete = (item: Symptom) => {
    if (confirm(`Hapus gejala ${item.name}?`)) {
      setSymptoms(symptoms.filter((s) => s.id !== item.id))
    }
  }

  const handleSave = () => {
    if (editingId) {
      setSymptoms(symptoms.map((s) => (s.id === editingId ? { ...s, ...formData } : s)))
    } else {
      setSymptoms([...symptoms, { id: Date.now().toString(), ...formData }])
    }
    setIsModalOpen(false)
  }

  const columns = [
    { key: "code", label: "Kode" },
    { key: "name", label: "Nama Gejala" },
    { key: "category", label: "Kategori" },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Gejala</h1>
          <p className="text-muted-foreground">Kelola daftar gejala dalam sistem diagnosis</p>
        </div>

        <TableComponent
          columns={columns}
          data={symptoms}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingId ? "Edit Gejala" : "Tambah Gejala"}
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
              <label className="block text-sm font-medium mb-1">Kode Gejala</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="G001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Nama Gejala</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="Demam Tinggi"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kategori</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
              >
                <option value="">Pilih kategori</option>
                <option value="Umum">Umum</option>
                <option value="Pencernaan">Pencernaan</option>
                <option value="Pernapasan">Pernapasan</option>
                <option value="Reproduksi">Reproduksi</option>
                <option value="Kulit">Kulit</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>
    </LayoutWrapper>
  )
}
