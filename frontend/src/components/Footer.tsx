
'use client'

import Link from 'next/link'
import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-600 border-t py-10 px-6 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <h1 className="text-xl font-bold text-slate-800 mb-2">
            <span className="text-orange-500">Q</span>uickCart
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Company</h4>
          <ul className="space-y-1">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/privacy-policy">Privacy policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-slate-700 mb-3">Get in touch</h4>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            +39-234-567-890
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Mail className="w-4 h-4 text-orange-500" />
            ciruzzo@gmail.it
          </p>
        </div>
      </div>

      <div className="text-center mt-10 text-xs text-gray-400 border-t pt-4">
        © 2025 Vitali Passaro made with &#9829; All Rights Reserved.
      </div>
    </footer>
  )
}
