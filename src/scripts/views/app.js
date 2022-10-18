import FooterSection from '../components/footer-section';
import RandomEmoji from '../components/random-emoji';
import RestauranItem from '../components/restaurant-item';
import ReviewItem from '../components/review-item';
import TestimonialSection from '../components/testimonial-section';
import routes from '../routes/routes';

import DrawerInitiator from '../utils/drawer.initiator';
import UrlParser from '../utils/url.parser';

class App {
  constructor({
    button, drawer, content, skipLink,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;

    this._initialCustomElement();
    this._initialAppShell();
  }

  _initialAppShell() {
    this._initialSkipLink();

    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  _initialCustomElement() {
    customElements.define('review-item', ReviewItem);
    customElements.define('restaurant-item', RestauranItem);
    customElements.define('testimonial-section', TestimonialSection);
    customElements.define('footer-section', FooterSection);
    customElements.define('random-emoji', RandomEmoji);
  }

  _initialSkipLink() {
    this._skipLink.addEventListener('click', () => {
      this._content.tabIndex = 0;
      this._content.focus();
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const main = this._content.querySelector('#main-content');

    try {
      const page = await routes[url];
      main.innerHTML = await page.render();
  
      await page.afterRender();
    } catch (err) {
      main.innerHTML = this._renderErrorNotFound();
    }
  }

  _renderErrorNotFound() {
    return String.raw`
      <section class="restaurant restaurant_favorite">
        <div class="wrapper_container">
          <div class="restaurant_contents">
            <div class="restaurant__empty_result active">
              <random-emoji></random-emoji>
              <span>Whopss! we can't found the page your are requested.</span>
            </div>
          </div>
        </div>
      </section>
    `
  }
}

export default App;
