"use client"

import { useState } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { X } from "lucide-react"

interface Symptom {
  id: string
  name: string
  severity: "ringan" | "sedang" | "berat"
}

const symptomsList = [
  { id: "1", name: "Demam Tinggi" },
  { id: "2", name: "Diare" },
  { id: "3", name: "Penurunan Nafsu Makan" },
  { id: "4", name: "Pembengkakan Ambing" },
  { id: "5", name: "Batuk Terus-Menerus" },
  { id: "6", name: "Kesulitan Bernafas" },
  { id: "7", name: "Borok di Mulut" },
  { id: "8", name: "Ketimpangan" },
]

export default function DiagnosisPage() {
  const [selectedSymptoms, setSelectedSymptoms] = useState<Symptom[]>([])
  const [showResults, setShowResults] = useState(false)

  const addSymptom = (symptomId: string, symptomName: string) => {
    if (!selectedSymptoms.find((s) => s.id === symptomId)) {
      setSelectedSymptoms([
        ...selectedSymptoms,
        {
          id: symptomId,
          name: symptomName,
          severity: "sedang",
        },
      ])
    }
  }

  const removeSymptom = (symptomId: string) => {
    setSelectedSymptoms(selectedSymptoms.filter((s) => s.id !== symptomId))
  }

  const updateSeverity = (symptomId: string, severity: "ringan" | "sedang" | "berat") => {
    setSelectedSymptoms(selectedSymptoms.map((s) => (s.id === symptomId ? { ...s, severity } : s)))
  }

  const handleProcess = () => {
    if (selectedSymptoms.length > 0) {
      setShowResults(true)
    }
  }

  if (showResults) {
    return <DiagnosisResultPage symptoms={selectedSymptoms} onBack={() => setShowResults(false)} />
  }

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diagnosis Penyakit Sapi</h1>
          <p className="text-muted-foreground">Pilih gejala yang dialami sapi dan tentukan tingkat keparahannya</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Available Symptoms */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-lg font-semibold">Daftar Gejala</h2>
            <div className="grid grid-cols-1 gap-2">
              {symptomsList.map((symptom) => {
                const isSelected = selectedSymptoms.find((s) => s.id === symptom.id)
                return (
                  <button
                    key={symptom.id}
                    onClick={() => addSymptom(symptom.id, symptom.name)}
                    disabled={isSelected}
                    className={`p-3 rounded-lg text-left text-sm font-medium transition-all ${
                      isSelected
                        ? "bg-muted text-muted-foreground cursor-not-allowed"
                        : "bg-card border border-border hover:border-primary hover:bg-accent/10"
                    }`}
                  >
                    {symptom.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Selected Symptoms */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Gejala yang Dipilih ({selectedSymptoms.length})</h2>

            {selectedSymptoms.length === 0 ? (
              <div className="bg-muted/50 rounded-lg p-8 text-center">
                <p className="text-muted-foreground">Belum ada gejala yang dipilih</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedSymptoms.map((symptom) => (
                  <div key={symptom.id} className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{symptom.name}</p>
                      <button
                        onClick={() => removeSymptom(symptom.id)}
                        className="p-1 hover:bg-destructive/10 text-destructive rounded transition-colors"
                      >
                        <X size={18} />
                      </button>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Tingkat Keparahan</label>
                      <select
                        value={symptom.severity}
                        onChange={(e) => updateSeverity(symptom.id, e.target.value as any)}
                        className="w-full px-3 py-2 bg-input border border-input rounded-lg text-foreground text-sm"
                      >
                        <option value="ringan">Ringan</option>
                        <option value="sedang">Sedang</option>
                        <option value="berat">Berat</option>
                      </select>
                    </div>

                    {/* Severity Slider Visual */}
                    <div className="flex gap-2">
                      {["ringan", "sedang", "berat"].map((level) => (
                        <div
                          key={level}
                          className={`flex-1 h-2 rounded-full transition-colors ${
                            symptom.severity === level
                              ? level === "ringan"
                                ? "bg-green-500"
                                : level === "sedang"
                                  ? "bg-orange-500"
                                  : "bg-red-500"
                              : "bg-muted"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={handleProcess}
              disabled={selectedSymptoms.length === 0}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Proses Diagnosis
            </button>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

function DiagnosisResultPage({
  symptoms,
  onBack,
}: {
  symptoms: Symptom[]
  onBack: () => void
}) {
  // Mock diagnosis results
  const diagnosisResults = [
    {
      rank: 1,
      disease: "Mastitis",
      cf: 0.87,
      description: "Peradangan pada ambing sapi",
      recommendations: [
        "Lakukan perawatan ambing secara higienis",
        "Berikan antibiotik sesuai resep dokter hewan",
        "Isolasi sapi dari kelompok lain",
      ],
    },
    {
      rank: 2,
      disease: "Infeksi Saluran Pernapasan",
      cf: 0.72,
      description: "Infeksi bakteri atau virus pada sistem pernapasan",
      recommendations: [
        "Tingkatkan ventilasi kandang",
        "Berikan antibiotik broad spectrum",
        "Monitor gejala secara berkala",
      ],
    },
  ]

  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors"
          >
            Kembali
          </button>
          <div>
            <h1 className="text-3xl font-bold">Hasil Diagnosis</h1>
            <p className="text-muted-foreground">Berdasarkan {symptoms.length} gejala yang dipilih</p>
          </div>
        </div>

        <div className="space-y-4">
          {diagnosisResults.map((result) => (
            <div
              key={result.rank}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90">Hasil #{result.rank}</p>
                    <h2 className="text-2xl font-bold">{result.disease}</h2>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">{(result.cf * 100).toFixed(0)}%</p>
                    <p className="text-sm opacity-90">Confidence Factor</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-foreground">{result.description}</p>

                <div>
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Rekomendasi Penanganan
                  </h3>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, idx) => (
                      <li key={idx} className="flex gap-3 text-sm">
                        <span className="text-primary font-bold">{idx + 1}.</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 font-medium transition-colors mt-4">
                  Lihat Detail Penyakit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
