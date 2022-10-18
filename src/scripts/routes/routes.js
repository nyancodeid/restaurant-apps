const routes = {
  '/': import(/* webpackChunkName: "restaurants-view" */ '../views/pages/restaurants.view')
    .then(view => view.default),
  '/favorite': import(/* webpackChunkName: "favorite-view" */'../views/pages/favorite.view')
    .then(view => view.default),
  '/detail/:id': import(/* webpackChunkName: "detail-view" */ '../views/pages/detail.view')
    .then(view => view.default),
};

export default routes;
