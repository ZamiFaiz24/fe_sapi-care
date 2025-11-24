"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { TableComponent } from "@/components/table-component"
import { Modal } from "@/components/modal"

interface User {
  id: string
  name: string
  email: string
  role: string
  status: string
}

const initialUsers: User[] = [
  { id: "1", name: "Dr. Budi", email: "budi@example.com", role: "Pakar", status: "Aktif" },
  { id: "2", name: "Siti Nurhaliza", email: "siti@example.com", role: "Admin", status: "Aktif" },
  { id: "3", name: "Joni Waluyo", email: "joni@example.com", role: "Pengguna", status: "Aktif" },
]

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>(initialUsers)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", role: "", status: "" })

  const handleAddNew = () => {
    setEditingId(null)
    setFormData({ name: "", email: "", role: "", status: "" })
    setIsModalOpen(true)
  }

  const handleEdit = (item: User) => {
    setEditingId(item.id)
    setFormData({ name: item.name, email: item.email, role: item.role, status: item.status })
    setIsModalOpen(true)
  }

  const handleDelete = (item: User) => {
    if (confirm(`Hapus pengguna ${item.name}?`)) {
      setUsers(users.filter((u) => u.id !== item.id))
    }
  }

  const handleSave = () => {
    if (editingId) {
      setUsers(users.map((u) => (u.id === editingId ? { ...u, ...formData } : u)))
    } else {
      setUsers([...users, { id: Date.now().toString(), ...formData }])
    }
    setIsModalOpen(false)
  }

  const columns = [
    { key: "name", label: "Nama" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status" },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Manajemen Users</h1>
          <p className="text-muted-foreground">Kelola akun pengguna sistem</p>
        </div>

        <TableComponent
          columns={columns}
          data={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAddNew={handleAddNew}
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={editingId ? "Edit User" : "Tambah User"}
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
              <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
                placeholder="user@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
              >
                <option value="">Pilih role</option>
                <option value="Admin">Admin</option>
                <option value="Pakar">Pakar</option>
                <option value="Pengguna">Pengguna</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground"
              >
                <option value="">Pilih status</option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
            </div>
          </div>
        </Modal>
      </div>
    </LayoutWrapper>
  )
}
