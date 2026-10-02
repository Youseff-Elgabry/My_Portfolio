import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://yousef-elgabry-portfolio.vercel.app'),
  title: 'Yousef Elgabry — Data Analyst',
  description:
    'Portfolio of Yousef Elgabry, a data analyst and Computer Science student turning raw data into actionable business insights with Python, SQL, Power BI, and Tableau.',
  generator: 'v0.app',
  keywords: [
    'Yousef Elgabry',
    'Data Analyst',
    'Data Analysis',
    'Power BI',
    'Python',
    'SQL',
    'Tableau',
    'Portfolio',
  ],
  authors: [{ name: 'Yousef Elgabry' }],
  openGraph: {
    title: 'Yousef Elgabry — Data Analyst',
    description:
      'Turning raw data into actionable business insights. Explore projects, skills, and experience.',
    type: 'website',
    url: 'https://yousef-elgabry-portfolio.vercel.app',
    images: [
      {
        url: '/images/avatar.jpg',
        width: 1200,
        height: 630,
        alt: 'Yousef Elgabry Portfolio',
      },
    ],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f17',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}