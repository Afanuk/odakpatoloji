import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Grainient from "@/components/Grainient";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Odak Patoloji - Güvenilir Patoloji Hizmetleri",
  description: "Modern teknoloji ve uzman kadromuzla sağlığınız için en doğru tanıyı koyuyoruz",
  icons: {
    icon: "/tablogo.png",
    apple: "/tablogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} ${lora.variable} ${ibmPlexMono.variable} font-sans antialiased isolate`}>
        {/* Grainient Background - Fixed behind all content */}
        <div className="fixed inset-0 -z-10">
          <Grainient
            color1="#7a1f2b"
            color2="#ffffff"
            color3="#7a1f2b"
            timeSpeed={0.40}
            colorBalance={-0.80}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.5}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        </div>

        <div className="relative z-0">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
