"use client"

import Link from "next/link"
import { ArrowRight, Activity } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="py-20 sm:py-32 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-tight">
                Sapi Care
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Sistem Pakar Diagnosa Penyakit Sapi
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Teknologi AI berbasis Certainty Factor untuk deteksi penyakit sapi secara cepat dan akurat. Dapatkan
              diagnosis mendalam berdasarkan gejala yang Anda amati dengan sistem pakar profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/diagnosis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:shadow-lg transition-all hover:scale-105 font-semibold"
              >
                Mulai Diagnosa
                <ArrowRight size={20} />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-semibold"
              >
                Tentang Sistem
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div>
                <p className="text-2xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Penyakit Terdeteksi</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary">20+</p>
                <p className="text-sm text-muted-foreground">Gejala Diagnosis</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-accent">99%</p>
                <p className="text-sm text-muted-foreground">Akurasi CF</p>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-3xl p-8 flex flex-col items-center justify-center h-full gap-4">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Activity className="w-12 h-12 text-primary" />
                </div>
                <div className="text-center space-y-2">
                  <p className="text-xl font-semibold text-foreground">Diagnosa Cepat & Akurat</p>
                  <p className="text-sm text-muted-foreground">Berbasis Certainty Factor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
