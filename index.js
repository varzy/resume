window.onload = function() {
  setFavicon();
  registerPdfDownloader();
  registerDocxDownloader();
}

function setFavicon() {
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = './favicon.png';
  document.getElementsByTagName('head')[0].appendChild(link);
}

function registerPdfDownloader() {
  document.
}
