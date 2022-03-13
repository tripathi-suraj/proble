var routes = {};

routes.home = function (req, res) {
  res.render('index', { title: 'Home Api' });
};

routes.version = function (req, res) {
  res.send('api ver 20.0');
};

exports.attachRoute = function (app) {
  app.get('/', routes.home);
  app.get('/v', routes.version);
};
