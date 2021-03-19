$(document).ready(function () {

    // event handler for hamburger icon animation
    $('.second-button').on('click', function () {
  
      $('.animated-icon').toggleClass('open');
    });

    // TODO let's get some gsap animations in here 
    gsap.from(".my-name", {duration: 3.5, opacity: 0, scale: 0.01, ease: "back"});
    gsap.from(".web-dev", {duration: 1, opacity: 0, y: 150, delay: 2.5});

  });