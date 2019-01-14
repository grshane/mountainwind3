import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  googleFonts: [
    { name: 'Didact Gothic', styles: ['400'] },
    { name: 'Open Sans', styles: ['400'] },
  ],
  headerFontFamily: ['Didact Gothic', 'Arial', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'serif'],
})

export default typography
