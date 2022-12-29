const validateImportFonts = require('./import-fonts.js');
const validateImportNormalize = require('./import-normalize.js');
const fontFaceDeclarationInFontsFileOnly = require('./font-face-declaration-in-fonts-file-only.js');
const validateFontFaceDeclarationSrc = require('./font-face-duplicate-src');

const plugins = [
  validateImportFonts,
  validateImportNormalize,
  fontFaceDeclarationInFontsFileOnly,
  validateFontFaceDeclarationSrc
];

module.exports = plugins;
