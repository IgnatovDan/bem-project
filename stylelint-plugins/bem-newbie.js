const validateImportFonts = require('./import-fonts.js');
const validateImportNormalize = require('./import-normalize.js');
const fontFaceDeclarationInFontsFileOnly = require('./font-face-declaration-in-fonts-file-only.js');
const validateFontFaceDeclarationSrc = require('./font-face-duplicate-src');
const classNameEqualToFileName = require('./class-name-equal-to-file-name');


const plugins = [
  validateImportFonts,
  validateImportNormalize,
  fontFaceDeclarationInFontsFileOnly,
  validateFontFaceDeclarationSrc, 
  classNameEqualToFileName
];

module.exports = plugins;
