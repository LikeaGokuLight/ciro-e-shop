'use client'

import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'

const popularProducts = [
	{
		id: 1,
		name: 'Bose QuietComfort 45',
		price: '32999',
		rating: 4.5,
		image: '/assets/bose_headphone_image.png',
	},
	{
		id: 2,
		name: 'ASUS ROG Zephyrus G16',
		price: '199999',
		rating: 4.5,
		image: '/assets/asus_laptop_image.png',
	},
	{
		id: 3,
		name: 'Samsung Galaxy S23',
		price: '79999',
		rating: 4.5,
		image: '/assets/samsung_s23phone_image.png',
	},
	{
		id: 4,
		name: 'PlayStation 5',
		price: '49999',
		rating: 4.5,
		image: '/assets/playstation_image.png',
	},
	{
		id: 5,
		name: 'MacBook Pro 16',
		price: '249999',
		rating: 4.5,
		image: '/assets/macbook_image.png',
	},
	{
		id: 6,
		name: 'Garmin Venu 2',
		price: '34999',
		rating: 4.5,
		image: '/assets/venu_watch_image.png',
	},
	{
		id: 7,
		name: 'Canon EOS R5',
		price: '389999',
		rating: 4.5,
		image: '/assets/cannon_camera_image.png',
	},
	{
		id: 8,
		name: 'Apple AirPods Pro 2nd gen',
		price: '39999',
		rating: 4.5,
		image: '/assets/apple_earphone_image.png',
	},
	{
		id: 9,
		name: 'Sony WF-1000XM5',
		price: '29999',
		rating: 4.5,
		image: '/assets/sony_airbuds_image.png',
	},
	{
		id: 10,
		name: 'Samsung Projector 4k',
		price: '149999',
		rating: 4.5,
		image: '/assets/projector_image.png',
	},
]

export function PopularProducts() {
	return (
		<section className='py-12 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl font-bold text-center mb-2 text-slate-800 dark:text-white'>
					Popular Products
				</h2>
				<p className='text-gray-600 dark:text-gray-400 text-center mb-12'>
					Discover our most loved items
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6'>
					{popularProducts.map(product => (
						<Card
							key={product.id}
							className='group relative bg-white dark:bg-slate-900 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300'
						>
							{/* Wishlist Icon */}
							<div className='absolute top-3 right-3 z-10'>
								<button className='p-1 bg-white/80 dark:bg-black/60 backdrop-blur rounded-full hover:scale-110 transition'>
									<Heart className='w-4 h-4 text-gray-600 dark:text-gray-300' />
								</button>
							</div>

							{/* Product Image */}
							<CardHeader className='p-0 relative'>
								<div className='aspect-square relative'>
									<Image
										src={product.image}
										alt={product.name}
										fill
										className='object-contain p-4 transition-transform duration-500 group-hover:scale-110'
									/>
								</div>
							</CardHeader>

							{/* Product Info */}
							<CardContent className='px-4 pt-2'>
								<h3 className='font-semibold text-base text-slate-800 dark:text-white line-clamp-2'>
									{product.name}
								</h3>
							</CardContent>

							{/* Rating + CTA */}
							<CardFooter className='px-4 pb-4 flex flex-col gap-2'>
								<div className='flex justify-between items-center w-full text-sm text-gray-600 dark:text-gray-300'>
									<span className='flex items-center gap-1'>
										<Star className='w-4 h-4 text-yellow-400' />
										{product.rating.toFixed(1)}
									</span>
									<span className='font-bold text-slate-900 dark:text-white text-base'>
										${parseFloat(product.price) / 100}
									</span>
								</div>
								<button className='w-full py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition'>
									Add to Cart
								</button>
							</CardFooter>
						</Card>
					))}
				</div>

				{/* Optional CTA */}
				<div className='mt-10 flex justify-center'>
					<button className='px-6 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition'>
						See more
					</button>
				</div>
			</div>
		</section>
	)
}
