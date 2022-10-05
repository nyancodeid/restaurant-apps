import AppStoreImage from '../../public/images/app-store.webp';
import PlayStoreImage from '../../public/images/play-store.webp';

class FooterSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = String.raw`
      <section class="footer_content">
        <div class="wrapper_container">
          <div class="footer_brand">
            <h2>Kal<b>Apps</b></h2>

            <div class="footer_download">
              <a href="#">
                <img
                  loading="lazy"
                  src="${AppStoreImage}"
                  alt="Download on the App Store"
                />
              </a>
              <a href="#">
                <img
                  loading="lazy"
                  src="${PlayStoreImage}"
                  alt="Get it on Google Play Store"
                />
              </a>
            </div>
          </div>
          <div class="footer_navigation">
            <ul>
              <li><a href="#">Get Help</a></li>
              <li><a href="#">Buy gift cards</a></li>
              <li><a href="#">Add your restaurant</a></li>
              <li><a href="#">Promotions</a></li>
            </ul>
          </div>
          <div class="footer_navigation">
            <ul>
              <li><a href="#">Restaurant near me</a></li>
              <li><a href="#">View all cities</a></li>
              <li><a href="#">View all countries</a></li>
              <li><a href="#">About KalApps</a></li>
            </ul>
          </div>
        </div>
      </section>

      <section class="footer_note">
        <span>Copyright &copy; 2022 - KalApps - Ryan Aunur Rassyid</span>
      </section>
    `;
  }
}

export default FooterSection;
