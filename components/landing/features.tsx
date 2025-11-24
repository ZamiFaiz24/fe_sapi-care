import { CheckCircle, Database, Brain, Lock } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Diagnosa Berbasis AI",
    description: "Sistem pakar menggunakan algoritma Certainty Factor untuk hasil yang presisi dan terpercaya.",
  },
  {
    icon: Database,
    title: "Data Penyakit Lengkap",
    description: "Database komprehensif berisi ribuan penyakit sapi dan gejala yang terdetail.",
  },
  {
    icon: CheckCircle,
    title: "Analisis Gejala Otomatis",
    description: "Sistem otomatis menganalisis gejala yang Anda input dan memberikan rekomendasi akurat.",
  },
  {
    icon: Lock,
    title: "Tanpa Login Untuk User",
    description: "Akses diagnosis langsung tanpa perlu registrasi atau login. Cepat dan mudah.",
  },
]

export function Features() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Fitur Unggulan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sapi Care dilengkapi dengan fitur-fitur canggih untuk memberikan diagnosis penyakit sapi yang terbaik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
