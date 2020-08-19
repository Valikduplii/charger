$(document).ready(function () {
   
   $('.slider').slick({
slidesToScroll: 3,
slidesToShow: 6,
speed: 1000,
easing: 'ease',
infinite: true,
initialSlide: 10,
autoplay: true,
autoplaySpeed: 1000,
pauseOnFocus: true,
pauseOnHover: true,
pauseOnDotsHovertrue: true,
draggable: true,
swipe: false,
touchThreshold: 15,
touchMove: false,
waitForAnimate: false,
centerMode: true,
variableWidth: true,
rows: 1,
vertical: false,
verticalSwiping: false,
responsive: [
   {
      breakpoint: 3,
      settings: {
         slidesToShow: 5,
      }
   }, {
      breakpoint: 1,
      settings: {
         slidesToShow: 2,
      }
   }, {
      breakpoint: 2,
      settings: {
         slidesToShow: 2,
      }
   }, {
      breakpoint: 768,
      settings: {
         slidesToShow: 2,
      }
   }
],
})
})

