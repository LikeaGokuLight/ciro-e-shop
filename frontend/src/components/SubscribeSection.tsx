'use client'

export default function SubscribeSection() {
  return (
    <section className="py-20 px-6 text-center bg-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-slate-800">
        Subscribe now & get 20% off
      </h2>
      <p className="text-gray-500 mb-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      <form className="max-w-md mx-auto flex items-center border rounded-md overflow-hidden shadow-sm">
        <input
          type="email"
          placeholder="Enter your email id"
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 text-sm font-medium transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}
