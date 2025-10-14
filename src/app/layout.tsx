import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mind Mechanics - Transform Your Mental Wellbeing",
  description: "Premium psychological care and counseling services for mental wellness and personal growth.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Correct and recommended way to load AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1241215112545453"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>

      <body className={`${inter.className} bg-[#0a0d14] text-white min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <ParticleBackground />
          <div className="relative z-10">
            <Header />
            <main className="min-h-[calc(100vh-64px)]">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
