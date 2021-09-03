// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 100
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



$(".backtotop").click(function(){
  $("html,body").animate({
    scrollTop: 0
  },1000)
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
})
$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  fade:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fas fa-arrow-left prev"></i>',
  nextArrow:'<i class="fas fa-arrow-right next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.service-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  vertical:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.test-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:true,
  vertical:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode:true,
  centerPadding:"0",
  asNavFor:'.details-slider',
  prevArrow:'<i class="fas fa-angle-up prev"></i>',
  nextArrow:'<i class="fas fa-angle-down next"></i>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows:true,
        vertical:true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,

      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical:false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.details-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:false,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor:'.test-img-slider',
  fade:true,
});


$('.counter').counterUp({
  delay: 10,
  time: 1000
});


$('.market-img-slider').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  arrows:false,
  centerMode:true,
  centerPadding:"0",
  autoplay:true,
  autoplaySpeed:1200,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        centerMode:false,
        centerPadding:"0",
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode:false,
        centerPadding:"0",
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});