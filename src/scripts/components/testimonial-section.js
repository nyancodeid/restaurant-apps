class TestimonialSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = String.raw`
      <div class="testimonial_header">
        <h2>What Our Customer Say</h2>
        <p>What do they say about us. We keep trying to do the best.</p>
      </div>
      <div class="testimonial_content">
        <article>
          <q
            >With this website, I know where the restaurant with the best food
            is in my city.</q
          >
          <span class="testimonial_author">- John Doe</span>
        </article>

        <article>
          <q
            >Thanks to KalApps, we don't have to bother to decide which
            restaurant we should visit on the weekends.</q
          >
          <span class="testimonial_author">- Temannya John Doe</span>
        </article>

        <article>
          <q
            >Wow, how easy it is to use this app. With the search feature
            everything is so easy.</q
          >
          <span class="testimonial_author">- Saudaranya John Doe</span>
        </article>
      </div>
    `;
  }
}

export default TestimonialSection;
