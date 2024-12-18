(function ($) {

  "use strict";

  /* ---------------------------------------------

  Navigation menu

  --------------------------------------------- */

  // dropdown for mobile
  /* is_exist() */
  jQuery.fn.is_exist = function () {
    return this.length;
  }


  $(window).load(function () {

  })

  var popup_youtube = $('.video-popup-init');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}

// text slider

  var AimaasTextSlider = function ($scope, $) {
    var wrapper = $scope.find(".aximo-text-slider");

    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');

    wrapper.slick({

      rtl: settings['slider_rtl'],
      infinite: true,
      slidesToShow: settings['per_coulmn'],
      slidesToScroll: settings['slide_scroll'],
      arrows: false,
      dots: false,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 10000,
      cssEase: 'linear',
      pauseOnHover: true,
      adaptiveHeight: true,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: settings['per_coulmn'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: settings['per_coulmn_tablet'],
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: settings['per_coulmn_mobile'],
          slidesToScroll: 1,
        },
      },
      ],
    });
  }

  // Testimonial slider widget in here 

  var AximoIconBoxSlider = function ($scope, $) {
    var wrapper = $scope.find(".aximo-iconbox-slider");
    if (wrapper.length === 0)
      return;
      var settings = wrapper.data('settings');
  
      wrapper = new Swiper(".aximo-iconbox-slider", {
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        900: {
          slidesPerView: 1.5,
        },
        1200: {
          slidesPerView: 1.7,
        
        },
        1400: {
          slidesPerView: 2.5,
          
        },
        
      }
    });

  }
  // instagram slider

  var AximoInstagramSlider = function ($scope, $) {
    var wrapper = $scope.find(".aximo-instagram-slider");

    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');

      wrapper.slick({
      infinite: true,
      slidesToShow: settings['per_coulmn'],
      slidesToScroll: settings['slide_scroll'],
      arrows: false,
      dots: false,
      autoplay: settings['autoplay'],
      autoplaySpeed: 0,
      speed: 10000,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: settings['per_coulmn'],
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: settings['per_coulmn_tablet'],
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 767,
        settings: {
          slidesToShow: settings['per_coulmn_mobile'],
          slidesToScroll: 1,
        },
      },
      ],
    });
  }






  // start aximo testimonial 2 column slider
  var AximoTwoColumnSlider = function ($scope, $) {
    var wrapper = $scope.find(".aximo-t-2column-slider");
    if (wrapper.length === 0)
      return;
    var settings = wrapper.data('settings');
      wrapper.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: settings['arrows'],
      dots: settings['dots'],
      autoplay: settings['autoplay'],
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
    });

  }

   
/*--------------------------------------------------------------
AXIMO PROJECT SLIDER JS INIT
------------------------------------------------------------*/
var AximoProjectSlider = function ($scope, $) {
  var wrapper = $scope.find(".aximo-project-slider");
  if (wrapper.length === 0)
    return;
  var settings = wrapper.data('settings');

  wrapper = new Swiper(".aximo-project-slider", {
  // Optional parameters
  spaceBetween: 24,
  direction: 'horizontal',
  mousewheel: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  mousewheel: {
    releaseOnEdges: true,
  },

  // Responsive breakpoints
  breakpoints: {
    767: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3.5,
    },
    
  }
  
});

}


 
/*--------------------------------------------------------------
AXIMO PROJECT SLIDER2 JS INIT
------------------------------------------------------------*/
var AximoProjectSlider2 = function ($scope, $) {
  var wrapper = $scope.find(".aximo-project-slider2");
  if (wrapper.length === 0)
    return;
  var settings = wrapper.data('settings');
  wrapper = new Swiper(".aximo-project-slider2", {
  // Optional parameters
  spaceBetween: 24,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    clickable: false,
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3,
    },
    
  }
  
});
}


var AximoProjectResizing = function ($scope, $) {
const wrappers = document.querySelectorAll(".aximo-image-resizing-item");
const wrapArray = Array.from(wrappers);

wrapArray.forEach(item => {
  const text = item.childNodes[1]

  item.addEventListener("mouseover", function() {
    wrapArray.filter(others => {
      if (others !== item) {
        others.classList.remove("expand");
      }
    });
    this.classList.add("expand");
    text.classList.add('active')
  });

  item.addEventListener("mouseout", function() {
    this.classList.remove("expand");
    text.classList.remove('active')
  });
});

}


// infinite slider

/*--------------------------------------------------------------
AXIMO AUTO SLIDER JS INIT
------------------------------------------------------------*/

var AximoInfiniteSlider = function ($scope, $) {
  var wrapper = $scope.find(".aximo-infinite-slider");
  if (wrapper.length === 0)
    return;
  var settings = wrapper.data('settings');
  wrapper = new Swiper('.aximo-infinite-slider', {
  spaceBetween: 0,
  centeredSlides: true,
  speed: 8000,
  autoplay: {
    delay: .5,
  },
  loop: true,
  slidesPerView:'auto',
  allowTouchMove: false,
  disableOnInteraction: true
});
}

  // all demos js init

  $(".menu-bar").on("click", function () {
    $(".aximo-sidemenu-column, .offcanvas-overlay").addClass("active");
  });
  $(".aximo-sidemenu-close, .offcanvas-overlay").on("click", function () {
    $(".aximo-sidemenu-column, .offcanvas-overlay").removeClass("active");
  });



/*--------------------------------------------------------------
AXIMO IMAGE SWIPE HOVER JS INIT
------------------------------------------------------------*/

gsap.set('.aximo-service-increase-row img.swipeimage', { yPercent: -50, xPercent: -50 });

let activeImage;
gsap.utils.toArray(".aximo-service-increase-row").forEach((el) => {
  let image = el.querySelector('img.swipeimage'),
      setX, setY,
      align = e => {
          setX(e.clientX);
          setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      fade = gsap.to(image, {autoAlpha: 1, ease: "none", paused: true, onReverseComplete: stopFollow});
  
  el.addEventListener('mouseenter', (e) => {
    fade.play();
    startFollow();
    if (activeImage) { // if there's an actively-animating one, we should match its position here
      gsap.set(image, {x: gsap.getProperty(activeImage, "x"), y: gsap.getProperty(activeImage, "y")});
    }
    activeImage = image;
    setX = gsap.quickTo(image, "x", {duration: 0.6, ease: "power3"}),
    setY = gsap.quickTo(image, "y", {duration: 0.6, ease: "power3"})
    align(e);
  });
  
  el.addEventListener('mouseleave', () => fade.reverse());
 
});




  $(window).on("elementor/frontend/init", function () {
    elementorFrontend.hooks.addAction("frontend/element_ready/aximo_text_slider_widget.default", AimaasTextSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Two_Column_Slider.default", AximoTwoColumnSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Project_Slider.default", AximoProjectSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Project_Slider2.default", AximoProjectSlider2);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Instagram_Slider.default", AximoInstagramSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Infinite_slider.default", AximoInfiniteSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_IconBox_slider.default", AximoIconBoxSlider);
    elementorFrontend.hooks.addAction("frontend/element_ready/Aximo_Portfolio_resizing.default", AximoProjectResizing);
  });

})(jQuery);