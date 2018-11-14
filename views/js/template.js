$(document).ready(function () {

  $('#header').load('../share/header.html', function () {
    var navLinks = $('.nav-link');
    var title = document.title;

    if (navLinks[0].innerText === title) {
      navLinks[0].className += ' active';
    } else if (navLinks[1].innerText === title) {
      navLinks[1].className += ' active';
    } else if (navLinks[2].innerText === title) {
      navLinks[2].className += ' active';
    } else if (navLinks[3].innerText === title) {
      navLinks[3].className += ' active';
    } else if (navLinks[4].innerText === title) {
      navLinks[4].className += ' active';
    } else if (navLinks[5].innerText === title) {
      navLinks[5].className += ' active';
    }
  });
});