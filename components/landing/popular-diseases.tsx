"use client"

import Link from "next/link"
import { ArrowRight, AlertCircle } from "lucide-react"

const diseases = [
  {
    id: 1,
    name: "Mastitis",
    description: "Peradangan pada kelenjar susu yang umum terjadi pada sapi perah.",
    severity: "Tinggi",
    symptoms: "Pembengkakan, susu berubah, demam",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/30",
  },
  {
    id: 2,
    name: "Bloat",
    description: "Kembung perut akibat penumpukan gas dalam saluran pencernaan.",
    severity: "Tinggi",
    symptoms: "Perut membesar, sulit bernapas, gelisah",
    color: "from-orange-500/20 to-orange-500/5",
    borderColor: "border-orange-500/30",
  },
  {
    id: 3,
    name: "Cacingan",
    description: "Infeksi parasit usus yang mengurangi produktivitas sapi.",
    severity: "Sedang",
    symptoms: "Diare, penurunan berat badan, anemia",
    color: "from-yellow-500/20 to-yellow-500/5",
    borderColor: "border-yellow-500/30",
  },
  {
    id: 4,
    name: "Pneumonia",
    description: "Infeksi paru-paru yang menyebabkan gangguan pernapasan.",
    severity: "Tinggi",
    symptoms: "Batuk, demam, sesak napas",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30",
  },
  {
    id: 5,
    name: "PMK",
    description: "Penyakit Mulut dan Kuku, virus yang sangat menular.",
    severity: "Tinggi",
    symptoms: "Luka di mulut, kuku, demam",
    color: "from-purple-500/20 to-purple-500/5",
    borderColor: "border-purple-500/30",
  },
]

export function PopularDiseases() {
  return (
    <section id="diseases" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Penyakit Populer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Beberapa penyakit sapi yang paling sering terdeteksi dalam sistem Sapi Care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diseases.map((disease) => (
            <div
              key={disease.id}
              className={`group bg-gradient-to-br ${disease.color} border ${disease.borderColor} rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">{disease.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{disease.description}</p>
                </div>
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 ml-2" />
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Tingkat Keparahan</p>
                  <p className="text-sm font-medium text-foreground">{disease.severity}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase">Gejala Utama</p>
                  <p className="text-sm text-foreground">{disease.symptoms}</p>
                </div>
              </div>

              <Link
                href="/diagnosis"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors"
              >
                Lihat Detail
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
