/* eslint-disable @typescript-eslint/no-var-requires */
const { src, dest } = require('gulp')
const path = require('path')
const fs = require('fs')
const jsonc = require('jsonc-parser')
const download = require('gulp-download2')
const shikiDir = path.dirname(require.resolve('shiki/package.json'))
const map = require('map-stream')

function downloadThemes() {
  const themes = [
    {
      url: 'https://raw.githubusercontent.com/rokoroku/vscode-theme-darcula/master/themes/darcula.json',
      file: 'darcula.json'
    }
  ]
  // I'm so sorry
  return download(themes, {
    headers: {
      'user-agent': 'gulp-jennie',
    },
  }).pipe(dest('./themes/')).pipe(map(function(file, done) {
    const errors = []
    const fileName = path.basename(file.path)
    const nameWithoutExt = fileName.replace(/\.json$/i, '')
    const parsedFile = jsonc.parse(fs.readFileSync(file.path, 'utf-8'), errors, { allowTrailingComma: true })
    if (!parsedFile.name || parsedFile.name !== nameWithoutExt) {
      parsedFile.name = nameWithoutExt
    }
    const test = JSON.stringify(parsedFile, null, 2)
    file.contents = new Buffer(test)
    done(null, file)
  })).pipe(dest('./themes/'))
}

function prebuild() {
  const sources = [
    path.join(shikiDir, 'themes*/**/*'),
    path.join(shikiDir, 'languages*/**/*'),
    './themes*/**/*',
    './languages*/**/*',
  ]
  return src(sources).pipe(dest('./dist/'))
}

exports.prebuild = prebuild
exports.downloadThemes = downloadThemes
exports.default = prebuild
