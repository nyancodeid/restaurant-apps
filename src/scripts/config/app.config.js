const config = {
  version: 'v1',
  name: 'kalapps',
  base_url: 'https://api.themoviedb.org/3',
  db: {
    name: 'kalapps-database',
    version: 1,
    object_store_name: 'restaurant',
  },
  ws: {
    server: 'wss://movies-feed.dicoding.dev',
  },
};

export default config;
