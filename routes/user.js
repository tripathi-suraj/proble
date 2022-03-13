var routes = {};
routes.user = function (req, res, next) {
  res.render('user', { title: 'User' });
};

routes.create = function (req, res) {
  console.log(req.body);
};

exports.attachRoute = function (app) {
  app.get('/user', routes.user);
  app.post('/createuser', routes.create);
};
