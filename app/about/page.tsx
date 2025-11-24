"use client"

import { LayoutWrapper } from "@/components/layout-wrapper"
import { CheckCircle2, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <LayoutWrapper>
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-12 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">Tentang Sapi Care</h1>
          <p className="text-lg opacity-90">Sistem Pakar Deteksi Penyakit Sapi dengan Metode Certainty Factor</p>
        </div>

        {/* About Content */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Apa itu Sapi Care?</h2>
            <p className="text-foreground leading-relaxed">
              Sapi Care adalah aplikasi sistem pakar yang dirancang khusus untuk membantu diagnosis penyakit pada sapi.
              Menggunakan metode Certainty Factor (CF), aplikasi ini menggabungkan pengetahuan dari para pakar veteriner
              untuk memberikan diagnosis yang akurat dan rekomendasi penanganan yang tepat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Fitur Utama</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Target size={24} />,
                  title: "Diagnosis Akurat",
                  desc: "Menggunakan sistem pakar dengan CF untuk hasil diagnosis yang presisi",
                },
                {
                  icon: <Zap size={24} />,
                  title: "Proses Cepat",
                  desc: "Mendapatkan hasil diagnosis dalam hitungan detik",
                },
                {
                  icon: <CheckCircle2 size={24} />,
                  title: "Rekomendasi Terstruktur",
                  desc: "Saran penanganan yang jelas dan dapat ditindaklanjuti",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-6 space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className="text-primary">{feature.icon}</div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Visi dan Misi</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold mb-2">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi solusi utama dalam diagnosis dan penatalaksanaan penyakit sapi di Indonesia, meningkatkan
                  kesehatan ternak dan produktivitas peternakan.
                </p>
              </div>
              <div className="border-l-4 border-secondary pl-4 py-2">
                <h3 className="font-semibold mb-2">Misi</h3>
                <ul className="text-muted-foreground space-y-1 text-sm">
                  <li>• Menyediakan sistem diagnosis penyakit sapi yang akurat dan mudah digunakan</li>
                  <li>• Membantu peternak dalam pengambilan keputusan penanganan penyakit</li>
                  <li>• Mengintegrasikan pengetahuan pakar veteriner dalam sistem terkomputerisasi</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Teknologi yang Digunakan</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>React & TypeScript untuk UI yang responsif</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Next.js untuk framework yang scalable</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Tailwind CSS untuk styling modern</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Certainty Factor Algorithm untuk diagnosis</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
            <p className="text-muted-foreground mb-4">
              Untuk pertanyaan atau masukan, silakan hubungi tim support kami
            </p>
            <div className="space-y-2 text-sm">
              <p>
                <strong>Email:</strong> support@sapicare.id
              </p>
              <p>
                <strong>Telepon:</strong> +62 21 XXXX XXXX
              </p>
              <p>
                <strong>Alamat:</strong> Jl. Pendidikan No. 1, Bogor, Indonesia
              </p>
            </div>
          </section>
        </div>
      </div>
    </LayoutWrapper>
  )
}
