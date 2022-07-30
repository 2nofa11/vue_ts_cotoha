const { configs } = require('@typescript-eslint/eslint-plugin')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({

  devServer: {
    proxy: {
      // '^/api/':{target:''}
      
      '^/api/':{target:'https://script.google.com/macros/s/AKfycbwCFRzlEUmjOMIiz5NZF9Gx9uZUMfG9dL_56qzzo6GPpkF0_dSoeY4-mpTbCT3pOPCG/exec'}
    },  
  },
  transpileDependencies: true,
  publicPath: '/vue_ts_cotoha/',
  outputDir: 'docs',
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
