const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('stocks', '/stocks')
routes.add('stock', '/stocks/:slug')
