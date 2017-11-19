const path = require("path");
const HtmlWP = require("html-webpack-plugin");//导入插件html-webpack-plugin
const CleanWP = require("clean-webpack-plugin");

module.exports = {
  // 打包的入口文件
  entry:path.resolve(__dirname,"./src/index.html"),
  // 输出
  output:{
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  // 插件配置
  plugins:[
    new HtmlWP({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body"
    }),
    new CleanWP(["dist"])
  ],
  // 模块配置
  module:{
    // 配置loader规则
    rules:[
      //css文件
      { 
        test:/\.csss$/,
        use:[ "style-loader","css-loader" ]
      },
      //less文件
      {
        test:/\.less$/,
        use:["style-loader","css-loader","less-loader"]
      },
      //html
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      //静态资源
      {
        test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
        use: [
            // 计算机中存储的单位：Bit，Byte，KB，MB，GB，TB
            // 这里limit选项需要配置的单位是字节(byte)，一般配置8到10KB
            {
                loader: 'url-loader',
                options: {limit: 8192, name: '[name]_[hash:8].[ext]'} // 小于8kb的文件转为base64, 文件名称使用6位hash
            }
        ]
      },
      // babel （js）
      {
        test: /\.js$/,
        use: [ 'babel-loader' ],
        exclude: path.resolve(__dirname, '../node_modules')  // 注意绝对路径
      },
      //打包vue文件
      {
        test: /\.vue$/,
        use: [ 'vue-loader' ]
      }
      ]
    }
  }