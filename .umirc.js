
// ref: https://umijs.org/config/
const Routes = require('./src/utils/routes')
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'HLCweb',
      dll: false,
      routes: {
        exclude: [],
      },
      hardSource: true,
    }],
  ],
  routes:Routes,
  history:'hash',
}
