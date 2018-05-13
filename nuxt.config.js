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
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Bungee|IBM+Plex+Sans:100,200,300,400,500,600,700|Open+Sans:300,400,600,700,800|Quicksand:300,400,500,700|Source+Sans+Pro:200,300,400,600,700,900' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
		]
	},
	/*
  ** Global CSS
  */
	css: ['~/assets/css/main.less'],
	/*
  ** Add axios globally
  */
	build: {
		vendor: ['axios'],
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
	},
	/*
	** Plugins
	*/
	plugins: ['~/plugins/i18n.js']
}
