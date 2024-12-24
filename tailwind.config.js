/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // tailwind.config.js

  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Adding Poppins as the default sans-serif font
      },
     
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      animation: {
        'marquee-left-to-right': 'marqueeLeftToRight 15s linear infinite', // Left to Right animation
        'marquee-right-to-left': 'marqueeRightToLeft 15s linear infinite', // Right to Left animation
        fadeInSlideRight: 'fadeInSlideRight 1s ease-in-out forwards',
        fadeInSlideLeft: 'fadeInSlideLeft 1s ease-in-out forwards',
        rotateText: 'rotateText 10s linear infinite',
        spin: 'spin 1s linear infinite',
        rotate: 'rotate 10s linear infinite',
        'beat-heart': 'beat-heart 1s ease-in-out infinite',
        gradientMove: 'gradientMove 3s infinite',
      },
      keyframes: {
        marqueeLeftToRight: {
          '0%': { transform: 'translateX(-100%)' }, // Starts off-screen to the left
          '100%': { transform: 'translateX(100%)' }, // Ends off-screen to the right
        },
        marqueeRightToLeft: {
          '0%': { transform: 'translateX(100%)' }, // Starts off-screen to the right
          '100%': { transform: 'translateX(-100%)' }, // Ends off-screen to the left
        },
        fadeInSlideRight: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeInSlideLeft: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        'beat-heart': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        gradientMove: {
          '0%': { backgroundPosition: '0%' },
          '100%': { backgroundPosition: '100%' },
        },
        
      }
    }
  },
  plugins: []
}
