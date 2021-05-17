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
  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      $('.custom-nav').css('top', '0');
    // this ensures that the navbar doesn't disappear when the user clicks on the hamburger icon
    } else if ($('.animated-icon').hasClass('open') === true) {
      $('.custom-nav').css('top', '0');
    // this fixes a bug for mobile ux where navbar disappears when users scrolls to top
    } else if (currentScrollPos < 30) {
      $('.custom-nav').css('top', '0');
    } else {
      $('.custom-nav').css('top', '-50px');
    }
    prevScrollPos = currentScrollPos
  });

  // gsap animation for .custom-jumbo
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ease: 'none', duration: 2});

  gsap.from(".my-name", {
    duration: 2.5, 
    opacity: 0, 
    scale: 0.01, 
    ease: "back"
  });

  gsap.from(".web-dev", { 
    duration: 1, 
    opacity: 0, 
    y: 150, 
    delay: 1.5
  });

  // animation for viewing on tablet/desktop
  let atLeastTabletWidth = window.matchMedia('(min-width: 700px');
  if (atLeastTabletWidth.matches) {
    // animation for first block of words in .about section
    gsap.from('.hi', {
      scrollTrigger: {
        trigger: '.hi',
        start: 'top bottom',
        end: 'bottom center',
        scrub: 1,
        toggleActions: "restart pause reverse pause"
      },
      x: -250,
      opacity: 0,
      duration: 1.5
    });

    // animation for profile pic in .about section
    gsap.from('.profile-pic', {
      scrollTrigger: {
        trigger: '.profile-pic',
        start: 'top bottom',
        end: 'bottom center',
        scrub: 1,
        toggleActions: "restart pause reverse pause"
      },
      opacity: 0,
      scale: 0.6,
      duration: 2.5
    });

    // animiation for second block of text in .about section
    gsap.from('.so-happy', {
      scrollTrigger: {
        trigger: '.so-happy',
        start: 'top bottom',
        end: 'bottom 80%',
        scrub: 1,
        toggleActions: "restart pause reverse pause"
      },
      x: 250,
      opacity: 0,
      duration: 1.5
    });

    // animation for last block of text in .about section
    gsap.from('.about-desc', {
      scrollTrigger: {
        trigger: '.so-happy',
        start: 'top bottom',
        end: 'bottom 80%',
        scrub: 1,
        toggleActions: "restart pause reverse pause"
      },
      opacity: 0,
      scale: 0.6,
      duration: 2.5
    });
  }

  // .about animation for mobile viewing 
  let mobileView = window.matchMedia('(max-width: 700px)');
  if (mobileView.matches) {
    gsap.from('.hi', {
      scrollTrigger: {
        trigger: '.hi', 
        start: 'top 90%',
        end: 'top center',
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      }, 
      opacity: 0,
      x: -100
    });

    gsap.from('.profile-pic', {
      scrollTrigger: {
        trigger: '.profile-pic', 
        start: 'top 90%',
        end: 'top 60%',
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      }, 
      opacity: 0,
      scale: 0.3
    });

    gsap.from('.so-happy', {
      scrollTrigger: {
        trigger: '.so-happy', 
        start: 'top 90%',
        end: 'top 80%',
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      }, 
      opacity: 0,
      x: 100
    });

    gsap.from('.about-desc', {
      scrollTrigger: {
        trigger: '.so-happy', 
        start: 'top 90%',
        end: 'top 80%',
        scrub: true,
        toggleActions: 'restart pause reverse pause'
      }, 
      opacity: 0,
      scale: 0.3
    });
  }

  // animation for pinning each section (.panel)
  gsap.utils.toArray('.panel').forEach((panel) => {
    ScrollTrigger.create({
      trigger: panel,
      start: 'bottom bottom',
      pin: true,
      pinSpacing: false
    });
  });

  // changes tech logo sizes for smaller viewports
  let techDiv = $('.tech-logo');
  if ($(this).width() <= 600) {
    techDiv.children().attr('width', '100');
  };

  // for when potential employers go to see the responsiveness of my page ;)
  $(window).resize(function() {
    if ($(this).width() <= 600) {
      techDiv.children().attr('width', '100');
    } else {
      techDiv.children().attr('width', '200');
    };
  })
});