'use client'

import Image from 'next/image'

export default function BannerPromo() {
  return (
    <section className="bg-[#E9ECF4] rounded-xl px-6 py-12 relative overflow-hidden max-w-7xl mx-auto my-10">
      <div className="text-center max-w-xl mx-auto z-10 relative">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3">
          Level Up Your <br className="md:hidden" /> Gaming Experience
        </h2>
        <p className="text-sm text-slate-600 mb-5">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium transition">
          Buy now →
        </button>
      </div>

      {/* Left Speaker Image */}
      <Image
        src="/assets/jbl_soundbox_image.png"
        alt="Speaker"
        width={180}
        height={180}
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden sm:block"
      />

      {/* Right Controller Images */}
      <Image
        src="/assets/playstation_image.png"
        alt="playstation"
        width={180}
        height={180}
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden sm:block"
      />
    </section>
  )
}
