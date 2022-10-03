export default class RestauranItem extends HTMLElement {
  set restaurant(data) {
    this.render(data);
  }

  render({ name, description, city, pictureId: thumbnail, rating }) {
    this.innerHTML = String.raw`
      <div class="restaurant_item__header">
        <img
          loading="lazy"
          src="${thumbnail}"
          alt="${name}"
        />

        <span class="badge">Kota ${city}</span>
      </div>
      <div class="restaurant_item__content">
        <div class="restaurant_title">
          <a class="restaurant_item__title" href="">
            <h3>${name}</h3>
          </a>

          <a class="restaurant_item__reservasion touch__target" aria-label="Made a reservasion" href="">
            <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#401e21" d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046c-8.837 0-16-7.163-16-16c0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149a13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z"/></svg>
          </a>
        </div>
        <div class="restaurant_item__rating">
          ${this.renderRating(rating)}

          <span class="badge" tabindex="0" aria-label="Restaurant rating is ${rating}">${rating}</span>
        </div>
        <p>
          ${description}
        </p>
      </div>
    `;
  }

  renderRating(rate) {
    const filledStarCount = Math.round(rate);
    const emptyStarCount = 5 - filledStarCount;

    const filledStar = new Array(filledStarCount).fill(String.raw`
      <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fec800" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.866.55l-5.231 4.48l1.598 6.7z"/></svg>
    `);

    const emptyStar = new Array(emptyStarCount).fill(String.raw`
      <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#fec800" d="m12 17l-5.878 3.59l1.598-6.7l-5.23-4.48l6.865-.55L12 2.5l2.645 6.36l6.866.55l-5.231 4.48l1.598 6.7L12 17zm0-2.344l2.817 1.72l-.766-3.21l2.507-2.147l-3.29-.264L12 7.708l-1.268 3.047l-3.29.264l2.507 2.147l-.766 3.21L12 14.657z"/></svg>
    `);

    return [...filledStar, ...emptyStar].join("");
  }
}
