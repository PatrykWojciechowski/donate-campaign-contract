const routes = require("next-routes")();

routes.add('/new', '/new')
routes.add('/:address', '/details');

module.exports = routes;
