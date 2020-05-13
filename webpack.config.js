const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env = {}) => {
  let mode = "development";
  mode = env.mode;

  const getStyleLoader = () => {
    return mode === "production" ? MiniCssExtractPlugin.loader : "style-loader";
  };

  const getPlugins = () => {
    const plugins = [
      new HtmlWebpackPlugin({
        title: "Hello world",
        buildTime: new Date().toString(),
        template: "public/index.html"
      })
    ];
    if (mode === "production") {
      plugins.push(
        new MiniCssExtractPlugin({
          filename: "css/app-[hash:8].css"
        })
      );
    }

    return plugins;
  };

  return {
    mode: mode,
    entry: {
      index: __dirname + "/src/index.js"
    },
    output: {
      filename: mode === "production" ? "[name]-[hash:8].js" : undefined,
      path: __dirname + "/dist",
      publicPath: '/'
    },
    /********* moduls */
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/i,
          exclude: /node_modules/,
          use: ["babel-loader"]
        },
        // loading .css
        {
          test: /\.css$/,
          use: [getStyleLoader(), "css-loader"]
        },
        // loading .sass .scss
        {
          test: /\.(scss|sass)$/,
          use: [getStyleLoader(), "css-loader", "sass-loader"]
        },
        // loading .less
        {
          test: /\.(less)$/,
          use: [getStyleLoader(), "css-loader", "less-loader"]
        },
        //   loading images
        {
          test: /\.(png|jpg|jpeg|gif|ico|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "images",
                name: "[name]-[sha1:hash:12].[ext]"
              }
            }
          ]
        },
        //  loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "fonts",
                name: "[name].[ext]"
              }
            }
          ]
        },
        //  loading audio
        {
          test: /\.(WAV|AIFF|APE|FLAC|MP3|Ogg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "audio",
                name: "[name].[ext]"
              }
            }
          ]
        },
        //  loading video
        {
          test: /\.(AVI|OGG|OGM|MKV|MP4|MOV)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: "video",
                name: "[name].[ext]"
              }
            }
          ]
        }
      ]
    },
    plugins: getPlugins(),
    devServer: {
      // ռոուտինգի նորմալ աշխատանքի համար պարտադիրա
      historyApiFallback: true,
      port: 3000,
      overlay: true,
      open: true,
      proxy: { "/api/**": { target: 'http://localhost:5000', secure: false }  }
    }
  };
};