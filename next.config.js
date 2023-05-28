// module.exports = {
//   webpack: (config) => {
//     config.node = {
//       fs: 'empty'
//     }
//     return config
//   }
// };
const withCss = require('@zeit/next-css'); 
module.exports = withCss({
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
});