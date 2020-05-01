module.exports = {
  theme: {
    fontFamily: {
      'sans': ["Inter", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      'mono': ["Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-font-inter')({ // it's plugin's default settings
      importFontFace: true,
      disableUnusedFeatures: false
    })
  ]
}
