/**
 * 此文件是create-react-app 官方推荐一个库 customize-cra 的扩展webpack配置文件
 * TODO: 基于common.js规范
 */

const { override,fixBabelImports, addLessLoader } = require('customize-cra');
// const { getThemeVariables } = require('antd/dist/theme');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style 的选项 'css' 表示引入的 css 文件， true 表示引入的less
    style: true,
  }),
  // 定制主题 https://ant.design/docs/react/customize-theme-cn
  addLessLoader({
    modifyVars: { '@primary-color': '#d214a2', '@font-size-base': '12px' },
    // modifyVars: getThemeVariables({
    //   dark: true, // 开启暗黑模式
    // }),
    javascriptEnabled: true
  }),
)