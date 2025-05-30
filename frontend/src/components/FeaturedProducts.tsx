'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const featuredProducts = [
  {
    title: 'Unparalleled Sound',
    description: 'Experience crystal-clear audio\nwith premium headphones.',
    cta: 'Buy now',
    image: '/assets/girl_with_headphone_image.png'
  },
  {
    title: 'Stay Connected',
    description: 'Compact and stylish earphones\nfor every occasion.',
    cta: 'Buy now',
    image: '/assets/girl_with_earphone_image.png'
  },
  {
    title: 'Power in Every Pixel',
    description: 'Shop the latest laptops for work-\ngaming, and more.',
    cta: 'Buy now',
    image: '/assets/boy_with_laptop_image.png'
  }
]

type FeaturedProduct = {
  title: string;
  description: string;
  cta: string;
  image: string;
};

function ProductCard({ product }: { product: FeaturedProduct }) {
  return (
    <div className="h-[500px] w-full">
      <Card className="h-full w-full overflow-hidden relative border-0 shadow-none">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            quality={90}
            priority
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Content Panel at Bottom */}
        <CardContent className="relative z-10 h-full flex flex-col justify-end p-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              {product.title}
            </h3>
            <p className="text-gray-200 whitespace-pre-line">
              {product.description}
            </p>
            <Button
              size="lg"
              className="w-full bg-white text-gray-900 hover:bg-gray-200 text-lg"
            >
              {product.cta}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export function FeaturedProducts() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
