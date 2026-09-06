import type { Metadata } from "next";
import { Cormorant_Upright, Figtree, IBM_Plex_Sans, Cinzel_Decorative, Outfit, Noto_Sans, Lora, Sorts_Mill_Goudy, EB_Garamond, Corben, Ovo, Cormorant_Garamond, Playfair_Display_SC  } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'

const cormorant = Cormorant_Upright({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-figtree',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
})

const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
})

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-outfit',
})

export const cloudyAurora = localFont({
  src: [
    {
      path: '../public/fonts/Cloudy Aurora Serif.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-cloudy',
})

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300' ,'400', '500', '600', '700', '800'],
  variable: '--font-noto',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
})

export const canelaTrial = localFont({
  src: [
    {
      path: '../public/fonts/Canela-Thin-Trial.otf',
      weight: '100',
      style: 'normal',
    }
  ],
  variable: '--font-canela',
})

export const theSignature = localFont({
  src: [
    {
      path: '../public/fonts/Thesignature.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-the-signature',
})

export const channe = localFont({
  src: [
    {
      path: '../public/fonts/Channe.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-channe',
})

export const perpetua = localFont({
  src: [
    {
      path: '../public/fonts/Perpetua Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-perpetua',
})

export const kunstler = localFont({
  src: [
    {
      path: '../public/fonts/kunstler.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-kunstler',
})

export const bellMt = localFont({
  src: [
    {
      path: '../public/fonts/Bell MT Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bell-mt',
})

export const bickhamScript = localFont({
  src: [
    {
      path: '../public/fonts/Bickham Script Pro Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Bickham Script Pro Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Bickham Script Pro Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-bickham-script',
})

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-sorts-mill",
})

export const romanticLovely = localFont({
  src: [
    {
      path: '../public/fonts/Romantic Lovely.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-romantic-lovely',
})

export const trajanPro = localFont({
  src: [
    {
      path: '../public/fonts/TrajanPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-trajan-pro',
})

export const century = localFont({
  src: [
    {
      path: '../public/fonts/Century Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-century',
})

export const milyuna = localFont({
  src: [
    {
      path: '../public/fonts/Milyuna-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-milyuna',
})

export const constantia = localFont({
  src: [
    {
      path: '../public/fonts/constan.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-constantia',
})

const corben = Corben({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-corben",
  display: "swap",
})

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
  display: "swap",
})

export const helloBride = localFont({
  src: [
    {
      path: '../public/fonts/Hello Bride Script.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-hello-bride',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ["normal", "italic"],
  variable: '--font-cormorant-garamond',
})

export const slight = localFont({
  src: [
    {
      path: '../public/fonts/Slight.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-slight',
})

export const bochan = localFont({
  src: [
    {
      path: '../public/fonts/Bochan Serif.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bochan',
})

const playfairDisplaySC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-play-fair-display',
})

const garamond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-garamond',
})

export const times = localFont({
  src: [
    {
      path: '../public/fonts/times.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-times',
})

export const metadata: Metadata = {
  title: "Wedding Invitaion",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`
        ${cormorant.variable} 
        ${figtree.variable} 
        ${ibmPlexSans.variable} 
        ${cinzel.variable} 
        ${outfit.variable} 
        ${cloudyAurora.variable} 
        ${notoSans.variable} 
        ${canelaTrial.variable} 
        ${theSignature.variable} 
        ${channe.variable} 
        ${perpetua.variable} 
        ${lora.variable} 
        ${kunstler.variable}
        ${bellMt.variable}
        ${bickhamScript.variable}
        ${sortsMillGoudy.variable}
        ${romanticLovely.variable}
        ${trajanPro.variable}
        ${century.variable}
        ${constantia.variable}
        ${corben.variable}
        ${ovo.variable}
        ${milyuna.variable}
        ${helloBride.variable}
        ${cormorantGaramond.variable}
        ${slight.variable}
        ${bochan.variable}
        ${playfairDisplaySC.variable}
        ${garamond.variable}
        ${times.variable}
        `}
        >
        {children}
      </body>
    </html>
  );
}
