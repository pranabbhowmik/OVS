/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      spacing: {
        '50': '50rem',
        '59': '25rem',
        '61': '30rem',
        '62': '37rem',
        '73': '19rem',
        '63': '29rem',
        '65': '49rem',
        '67': '57rem',
        '47': '54rem',
        '69': '43rem',
        '85': '22rem',
        '88': '23.5rem',
        '75': '36rem',
        '77': '32rem',
        '76': '65rem',
        '79': '80rem',
        '83': '88rem',
        '78': '97rem',
        '18': '108rem',
        '19': '34rem',
        '45': '11.5rem',
        '25': '17.5rem',
        '27': '40rem',
        '33': '60rem',
        '55': '45rem',
        '57': '27rem',
        '87': '85rem',
        '21': '21rem',
        '13': '38rem',
        '74': '70rem',
        '71': '76rem',
        '90': '100rem',
        '53': '52rem',
        '41': '66rem',
        '66': '4.5rem',
        '100': '41rem',
        '101': '46rem',
        '102': '63rem',
        '103': '68rem',
        '104': '67rem',
        '105': '41rem',
        '106': '26.5rem',
        '107': '23rem',
        '108': '8.5rem',
        '109': '51rem',
        '110': '4.5rem',
        '111': '27.5rem',
        '112': '10.5rem',
        '113': '26rem',
        '114': '93rem',
        '115': '48rem',
        '116': '28rem',
        '117': '56rem',
        '118': '72rem',
        '119': '42rem',
        '120': '36rem',
      },
      screens: {
        'sm': '380px',
        // => @media (min-width: 640px) { ... }

        'md': '668px',
        // => @media (min-width: 768px) { ... }

        'lg': '984px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },

      colors: {
        tuku: {
          300: "#F5831C",
        },
        joyi: {
          300: "rgba(255,255,255,0.5)",
        },
        google: {
          300: "#0F9D58",
        },
        tukai: {
          200: "#1FB578"
        },
        abir: {
          100: '#006168'
        },
        pata: {
          100: '#ADD57D'
        },
        chup: {
          900: '#1F222E'
        },
      },
      keyframes: {
        'trans-right': {
          '0%, 100%': { transform: 'translateX(40px)' },
          '50%': { transform: 'translateX(0)' }
        },
      },
      animation: {
        'trans-right': 'trans-right 1.5s ease-in-out infinite'
      },

    },
    //  margin: {
    //         '72': '30rem',
    //           '50': '18rem',
    //            },
  },
  plugins: [],
}