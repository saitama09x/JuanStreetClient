const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()
  
  server.use('/client', createProxyMiddleware({
    target: 'http://juanstreet.com.ph:3001', 
    pathRewrite: {
        '^/client': '/client'
    },
    changeOrigin: true
  }));

  server.get('*', (req, res) => {
      return handle(req, res)
  })
    
  server.listen(3002, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3002')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})