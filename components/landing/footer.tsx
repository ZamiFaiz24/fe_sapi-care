"use client"

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-card border-t border-border py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SC</span>
              </div>
              <span className="font-bold text-lg text-foreground">Sapi Care</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Sistem pakar modern untuk deteksi penyakit sapi dengan teknologi Certainty Factor yang akurat dan
              terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Tautan Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/landing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/diagnosis" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Admin
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@sapicare.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  info@sapicare.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+62123456789"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +62 (123) 456-789
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            Copyright &copy; {currentYear} Sapi Care. Semua hak dilindungi.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Kebijakan Privasi
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
