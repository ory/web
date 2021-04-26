const copydir = require('copy-dir')
const fs = require('fs')

;[
  './public/css',
  './public/docs',
  './public/en',
  './public/images',
  './public/img',
  './public/js',
  './public/versions',

].forEach(function(d) {
  try {
    fs.mkdirSync(d, { recursive: true })
  } catch (e) {
    console.log('Got error while creating dir', d, e.message)
  }
})

;[
  'keto',
  'kratos',
  'oathkeeper',
  'hydra',
].forEach((project) => {
  const dst = `./public/${project}/docs`
  try {
    fs.mkdirSync(dst, { recursive: true })
  } catch (e) {
    console.log('Got error while creating dir', dst, e.message)
  }

  const src = `./generated/docs/${project}/`
  copydir.sync(src, dst)
  // Workaround for https://github.com/facebook/docusaurus/issues/2537
  // fse.copySync(`${src}index/index.html`, `${dst}/index.html`)
})

// It's time for v1 to die:
//  copydir.sync('./generated/v1/docs/css', './public/css')
//  copydir.sync('./generated/v1/docs/docs', './public/docs')
//  copydir.sync('./generated/v1/docs/en', './public/en')
//  copydir.sync('./generated/v1/docs/images', './public/images')
//  copydir.sync('./generated/v1/docs/img', './public/img')
//  copydir.sync('./generated/v1/docs/js', './public/js')
//  copydir.sync('./generated/v1/docs/versions', './public/versions')
//
//  fse.copySync('./generated/v1/docs/sitemap.xml', './public/docs/sitemap.xml')
//  fse.copySync('./generated/v1/docs/versions.html', './public/docs/versions.html')

// ecosystem needs to be copied after v1 docs!
copydir.sync('./generated/docs/docs', './public/docs')
