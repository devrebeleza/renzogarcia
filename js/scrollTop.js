var last_known_scroll_position = 0;
var ticking = false;

function displayBackTop(scroll_pos) {
  if (scroll_pos >= 100) {
    document.getElementById('scroll-up').className = 'scroll-up displayOn';
  } else {
    document.getElementById('scroll-up').className = 'scroll-up displayOff';
  }
}

window.addEventListener('scroll', function (e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      displayBackTop(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
