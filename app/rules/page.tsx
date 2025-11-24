"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { TableComponent } from "@/components/table-component"
import { Modal } from "@/components/modal"

interface Rule {
  id: string
  code: string
  diseaseCode: string
  symptomCode: string
  cf: number
}

const initialRules: Rule[] = [
  { id: "1", code: "R001", diseaseCode: "D001", symptomCode: "G001", cf: 0.8 },
  { id: "2", code: "R002", diseaseCode: "D001", symptomCode: "G003", cf: 0.9 },
  { id: "3", code: "R003", diseaseCode: "D002", symptomCode: "G002", cf: 0.85 },
]

export default function RulesPage() {
  const [rules, setRules] = useState<Rule[]>(initialRules)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ code: "", diseaseCode: "", symptomCode: "", cf: 0 })

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({ code: "", diseaseCode: "", symptomCode: "", cf: 0 })
    setIsModalOpen(true)
  }

  const handleEdit = (item: Rule) => {
    setEditingId(item.id)
    setFormData({ code: item.code, diseaseCode: item.diseaseCode, symptomCode: item.symptomCode, cf: item.cf })
    setIsModalOpen(true)
  }

  const handleDelete = (item: Rule) => {
    if (confirm(`Hapus aturan ${item.code}?`)) {
      setRules(rules.filter((r) => r.id !== item.id))
    }
  }

  const handleSave = () => {
    if (editingId) {
      setRules(rules.map((r) => (r.id === editingId ? { ...r, ...formData } : r)))
    } else {
      setRules([...rules, { id: Date.now().toString(), ...formData }])
    }
    setIsModalOpen(false)
  }

  const columns = [
    { key: "code", label: "Kode Aturan" },
    { key: "diseaseCode", label: "Kode Penyakit" },
    { key: "symptomCode", label: "Kode Gejala" },
    { key: "cf", label: "CF Value" },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Aturan</h1>
          <p className="text-muted-foreground">Kelola aturan dan certainty factor sistem pakar</p>
        </div>

        <TableComponent
          columns={columns}
          data={rules}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingId ? "Edit Aturan" : "Tambah Aturan"}
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
              <label className="block text-sm font-medium mb-1">Kode Aturan</label>
              <input
                type="text"
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="R001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kode Penyakit</label>
              <input
                type="text"
                value={formData.diseaseCode}
                onChange={(e) => setFormData({ ...formData, diseaseCode: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="D001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Kode Gejala</label>
              <input
                type="text"
                value={formData.symptomCode}
                onChange={(e) => setFormData({ ...formData, symptomCode: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="G001"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CF Value (0-1)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="1"
                value={formData.cf}
                onChange={(e) => setFormData({ ...formData, cf: Number.parseFloat(e.target.value) })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="0.8"
              />
            </div>
          </div>
        </Modal>
      </div>
    </LayoutWrapper>
  )
}
