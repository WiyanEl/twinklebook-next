/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['var(--font-cormorant)'],
        figtree: ['var(--font-figtree)'],
        ibm: ['var(--font-ibm-plex-sans)'],
        cinzel: ['var(--font-cinzel)'],
        outfit: ['var(--font-outfit)'],
        cloudy: ['var(--font-cloudy)'],
        noto: ['var(--font-noto)'],
        canela: ['var(--font-canela)'],
        signature: ['var(--font-the-signature)'],
        channe: ['var(--font-channe)'],
        perpetua: ['var(--font-perpetua)'],
        lora: ['var(--font-lora)'],
        kunstler: ['var(--font-kunstler)'],
        bellmt: ['var(--font-bell-mt)'],
        bickham: ['var(--font-bickham-script)'],
        sorts: ['var(--font-sorts-mill)'],
        romantic: ['var(--font-romantic-lovely)'],
        trajan: ['var(--font-trajan-pro)'],
        century: ['var(--font-century)'],
        constantia: ['var(--font-constantia)'],
        corben: ['var(--font-corben)'],
        ovo: ['var(--font-ovo)'],
        milyuna: ['var(--font-milyuna)'],
        hello: ['var(--font-hello-bride)'],
        cormorantgaramond: ['var(--font-cormorant-garamond)'],
      }
    },
  },
  plugins: [],
}

