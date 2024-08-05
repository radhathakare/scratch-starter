const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  eslint: {
    enable: true,
    mode: 'extends', // Use 'file' if you want to use a specific eslint configuration file
    configure: {
      // You can customize ESLint configuration here
      rules: {
        // Disable specific rules or adjust settings
        'jsx-a11y/alt-text': 'warn',
        'no-unused-vars': 'warn',
      },
    },
  },
};
