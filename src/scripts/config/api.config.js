const api = {
  base_url: 'https://restaurant-api.dicoding.dev',
  base_image_url: 'https://restaurant-api.dicoding.dev/images',
  lists() {
    return `${this.base_url}/list`;
  },
  detail(id) {
    return `${this.base_url}/detail/${id}`;
  },
  search(query) {
    return `${this.base_url}/search?q=${query}`;
  },
  picture(id, dimension = 'small') {
    return `${this.base_image_url}/${dimension}/${id}`;
  },
  avatar(name) {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&rounded=true&background=fff9f4`;
  },
  review() {
    return `${this.base_url}/review`;
  },
};

export default api;
