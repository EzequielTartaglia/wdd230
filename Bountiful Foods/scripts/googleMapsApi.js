const googleMapsIframe = document.getElementById('GoogleMaps');

function updateIframeSize(mq) {
  if (mq.matches) {
    // Mobile
    googleMapsIframe.style.width = '90%';
    googleMapsIframe.style.height = '400px';
  } else {
    // Tablet & Desktop
    googleMapsIframe.style.maxWidth = '660px';
    googleMapsIframe.style.height = '400px';
  }
}

const mediaQuery = window.matchMedia('(max-width: 600px)');
updateIframeSize(mediaQuery); 
mediaQuery.addListener(updateIframeSize); 

