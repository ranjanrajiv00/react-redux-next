const routes = require('next-routes')()

module.exports = routes;

routes.add('product', '/product/:id', 'product')