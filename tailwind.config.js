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
        slight: ['var(--font-slight)'],
      }
    },
    keyframes: {
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'fade-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'fade-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(20px)',
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)',
        },
      },
      'zoom-in': {
        '0%': {
          opacity: '0',
          transform: 'scale(0.95)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      'scale-in': {
        '0%': {
          opacity: '0',
          transform: 'scale(0)',
        },
        '100%': {
          opacity: '1',
          transform: 'scale(1)',
        },
      },
      'menu-in': {
        '0%': {
          transform: 'scale(0, 0)',
          transformOrigin: 'top left',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
      'menu-out': {
        '0%': {
          transform: 'scale(1)',
          transformOrigin: 'top left',
        },
        '100%': {
          transform: 'scale(0)',
          transformOrigin: 'top left'
        },
      },
      'close-menu-in': {
        '0%': {
          opacity: '0',
          transform: 'scaleY(0)',
          transformOrigin: '100% 0%',
        },
        '100%': {
          opacity: '1',
          transform: 'scaleY(1)',
          transformOrigin: '100% 0%',
        },
      },
      'item-menu-in': {
        '0%': {
          transform: 'translateX(-30px)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)',
          opacity: '1',
        },
      },
      'item-in': {
        '0%': {
          opacity: '0',
          transform: 'translateY(100%)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)',
        },
      },
      'item-menu-out': {
        '0%': {
          opacity: '1'
        },
        '100%': {
          opacity: '0'
        }
      },
      'close-menu-out': {
        '0%': {
          opacity: '1',
          transform: 'scaleY(1)',
          transformOrigin: '100% 0%',
        },
        '100%': {
          opacity: '0',
          transform: 'scaleY(0)',
          transformOrigin: '100% 0%',
        }
      }
    },
    animation: {
      'fade-in': 'fade-in 0.5s ease-out forwards',
      'fade-up': 'fade-up 0.8s ease-out forwards',
      'fade-down': 'fade-down 0.8s ease-out forwards',
      'fade-left': 'fade-left 0.8s ease-out forwards',
      'fade-right': 'fade-right 0.8s ease-out forwards',
      'scale-in': 'scale-in 0.5s ease-out forwards',
      'menu-in': 'menu-in 0.25s ease-in forwards',
      'menu-out': 'menu-out 0.25s ease-in forwards',
      'close-menu-in': 'close-menu-in 0.5s ease 0s 1 normal forwards',
      'item-menu-in': 'item-menu-in 1s ease-out forwards',
      'item-in': 'item-in 0.25s ease-out 0s 1 normal forwards',
      'close-menu-out': 'close-menu-out 0.5s ease 0s 1 normal forwards',
      'item-menu-out': 'item-menu-out 0.1s ease-out forwards',
    },
  },
  plugins: [],
}

