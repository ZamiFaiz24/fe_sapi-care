import { ArrowDown } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Pilih Gejala",
    description: "Amati gejala yang terlihat pada sapi Anda dan pilih dari daftar gejala yang tersedia.",
  },
  {
    number: "02",
    title: "Tentukan Keparahan",
    description: "Atur tingkat keparahan setiap gejala (ringan, sedang, atau berat) berdasarkan kondisi sapi.",
  },
  {
    number: "03",
    title: "Sistem Hitung CF",
    description: "Algoritma Certainty Factor kami memproses data dan menghitung nilai kepastian untuk setiap penyakit.",
  },
  {
    number: "04",
    title: "Dapatkan Hasil",
    description: "Lihat hasil diagnosis lengkap dengan penyakit yang terdeteksi, CF score, dan rekomendasi penanganan.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Cara Kerja Diagnosis</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses diagnosis yang sederhana namun powerful dengan teknologi Certainty Factor yang akurat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>

              {/* Arrow between steps (hidden on last) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-16 -right-4 flex-col items-center h-32">
                  <ArrowDown className="text-border w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
