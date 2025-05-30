import { withNetlify } from '@netlify/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	// You can add other config options here
}

export default withNetlify(nextConfig)
