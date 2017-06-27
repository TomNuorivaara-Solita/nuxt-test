module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/icon?family=Material+Icons|Roboto|Montserrat:200,400,500,700' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#0046ad' },
  /*
  ** Base URL
  */
  router: { base: '/nuxt-test/' },
  /*
  ** CSS and SCSS
  */
  css: [
    // Sass file in the project
    { src: '~/assets/css/style.scss', lang: 'scss' } // scss instead of sass
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
