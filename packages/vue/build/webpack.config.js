const webpack = require('webpack')
const { merge } = require('webpack-merge')
const path = require('path')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

const plugins = [
  new FriendlyErrorsWebpackPlugin({
    clearConsole: true
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })
]

const baseConfig = {
  resolve: {
    extensions: ['*', '.js', '.vue'],
    // pulling bootstrap-vue directly from source code, no transpilation
    alias: {
      // Alias for using source of BootstrapVue
      'bootstrap-vue$': 'bootstrap-vue/src/index.js'
    },
    modules: ['node_modules']
  },
  plugins,
  entry: './index.js',
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    pathinfo: false,
    library: '@az-bootstrap-components/vue',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
}

const configs = {
  developement: {
    devtool: 'source-map',
    mode: 'development',
    output: {
      filename: 'az-bootstrap-vue.js',
    }
  },
  production: {
    mode: 'production',
    output: {
      filename: 'az-bootstrap-vue.min.js',
    },
    performance: {
      hints: false
    }
  }
}

function buildConfigs (opts) {
  const config = merge({}, baseConfig, opts)

  return config
}

// if (process.env.TARGET) {
//   module.exports = genConfig(builds[process.env.TARGET])
// } else {
//   module.exports = Object.keys(configs).map(name => buildConfigs(configs[name]))
// }

module.exports = Object.keys(configs).map(name => buildConfigs(configs[name]))
