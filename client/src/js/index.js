import { Workbox } from 'workbox-window';
import Editor from './editor';
import './database';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

if ('serviceWorker' in navigator) {
  const wb = new Workbox('./service-worker.js');

  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      alert('New content is available, please refresh.');
    }
  });

  wb.register()
    .then(() => console.log('Service worker registered'))
    .catch((error) => console.error('Service worker registration failed', error));
}

