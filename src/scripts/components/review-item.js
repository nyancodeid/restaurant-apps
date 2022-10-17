import api from '../config/api.config';

class ReviewItem extends HTMLElement {
  set review(data) {
    this.render(data);
  }

  render({ name, review, date }) {
    this.innerHTML = String.raw`
      <div class="review__item">
        <img class="review__item_avatar" src="${api.avatar(name)}" alt="Avatar ${name}" />
        <div class="review__item_content">
          <span class="review__item_name">${name}</span>
          <span class="review__item_date">${date}</span>
          <p class="review__item_content">${review}</p>
        </div>  
      </div>
    `;
  }
}

export default ReviewItem;
