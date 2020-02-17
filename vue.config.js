const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  pwa: {
    name: `Candidates supporting Universal Basic Income`,
    themeColor: `#2b3d4f`,
    manifestOptions: {
      short_name: `UBI Candidates`
    },
    workboxOptions: {
      exclude: [`_redirects`, `_headers`],
      // https://forum.vuejs.org/t/vue-cli-3-project-with-pwa-not-busting-cache-on-new-builds/50252/7
      skipWaiting: true,
      clientsClaim: true
    }
  },
  devServer: {
    port: 2024
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: `static`,
        reportFilename: `bundleAnalyzer.html`,
        openAnalyzer: false
      })
    ]
  }
};
