"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { Award, BookOpen } from "lucide-react"

const experts = [
  {
    id: 1,
    name: "Dr. Budi Santoso",
    specialization: "Penyakit Sapi Potong",
    experience: "15 tahun",
    email: "budi@veteriner.com",
  },
  {
    id: 2,
    name: "Dr. Siti Nurhaliza",
    specialization: "Penyakit Sapi Perah",
    experience: "12 tahun",
    email: "siti@veteriner.com",
  },
  {
    id: 3,
    name: "Dr. Joni Waluyo",
    specialization: "Reproduksi Sapi",
    experience: "10 tahun",
    email: "joni@veteriner.com",
  },
]

export default function ExpertsPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-6xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Data Pakar</h1>
          <p className="text-muted-foreground">Pakar-pakar yang berkontribusi dalam sistem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="bg-gradient-to-r from-primary to-primary/80 h-24 relative flex items-end">
                <div className="absolute -bottom-8 left-6 w-16 h-16 bg-primary/30 rounded-full border-4 border-card" />
              </div>

              <div className="pt-12 p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold">{expert.name}</h3>
                  <p className="text-sm text-muted-foreground">{expert.specialization}</p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    <span>{expert.experience} pengalaman</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-accent" />
                    <span className="truncate">{expert.email}</span>
                  </div>
                </div>

                <button className="w-full py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 font-medium transition-colors mt-2">
                  Hubungi
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutWrapper>
  )
}
