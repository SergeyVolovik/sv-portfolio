import tailwindcssForms from '@tailwindcss/forms';
import rippleui from 'rippleui';

/** @type {import('rippleui').Config} */

const extendedTailwindcssTheme = {
  extend: {
    colors: {
      black: 'var(--black)',
      blackRgba7: 'var(--blackRgba7)',
      blackRgba10: 'var(--blackRgba10)',
      blackRgba20: 'var(--blackRgba20)',
      blackRgba50: 'var(--blackRgba50)',
      white: 'var(--white)',
      gray: 'var(--gray)',
      darkGray: 'var(--dark-gray)',
      lightGray: 'var(--light-gray)'
    }
  }
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: extendedTailwindcssTheme,
  plugins: [tailwindcssForms, rippleui]
};
