import 'iconify-icon';
import 'regenerator-runtime';
import '../styles/main.scss';
import 'notyf/notyf.min.css';

import App from './views/app';

const app = new App({
  button: document.querySelector('#nav-trigger'),
  drawer: document.querySelector('#nav-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('DOMContentLoaded', () => {
  app.renderPage();
});

if (module && module.hot) module.hot.accept();
