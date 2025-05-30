import BannerPromo from '@/components/BannerPromo'
import { FeaturedProducts } from '@/components/FeaturedProducts'
import Footer from '@/components/Footer'
import { PopularProducts } from '@/components/PopularProducts'
import { PromoCarousel } from '@/components/PromoCarousel'
import SubscribeSection from '@/components/SubscribeSection'

export default function Home() {
	return (
		<div>
			<PromoCarousel />
			<PopularProducts/>
			<FeaturedProducts />
			<BannerPromo />
			<SubscribeSection />
			<Footer />
		</div>
	)
}
