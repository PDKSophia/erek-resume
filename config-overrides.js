/**
 * @Desc: 扩展 webpack
 * @Author: pengdaokuan
 * @CreateDate:  2019-11-23
 * @LastModify:  2019-11-23
 */

// 注意: 新的react-app-rewired@2.x版本的关系。react-app-rewired删除所有方法的injectBabelPlugin
// 解决方案，可以采用降级方案: npm install react-app-rewired@2.0.2-next.0
// 这里不降级的话，可以网上找些文章，就知道如何配置拉

const {
  override,
  // fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  // addWebpackPlugin
  // addLessLoader
} = require('customize-cra')
const path = require('path')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier')

module.exports = override(
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true
  // }),

  addWebpackAlias({
    business: path.resolve(__dirname, 'src/business'),
    components: path.resolve(__dirname, 'src/common/components'),
    helper: path.resolve(__dirname, 'src/common/helper'),
    utils: path.resolve(__dirname, 'src/common/utils')
  }),

  addDecoratorsLegacy(),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' }
  // })

  // addWebpackPlugin(
  //   new WebpackBuildNotifierPlugin({
  //     title: 'My Project Webpack Build',
  //     suppressSuccess: true
  //   })
  // )
)
