const proxy = require('http-proxy-middleware')

module.exports = function (app) {
  /*
app.use("自定义url".proxy({  }))
*/
  app.use(
    '/foreign',
    proxy.createProxyMiddleware({
      target: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign',
      secure: true,
      changeOrigin: true,
      pathRewrite: {
        '^/foreign': '',
      },
      cookieDomainRewrite: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_foreign',
    })
  )

  app.use(
    '/china',
    proxy.createProxyMiddleware({
      target: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
      secure: true,
      changeOrigin: true,
      pathRewrite: {
        '^/china': '',
      },
      cookieDomainRewrite: 'https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5',
    })
  )
}
