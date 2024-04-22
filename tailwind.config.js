import tailwindcssForms from '@tailwindcss/forms';
import rippleui from 'rippleui';

/** @type {import('rippleui').Config} */

const extendedTailwindcssTheme = {
  extend: {
    colors: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      neon: 'var(--neon-color)'
    }
  }
};

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: extendedTailwindcssTheme,
  plugins: [tailwindcssForms, rippleui]
};
