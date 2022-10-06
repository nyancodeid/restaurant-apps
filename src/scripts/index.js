import 'iconify-icon';
import 'regenerator-runtime';
import '../styles/main.scss';
import 'notyf/notyf.min.css';

import App from './views/app';
import ServiceWorker from './utils/sw.register';

const app = new App({
  button: document.querySelector('#nav-trigger'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#content'),
  skipLink: document.querySelector('#skip-link'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();

  ServiceWorker.register();
});
