const installButton = document.querySelector('#installBtn');

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    event.prompt();
    installButton.style.display = 'none';
  });
});
