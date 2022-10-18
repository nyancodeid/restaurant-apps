const routes = {
  '/': import('../views/pages/restaurants.view')
    .then(view => view.default),
  '/favorite': import('../views/pages/favorite.view')
    .then(view => view.default),
  '/detail/:id': import('../views/pages/detail.view')
    .then(view => view.default),
};

export default routes;
