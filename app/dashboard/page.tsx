"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CardStat } from "@/components/card-stat"
import { TrendingUp, Activity, BookOpen, ClipboardList } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Card */}
        <div className="bg-gradient-to-br from-primary to-primary/80 rounded-lg p-12 text-primary-foreground shadow-lg">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di Sapi Care</h1>
          <p className="text-lg mb-6 opacity-90">
            Sistem Pakar untuk Deteksi Penyakit Sapi menggunakan metode Certainty Factor
          </p>
          <Link href="/diagnosis">
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Info Selengkapnya
            </button>
          </Link>
        </div>

        {/* Statistics Cards */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Ringkasan Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CardStat title="Total Penyakit" value={24} icon={<Activity size={24} />} color="green" />
            <CardStat title="Total Gejala" value={156} icon={<TrendingUp size={24} />} color="blue" />
            <CardStat title="Total Aturan" value={89} icon={<BookOpen size={24} />} color="orange" />
            <CardStat title="Total Diagnosis" value={342} icon={<ClipboardList size={24} />} color="red" />
          </div>
        </div>

        {/* Recent Diagnosis */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">Diagnosis Terbaru</h2>
          <div className="space-y-3">
            {[
              { disease: "Mastitis", cf: "0.87", date: "2024-11-20" },
              { disease: "Diare Sapi", cf: "0.92", date: "2024-11-19" },
              { disease: "Infeksi Saluran Pernapasan", cf: "0.75", date: "2024-11-18" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div>
                  <p className="font-medium">{item.disease}</p>
                  <p className="text-xs text-muted-foreground">{item.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-primary">CF: {item.cf}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}
