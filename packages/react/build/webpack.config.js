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
    extensions: ['*', '.js'],
    modules: ['node_modules']
  },
  plugins,
  entry: './src/index.js',
  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
    } 
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    pathinfo: false,
    library: '@az-bootstrap-components/react',
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
      filename: 'az-bootstrap-react.js',
    }
  },
  production: {
    mode: 'production',
    output: {
      filename: 'az-bootstrap-react.min.js',
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
