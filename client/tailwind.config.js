module.exports = {
  content: [
    './client/src/**/*.{js,ts,jsx,tsx}', // Update to point to the right folder
    './client/public/index.html', // Example of your public folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        accent: '#9013FE',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
