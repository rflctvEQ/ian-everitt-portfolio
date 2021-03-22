$(document).ready(function() {

    // event handler for hamburger icon animation
    $('.second-button').on('click', function() {
      $('.animated-icon').toggleClass('open');
    });

    // event handlers for collapsing navbar menu when links are clicked 
    $('.nav-link').on('click', function() {
      $('.animated-icon').toggleClass('open');
      $('.navbar-collapse').removeClass('show')
    });

    // navbar scroll behavior
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        $('.custom-nav').css('top', '0');
      // this ensures that the navbar doesn't disappear when the user clicks on the hamburger icon
      } else if ($('.animated-icon').hasClass('open') === true) {
        $('.custom-nav').css('top', '0');
      } else {
        $('.custom-nav').css('top', '-50px');
      }
      prevScrollPos = currentScrollPos
    }

    // gsap animation for .custom-jumbo
    gsap.from(".my-name", {duration: 3.5, opacity: 0, scale: 0.01, ease: "back"});
    gsap.from(".web-dev", {duration: 1, opacity: 0, y: 150, delay: 2.5});
  });