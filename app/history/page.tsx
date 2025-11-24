"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Modal } from "@/components/modal"
import { Calendar } from "lucide-react"

interface DiagnosisRecord {
  id: string
  date: string
  time: string
  cowId: string
  disease: string
  cf: number
  symptoms: string[]
  recommendations: string[]
}

const initialHistory: DiagnosisRecord[] = [
  {
    id: "1",
    date: "2024-11-20",
    time: "14:30",
    cowId: "SAPI-001",
    disease: "Mastitis",
    cf: 0.87,
    symptoms: ["Pembengkakan Ambing", "Demam Tinggi", "Penurunan Nafsu Makan"],
    recommendations: ["Lakukan perawatan ambing higienis", "Berikan antibiotik", "Isolasi sapi"],
  },
  {
    id: "2",
    date: "2024-11-19",
    time: "10:15",
    cowId: "SAPI-002",
    disease: "Diare Sapi",
    cf: 0.92,
    symptoms: ["Diare", "Penurunan Nafsu Makan", "Dehidrasi"],
    recommendations: ["Berikan cairan elektrolit", "Isolasi dari kelompok lain", "Monitor kondisi"],
  },
  {
    id: "3",
    date: "2024-11-18",
    time: "09:45",
    cowId: "SAPI-003",
    disease: "Infeksi Saluran Pernapasan",
    cf: 0.75,
    symptoms: ["Batuk", "Kesulitan Bernafas", "Demam"],
    recommendations: ["Tingkatkan ventilasi kandang", "Antibiotik broad spectrum", "Monitor gejala"],
  },
]

export default function HistoryPage() {
  const [records, setRecords] = useState<DiagnosisRecord[]>(initialHistory)
  const [selectedRecord, setSelectedRecord] = useState<DiagnosisRecord | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetail = (record: DiagnosisRecord) => {
    setSelectedRecord(record)
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm("Hapus riwayat diagnosis ini?")) {
      setRecords(records.filter((r) => r.id !== id))
    }
  }

  const getCFColor = (cf: number) => {
    if (cf >= 0.8) return "text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400"
    if (cf >= 0.6) return "text-orange-600 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400"
    return "text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400"
  }

  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Riwayat Diagnosis</h1>
          <p className="text-muted-foreground">Rekam semua diagnosis yang telah dilakukan</p>
        </div>

        <div className="space-y-4">
          {records.length === 0 ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <p className="text-muted-foreground">Belum ada riwayat diagnosis</p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-border rounded-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted border-b border-border">
                    <th className="px-6 py-4 text-left text-sm font-semibold">ID Sapi</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Tanggal</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Penyakit</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">CF Value</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((record) => (
                    <tr key={record.id} className="border-b border-border hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium">{record.cowId}</td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-muted-foreground" />
                          <span>
                            {record.date} {record.time}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">{record.disease}</td>
                      <td className="px-6 py-4 text-sm">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getCFColor(record.cf)}`}>
                          {(record.cf * 100).toFixed(0)}%
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm space-x-2">
                        <button
                          onClick={() => handleViewDetail(record)}
                          className="px-3 py-1 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors text-xs"
                        >
                          Detail
                        </button>
                        <button
                          onClick={() => handleDelete(record.id)}
                          className="px-3 py-1 bg-destructive/20 text-destructive rounded hover:bg-destructive/30 transition-colors text-xs"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {selectedRecord && (
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title={`Detail Diagnosis - ${selectedRecord.cowId}`}
          >
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">ID Sapi</p>
                  <p className="font-semibold">{selectedRecord.cowId}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tanggal</p>
                  <p className="font-semibold">
                    {selectedRecord.date} {selectedRecord.time}
                  </p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground mb-1">Penyakit</p>
                  <p className="font-semibold text-lg">{selectedRecord.disease}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Confidence Factor</p>
                  <p className="text-2xl font-bold text-primary">{(selectedRecord.cf * 100).toFixed(1)}%</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Gejala Terpilih</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRecord.symptoms.map((symptom, idx) => (
                    <span key={idx} className="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Rekomendasi Penanganan</h3>
                <ul className="space-y-2">
                  {selectedRecord.recommendations.map((rec, idx) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <span className="text-primary font-bold">{idx + 1}.</span>
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </LayoutWrapper>
  )
}
