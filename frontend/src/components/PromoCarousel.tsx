'use client'

import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { useTheme } from 'next-themes'

const promotions = [
  {
    title: 'Limited Time Offer 30% Off',
    subtitle: 'Experience Pure Sound',
    description: 'Your Perfect Headphones Await!',
    cta: 'Buy now',
    secondaryCta: 'Find more →',
    image: '/assets/header_headphone_image.png',
  },
  {
    title: 'Summer Sale 25% Off',
    subtitle: 'Wireless Freedom',
    description: 'Premium Wireless Earbuds Collection',
    cta: 'Shop now',
    secondaryCta: 'Browse all →',
    image: '/assets/bose_headphone_image.png',
  },
  {
    title: 'New Arrivals',
    subtitle: 'Cutting-Edge Technology',
    description: 'Discover Our Latest Audio Gear',
    cta: 'Explore',
    secondaryCta: 'Learn more →',
    image: '/assets/header_headphone_image.png',
  },
]

export function PromoCarousel() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Carousel className="w-full max-w-6xl mx-auto overflow-hidden">
      <CarouselContent>
        {promotions.map((promo, index) => (
          <CarouselItem key={index}>
            <div className="p-1 sm:p-2">
              <Card className={`h-[500px] sm:h-[400px] overflow-hidden rounded-xl shadow-lg ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <CardContent className={`flex flex-col md:flex-row items-center h-full p-4 sm:p-6 gap-4 sm:gap-8 ${isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-gray-50 to-gray-100'} ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {/* Text Section */}
                  <div className="order-2 md:order-1 p-4 sm:p-4 flex-1 flex flex-col justify-center max-w-md">
                    <div className={`inline-block px-3 py-1 rounded-full mb-3 sm:mb-4 text-xs sm:text-sm font-medium ${isDark ? 'bg-blue-600' : 'bg-blue-600'} text-white`}>
                      {promo.title}
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-2">
                      {promo.subtitle}
                    </h3>
                    <p className={`text-base sm:text-lg mb-4 sm:mb-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {promo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      <button className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-md text-sm sm:text-sm font-semibold transition-colors ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
                        {promo.cta}
                      </button>
                      <button className={`text-sm sm:text-sm hover:underline ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        {promo.secondaryCta}
                      </button>
                    </div>
                  </div>

                  {/* Image Section */}
                  <div className="order-1 md:order-2 flex-shrink-0 w-full md:w-[45%] h-48 sm:h-[280px] md:h-full relative">
                    <Image
                      src={promo.image}
                      alt={promo.subtitle}
                      fill
                      className="object-contain object-center drop-shadow-xl"
                      priority
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 50vw, 40vw"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className={`left-1 sm:left-2 z-30 hidden sm:flex ${isDark ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'}`} />
      <CarouselNext className={`right-1 sm:right-2 z-30 hidden sm:flex ${isDark ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'}`} />
    </Carousel>
  )
}
