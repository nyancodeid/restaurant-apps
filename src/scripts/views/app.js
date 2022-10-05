import FooterSection from '../components/footer-section';
import RandomEmoji from '../components/random-emoji';
import RestauranItem from '../components/restaurant-item';
import ReviewItem from '../components/review-item';
import TestimonialSection from '../components/testimonial-section';
import routes from '../routes/routes';

import DrawerInitiator from '../utils/drawer.initiator';
import UrlParser from '../utils/url.parser';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
    this._initialCustomElement();
  }

  _initialAppShell() {
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

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
