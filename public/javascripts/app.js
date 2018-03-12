
// ==============================
// Gallery
// ==============================

$(document).ready(function() {
  var galleryClass = '.gallery';
  $(galleryClass+' li img').on('click' || 'touchend', function(){
    var $gallery = $(this).parents(galleryClass);
    $('.main-img',$gallery).attr('src',$(this).attr('src').replace('thumb/', ''));
  });
  var imgSwap = [];
  $(galleryClass+' li img').each(function(){
    imgUrl = this.src.replace('thumb/', '');
    imgSwap.push(imgUrl);
  });
  $(imgSwap).preload();
});
$.fn.preload = function() {
  this.each(function(){
    $('<img/>')[0].src = this;
  });
};

// ==============================
// INSTAGRAM FOOTER
// ==============================

var instafeed = new Instafeed({
  userId: '4772247690',
  limit: 6,
  accessToken: '4772247690.c50ba1c.563e63cb6ceb4501b0e9c20918749729',
  template: 'a(href="https://www.instagram.com/tkani_mendosa/")' +  'img(src="{{image}}" style="margin: 0 10px 0 0; width: 120px; height: 120px;")'
});

instafeed.run();

// ==============================
// Scroll buttons
// ==============================

$(function() {
  $('.btn-container').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - 50}, 1000, 'linear');
  });
});

$(function() {
  $('.nav li a[href="#footer"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });
});
$(function() {
  $('.about__text a[href="#footer"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
  });
});

$(function() {
  $('.barhat__img').on('click', function(e) {
    e.preventDefault();
    $(this).$('.barhat__header').animate({ left: 0}, 1000, 'linear');
  });
});

//Слайдеры

//О нас
(function(){
  $('#slider-about').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:5, //Отступ от элемента справа в 5px
    nav: true, //Отключение навигации
    animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='fa fa-chevron-left fa-lg'></i>" , "<i class='fa fa-chevron-right fa-lg'></i>"],
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:3000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
        items:1
      }
    }
      });
})();

//Ткани
(function(){
  $('#slider-tissue').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:5, //Отступ от элемента справа в 5px
    nav: true, //Отключение навигации
    animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='fa fa-chevron-left fa-lg'></i>" , "<i class='fa fa-chevron-right fa-lg'></i>"],
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
        items:1
      }
    }
      });
})();

//Ателье
(function(){
  $('#slider-studio').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin: 5, //Отступ от элемента справа в 5px
    nav: true, //Отключение навигации
    animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='fa fa-chevron-left fa-lg'></i>" , "<i class='fa fa-chevron-right fa-lg'></i>"],
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:3000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
        items:1
      }
    }
  });
})();

//Шоурум
(function(){
  $('#slider-showroom').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:5, //Отступ от элемента справа в 5px
    nav: true, //Отключение навигации
    animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='fa fa-chevron-left fa-lg'></i>" , "<i class='fa fa-chevron-right fa-lg'></i>"],
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
        items:1
      }
    }
  });
})();

(function(){
  $('gallery').owlCarousel({
    loop:true, //Зацикливаем слайдер
    margin:5, //Отступ от элемента справа в 5px
    nav: true, //Отключение навигации
    animateOut: 'fadeOut',
    dots: false,
    navText: ["<i class='fa fa-chevron-left fa-lg'></i>" , "<i class='fa fa-chevron-right fa-lg'></i>"],
    autoplay:true, //Автозапуск слайдера
    smartSpeed:1000, //Время движения слайда
    autoplayTimeout:4000, //Время смены слайда
    responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0:{
        items:1
      }
    }
  });
})();
function theRotator() {
  //Set the opacity of all images to 0
  $('div.rotator ul li').css({opacity: 0.0});

  //Get the first image and display it (gets set to full opacity)
  $('div.rotator ul li:first').css({opacity: 1.0});

  //Call the rotator function to run the slideshow, 6000 = change to next image after 6 seconds

  if ($('div.rotator ul li').length > 1) {
    setTimeout('rotate()', 6000);
  }
}

function rotate() {
  //Get the first image
  var current = ($('div.rotator ul li.show')? $('div.rotator ul li.show') : $('div.rotator ul li:first'));

  if ( current.length == 0 ) current = $('div.rotator ul li:first');

  //Get next image, when it reaches the end, rotate it back to the first image
  var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('div.rotator ul li:first') :current.next()) : $('div.rotator ul li:first'));

  //Un-comment the 3 lines below to get the images in random order

  var sibs = current.siblings();
  var rndNum = Math.floor(Math.random() * sibs.length );
  var next = $( sibs[ rndNum ] );

  //Set the fade in effect for the next image, the show class has higher z-index
  next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);

  //Hide the current image
  current.animate({opacity: 0.0}, 1000, function(){setTimeout('rotate()', 6000);}) .removeClass('show');

};

$(document).ready(function() {
  //Load the slideshow
  theRotator();
  $('div.rotator').fadeIn(1000);
  $('div.rotator ul li').fadeIn(1000); // tweek for IE
});
var map;

function initMap() {
  'use strict';

  var styles = [
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "on"
        },
        {
          "color": "#f7efe1"
        }
      ]
    }
  ];
  var styledMap = new google.maps.StyledMapType(styles,
      {name: "Styled Map"});

  var mapOptions = {
    zoom: 14,
    scaleControl: false,
    scrollwheel: false,
    center: new google.maps.LatLng(55.694732, 37.530343),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('map'),
      mapOptions);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.694732, 37.530343),
    map: map
    // icon: 'map_marker.svg'
  });
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}
// $(window).scroll(function () {
//   var wScroll = $(window).scrollTop();
//   (function () {
//     var
//         bg              = $('.header__background'),
//         strafe          = wScroll / 45,
//         strafeAmount    = -strafe + '%',
//         transformString = 'translate3d(0,' +strafeAmount + ', 0)';
//
//         bg.css({
//           'transform' : transformString
//         });
//   }());
//
//
// });

$('.toggle-menu').on('click' || 'touchstart', function(){

  var $this = $(this);
  console.log($(this));

  $('.sandw').toggleClass('active');

  if(!$this.hasClass('active')) {
    $('.screen-menu').show().addClass('active');

    setTimeout(function(){
      showMenuItems(true);
    }, 500);
  } else {
    $('.screen-menu').fadeOut(function(){
      $(this).removeClass('active');
      showMenuItems(false);
    });
  }
  $this.toggleClass('active');
});



function showMenuItems(show) {
  var
      items = $('.screen-menu__link'),
      delay = 600,
      counter = 0,
      timer;

  function each() {
    var $this = items.eq(counter);

    $this.addClass('active');

    if (typeof timer !== 'undefined') {
      clearTimeout(timer);
    }

    if ($this.length) {
      timer = setTimeout(each, delay);
    }

    counter++;
  }

  if (show) {
    each();
  } else {
    items.removeClass('active');
  }
}

/*jslint browser: true*/
/*global $, jQuery, alert*/
// ==========================================
// Preloader with percentage by image count
// ==========================================
// $(function () {
//   'use strict';
//   var imgs = [];
//
//   $.each($('*'), function () {
//
//     var $this = $(this),
//         background = $this.css('background-image'),
//         img = $this.is('img');
//
//     if (background !== 'none') {
//       var path = background.replace('url("', '').replace('")', '');
//       imgs.push(path);
//     }
//
//     if (img) {
//       var path = $this.attr('src');
//       if (path) {
//         imgs.push(path);
//
//       }
//     }
//
//   });
//
//   var currentPercents = 1;
//
//   for (var i = 0; i < imgs.length; i++) {
//     var image = $('<img>', {
//       attr: {
//         src: imgs[i]
//       }
//     });
//
//     image.on('load', function () {
//       setPercents(imgs.length, currentPercents);
//       currentPercents++;
//     });
//     image.on('error', function () {
//       currentPercents++;
//     });
//   }
//
//   function setPercents(total, current) {
//     var percents = Math.ceil(current/total*100);
//     $('.preloader_percents').text(percents + "%");
//     if ((percents >= 100) || ( /^((?!chrome|android).)*safari/i.test(navigator.userAgent))) {
//       $('.preloader').fadeOut();
//     }
//   }
// });

//======================
function loadImg (onComplete)
{
  var imgs = [];
  var hash = {};

  $.each ($('*'), function () {
    var $this = $(this);
    var imgPath;
    // http://api.jquery.com/css/
    // "... Retrieval of shorthand CSS properties (e.g., margin, background, border), although functional with some browsers, is not guaranteed ..."
    var cssBgImage	= $this.css ('background-image');
    var isImg		= $this.is ('img');

    // If element has background-image property
    if (/url\(.+\)/i.test(cssBgImage)) {
      // Extract image path witout brackets and quotes
      imgPath = cssBgImage.replace (/^url\(/i, '')
          .replace(/\)/g, '')
          .replace(/"/g, '')
          .replace(/\'/g, '');

      if (!hash[imgPath]) {
        hash[imgPath] = true;
        imgs.push (imgPath);
      }
    }

    // If element is <img> and has attribute src
    if (isImg) {
      imgPath = $this.attr('src');
      if (imgPath) {
        if (!hash[imgPath]) {
          hash[imgPath] = true;
          imgs.push (imgPath);
        }
      }
    }
  });

  // Set picture load timeout
  var timeout		= 0;
  var percents	= 0;

  var imgLoadTimeout = setInterval (function () {
    if (timeout === null) {
      clearInterval (imgLoadTimeout);
    } else if ((percents >= app.settings.limits.imageLoadThreshold) && (timeout >= app.settings.limits.imageLoadTimeout)) {
      clearInterval (imgLoadTimeout);
      timeout = null;

      if (onComplete instanceof Function) onComplete ();
    } else {
      timeout++;
    }
  }, 1000);

  var loadedImages = 0;
  for (var i=0; i<imgs.length; i++) {
    var $image = $('<img>', {
      attr: {
        src: imgs[i]
      }
    });

    $image.on ('load', function () {
      setPercents (imgs.length, ++loadedImages);
      $(this).remove();
    });
  }

  function setPercents (total, current) {
    percents = Math.floor (current / total * 100);
    $('.preloader_percents').text(percents + "%");

    timeout = 0;

    if (percents >= 100) {
      $('.preloader').fadeOut();
      timeout = null;
      clearInterval (imgLoadTimeout);
      if (onComplete instanceof Function) onComplete ();
    }
  }
}
loadImg();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm93bC1jYXJvdXNlbC5qcyIsImJhbm5lci1jaGFuZ2UuanMiLCJnb29nbGVfbWFwcy5qcyIsInNjcm9sbC5qcyIsIm1lbnUuanMiLCJwcmVsb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2FsbGVyeVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICB2YXIgZ2FsbGVyeUNsYXNzID0gJy5nYWxsZXJ5JztcbiAgJChnYWxsZXJ5Q2xhc3MrJyBsaSBpbWcnKS5vbignY2xpY2snIHx8ICd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyICRnYWxsZXJ5ID0gJCh0aGlzKS5wYXJlbnRzKGdhbGxlcnlDbGFzcyk7XG4gICAgJCgnLm1haW4taW1nJywkZ2FsbGVyeSkuYXR0cignc3JjJywkKHRoaXMpLmF0dHIoJ3NyYycpLnJlcGxhY2UoJ3RodW1iLycsICcnKSk7XG4gIH0pO1xuICB2YXIgaW1nU3dhcCA9IFtdO1xuICAkKGdhbGxlcnlDbGFzcysnIGxpIGltZycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICBpbWdVcmwgPSB0aGlzLnNyYy5yZXBsYWNlKCd0aHVtYi8nLCAnJyk7XG4gICAgaW1nU3dhcC5wdXNoKGltZ1VybCk7XG4gIH0pO1xuICAkKGltZ1N3YXApLnByZWxvYWQoKTtcbn0pO1xuJC5mbi5wcmVsb2FkID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZWFjaChmdW5jdGlvbigpe1xuICAgICQoJzxpbWcvPicpWzBdLnNyYyA9IHRoaXM7XG4gIH0pO1xufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBJTlNUQUdSQU0gRk9PVEVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxudmFyIGluc3RhZmVlZCA9IG5ldyBJbnN0YWZlZWQoe1xuICB1c2VySWQ6ICc0NzcyMjQ3NjkwJyxcbiAgbGltaXQ6IDYsXG4gIGFjY2Vzc1Rva2VuOiAnNDc3MjI0NzY5MC5jNTBiYTFjLjU2M2U2M2NiNmNlYjQ1MDFiMGU5YzIwOTE4NzQ5NzI5JyxcbiAgdGVtcGxhdGU6ICdhKGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RrYW5pX21lbmRvc2EvXCIpJyArICAnaW1nKHNyYz1cInt7aW1hZ2V9fVwiIHN0eWxlPVwibWFyZ2luOiAwIDEwcHggMCAwOyB3aWR0aDogMTIwcHg7IGhlaWdodDogMTIwcHg7XCIpJ1xufSk7XG5cbmluc3RhZmVlZC5ydW4oKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5idG4tY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gNTB9LCAxMDAwLCAnbGluZWFyJyk7XG4gIH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5uYXYgbGkgYVtocmVmPVwiI2Zvb3RlclwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcH0sIDEwMDAsICdsaW5lYXInKTtcbiAgfSk7XG59KTtcbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5hYm91dF9fdGV4dCBhW2hyZWY9XCIjZm9vdGVyXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wfSwgMTAwMCwgJ2xpbmVhcicpO1xuICB9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAkKCcuYmFyaGF0X19pbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykuJCgnLmJhcmhhdF9faGVhZGVyJykuYW5pbWF0ZSh7IGxlZnQ6IDB9LCAxMDAwLCAnbGluZWFyJyk7XG4gIH0pO1xufSk7XG4iLCIvL9Ch0LvQsNC50LTQtdGA0YtcblxuLy/QniDQvdCw0YFcbihmdW5jdGlvbigpe1xuICAkKCcjc2xpZGVyLWFib3V0Jykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSwgLy/Ql9Cw0YbQuNC60LvQuNCy0LDQtdC8INGB0LvQsNC50LTQtdGAXG4gICAgbWFyZ2luOjUsIC8v0J7RgtGB0YLRg9C/INC+0YIg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0LIgNXB4XG4gICAgbmF2OiB0cnVlLCAvL9Ce0YLQutC70Y7Rh9C10L3QuNC1INC90LDQstC40LPQsNGG0LjQuFxuICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWxnJz48L2k+XCIgLCBcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXJpZ2h0IGZhLWxnJz48L2k+XCJdLFxuICAgIGF1dG9wbGF5OnRydWUsIC8v0JDQstGC0L7Qt9Cw0L/Rg9GB0Log0YHQu9Cw0LnQtNC10YDQsFxuICAgIHNtYXJ0U3BlZWQ6MTAwMCwgLy/QktGA0LXQvNGPINC00LLQuNC20LXQvdC40Y8g0YHQu9Cw0LnQtNCwXG4gICAgYXV0b3BsYXlUaW1lb3V0OjMwMDAsIC8v0JLRgNC10LzRjyDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICAgIHJlc3BvbnNpdmU6eyAvL9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjC4g0JrQvtC7LdCy0L4g0LLRi9Cy0L7QtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0Lgg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INGI0LjRgNC40L3QtS5cbiAgICAgIDA6e1xuICAgICAgICBpdGVtczoxXG4gICAgICB9XG4gICAgfVxuICAgICAgfSk7XG59KSgpO1xuXG4vL9Ci0LrQsNC90LhcbihmdW5jdGlvbigpe1xuICAkKCcjc2xpZGVyLXRpc3N1ZScpLm93bENhcm91c2VsKHtcbiAgICBsb29wOnRydWUsIC8v0JfQsNGG0LjQutC70LjQstCw0LXQvCDRgdC70LDQudC00LXRgFxuICAgIG1hcmdpbjo1LCAvL9Ce0YLRgdGC0YPQvyDQvtGCINGN0LvQtdC80LXQvdGC0LAg0YHQv9GA0LDQstCwINCyIDVweFxuICAgIG5hdjogdHJ1ZSwgLy/QntGC0LrQu9GO0YfQtdC90LjQtSDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXG4gICAgZG90czogZmFsc2UsXG4gICAgbmF2VGV4dDogW1wiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tbGVmdCBmYS1sZyc+PC9pPlwiICwgXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1yaWdodCBmYS1sZyc+PC9pPlwiXSxcbiAgICBhdXRvcGxheTp0cnVlLCAvL9CQ0LLRgtC+0LfQsNC/0YPRgdC6INGB0LvQsNC50LTQtdGA0LBcbiAgICBzbWFydFNwZWVkOjEwMDAsIC8v0JLRgNC10LzRjyDQtNCy0LjQttC10L3QuNGPINGB0LvQsNC50LTQsFxuICAgIGF1dG9wbGF5VGltZW91dDo0MDAwLCAvL9CS0YDQtdC80Y8g0YHQvNC10L3RiyDRgdC70LDQudC00LBcbiAgICByZXNwb25zaXZlOnsgLy/QkNC00LDQv9GC0LjQstC90L7RgdGC0YwuINCa0L7Quy3QstC+INCy0YvQstC+0LTQuNC80YvRhSDRjdC70LXQvNC10L3RgtC+0LIg0L/RgNC4INC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDRiNC40YDQuNC90LUuXG4gICAgICAwOntcbiAgICAgICAgaXRlbXM6MVxuICAgICAgfVxuICAgIH1cbiAgICAgIH0pO1xufSkoKTtcblxuLy/QkNGC0LXQu9GM0LVcbihmdW5jdGlvbigpe1xuICAkKCcjc2xpZGVyLXN0dWRpbycpLm93bENhcm91c2VsKHtcbiAgICBsb29wOnRydWUsIC8v0JfQsNGG0LjQutC70LjQstCw0LXQvCDRgdC70LDQudC00LXRgFxuICAgIG1hcmdpbjogNSwgLy/QntGC0YHRgtGD0L8g0L7RgiDRjdC70LXQvNC10L3RgtCwINGB0L/RgNCw0LLQsCDQsiA1cHhcbiAgICBuYXY6IHRydWUsIC8v0J7RgtC60LvRjtGH0LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWxlZnQgZmEtbGcnPjwvaT5cIiAsIFwiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tcmlnaHQgZmEtbGcnPjwvaT5cIl0sXG4gICAgYXV0b3BsYXk6dHJ1ZSwgLy/QkNCy0YLQvtC30LDQv9GD0YHQuiDRgdC70LDQudC00LXRgNCwXG4gICAgc21hcnRTcGVlZDoxMDAwLCAvL9CS0YDQtdC80Y8g0LTQstC40LbQtdC90LjRjyDRgdC70LDQudC00LBcbiAgICBhdXRvcGxheVRpbWVvdXQ6MzAwMCwgLy/QktGA0LXQvNGPINGB0LzQtdC90Ysg0YHQu9Cw0LnQtNCwXG4gICAgcmVzcG9uc2l2ZTp7IC8v0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLiDQmtC+0Lst0LLQviDQstGL0LLQvtC00LjQvNGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQuCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YjQuNGA0LjQvdC1LlxuICAgICAgMDp7XG4gICAgICAgIGl0ZW1zOjFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoKTtcblxuLy/QqNC+0YPRgNGD0LxcbihmdW5jdGlvbigpe1xuICAkKCcjc2xpZGVyLXNob3dyb29tJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSwgLy/Ql9Cw0YbQuNC60LvQuNCy0LDQtdC8INGB0LvQsNC50LTQtdGAXG4gICAgbWFyZ2luOjUsIC8v0J7RgtGB0YLRg9C/INC+0YIg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0LIgNXB4XG4gICAgbmF2OiB0cnVlLCAvL9Ce0YLQutC70Y7Rh9C10L3QuNC1INC90LDQstC40LPQsNGG0LjQuFxuICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWxnJz48L2k+XCIgLCBcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXJpZ2h0IGZhLWxnJz48L2k+XCJdLFxuICAgIGF1dG9wbGF5OnRydWUsIC8v0JDQstGC0L7Qt9Cw0L/Rg9GB0Log0YHQu9Cw0LnQtNC10YDQsFxuICAgIHNtYXJ0U3BlZWQ6MTAwMCwgLy/QktGA0LXQvNGPINC00LLQuNC20LXQvdC40Y8g0YHQu9Cw0LnQtNCwXG4gICAgYXV0b3BsYXlUaW1lb3V0OjQwMDAsIC8v0JLRgNC10LzRjyDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICAgIHJlc3BvbnNpdmU6eyAvL9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjC4g0JrQvtC7LdCy0L4g0LLRi9Cy0L7QtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0Lgg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INGI0LjRgNC40L3QtS5cbiAgICAgIDA6e1xuICAgICAgICBpdGVtczoxXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKCk7XG5cbihmdW5jdGlvbigpe1xuICAkKCdnYWxsZXJ5Jykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSwgLy/Ql9Cw0YbQuNC60LvQuNCy0LDQtdC8INGB0LvQsNC50LTQtdGAXG4gICAgbWFyZ2luOjUsIC8v0J7RgtGB0YLRg9C/INC+0YIg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0LIgNXB4XG4gICAgbmF2OiB0cnVlLCAvL9Ce0YLQutC70Y7Rh9C10L3QuNC1INC90LDQstC40LPQsNGG0LjQuFxuICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWxnJz48L2k+XCIgLCBcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXJpZ2h0IGZhLWxnJz48L2k+XCJdLFxuICAgIGF1dG9wbGF5OnRydWUsIC8v0JDQstGC0L7Qt9Cw0L/Rg9GB0Log0YHQu9Cw0LnQtNC10YDQsFxuICAgIHNtYXJ0U3BlZWQ6MTAwMCwgLy/QktGA0LXQvNGPINC00LLQuNC20LXQvdC40Y8g0YHQu9Cw0LnQtNCwXG4gICAgYXV0b3BsYXlUaW1lb3V0OjQwMDAsIC8v0JLRgNC10LzRjyDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICAgIHJlc3BvbnNpdmU6eyAvL9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjC4g0JrQvtC7LdCy0L4g0LLRi9Cy0L7QtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0Lgg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INGI0LjRgNC40L3QtS5cbiAgICAgIDA6e1xuICAgICAgICBpdGVtczoxXG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKCk7IiwiZnVuY3Rpb24gdGhlUm90YXRvcigpIHtcbiAgLy9TZXQgdGhlIG9wYWNpdHkgb2YgYWxsIGltYWdlcyB0byAwXG4gICQoJ2Rpdi5yb3RhdG9yIHVsIGxpJykuY3NzKHtvcGFjaXR5OiAwLjB9KTtcblxuICAvL0dldCB0aGUgZmlyc3QgaW1hZ2UgYW5kIGRpc3BsYXkgaXQgKGdldHMgc2V0IHRvIGZ1bGwgb3BhY2l0eSlcbiAgJCgnZGl2LnJvdGF0b3IgdWwgbGk6Zmlyc3QnKS5jc3Moe29wYWNpdHk6IDEuMH0pO1xuXG4gIC8vQ2FsbCB0aGUgcm90YXRvciBmdW5jdGlvbiB0byBydW4gdGhlIHNsaWRlc2hvdywgNjAwMCA9IGNoYW5nZSB0byBuZXh0IGltYWdlIGFmdGVyIDYgc2Vjb25kc1xuXG4gIGlmICgkKCdkaXYucm90YXRvciB1bCBsaScpLmxlbmd0aCA+IDEpIHtcbiAgICBzZXRUaW1lb3V0KCdyb3RhdGUoKScsIDYwMDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZSgpIHtcbiAgLy9HZXQgdGhlIGZpcnN0IGltYWdlXG4gIHZhciBjdXJyZW50ID0gKCQoJ2Rpdi5yb3RhdG9yIHVsIGxpLnNob3cnKT8gJCgnZGl2LnJvdGF0b3IgdWwgbGkuc2hvdycpIDogJCgnZGl2LnJvdGF0b3IgdWwgbGk6Zmlyc3QnKSk7XG5cbiAgaWYgKCBjdXJyZW50Lmxlbmd0aCA9PSAwICkgY3VycmVudCA9ICQoJ2Rpdi5yb3RhdG9yIHVsIGxpOmZpcnN0Jyk7XG5cbiAgLy9HZXQgbmV4dCBpbWFnZSwgd2hlbiBpdCByZWFjaGVzIHRoZSBlbmQsIHJvdGF0ZSBpdCBiYWNrIHRvIHRoZSBmaXJzdCBpbWFnZVxuICB2YXIgbmV4dCA9ICgoY3VycmVudC5uZXh0KCkubGVuZ3RoKSA/ICgoY3VycmVudC5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkgPyAkKCdkaXYucm90YXRvciB1bCBsaTpmaXJzdCcpIDpjdXJyZW50Lm5leHQoKSkgOiAkKCdkaXYucm90YXRvciB1bCBsaTpmaXJzdCcpKTtcblxuICAvL1VuLWNvbW1lbnQgdGhlIDMgbGluZXMgYmVsb3cgdG8gZ2V0IHRoZSBpbWFnZXMgaW4gcmFuZG9tIG9yZGVyXG5cbiAgdmFyIHNpYnMgPSBjdXJyZW50LnNpYmxpbmdzKCk7XG4gIHZhciBybmROdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaWJzLmxlbmd0aCApO1xuICB2YXIgbmV4dCA9ICQoIHNpYnNbIHJuZE51bSBdICk7XG5cbiAgLy9TZXQgdGhlIGZhZGUgaW4gZWZmZWN0IGZvciB0aGUgbmV4dCBpbWFnZSwgdGhlIHNob3cgY2xhc3MgaGFzIGhpZ2hlciB6LWluZGV4XG4gIG5leHQuY3NzKHtvcGFjaXR5OiAwLjB9KS5hZGRDbGFzcygnc2hvdycpLmFuaW1hdGUoe29wYWNpdHk6IDEuMH0sIDEwMDApO1xuXG4gIC8vSGlkZSB0aGUgY3VycmVudCBpbWFnZVxuICBjdXJyZW50LmFuaW1hdGUoe29wYWNpdHk6IDAuMH0sIDEwMDAsIGZ1bmN0aW9uKCl7c2V0VGltZW91dCgncm90YXRlKCknLCA2MDAwKTt9KSAucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcblxufTtcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vTG9hZCB0aGUgc2xpZGVzaG93XG4gIHRoZVJvdGF0b3IoKTtcbiAgJCgnZGl2LnJvdGF0b3InKS5mYWRlSW4oMTAwMCk7XG4gICQoJ2Rpdi5yb3RhdG9yIHVsIGxpJykuZmFkZUluKDEwMDApOyAvLyB0d2VlayBmb3IgSUVcbn0pOyIsInZhciBtYXA7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgc3R5bGVzID0gW1xuICAgIHtcbiAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxuICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICBcInN0eWxlcnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib25cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNmN2VmZTFcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICB2YXIgc3R5bGVkTWFwID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoc3R5bGVzLFxuICAgICAge25hbWU6IFwiU3R5bGVkIE1hcFwifSk7XG5cbiAgdmFyIG1hcE9wdGlvbnMgPSB7XG4gICAgem9vbTogMTQsXG4gICAgc2NhbGVDb250cm9sOiBmYWxzZSxcbiAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1LjY5NDczMiwgMzcuNTMwMzQzKSxcbiAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgIG1hcFR5cGVJZHM6IFtnb29nbGUubWFwcy5NYXBUeXBlSWQuUk9BRE1BUCwgJ21hcF9zdHlsZSddXG4gICAgfVxuICB9O1xuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksXG4gICAgICBtYXBPcHRpb25zKTtcbiAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDU1LjY5NDczMiwgMzcuNTMwMzQzKSxcbiAgICBtYXA6IG1hcFxuICAgIC8vIGljb246ICdtYXBfbWFya2VyLnN2ZydcbiAgfSk7XG4gIG1hcC5tYXBUeXBlcy5zZXQoJ21hcF9zdHlsZScsIHN0eWxlZE1hcCk7XG4gIG1hcC5zZXRNYXBUeXBlSWQoJ21hcF9zdHlsZScpO1xufSIsIi8vICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuLy8gICB2YXIgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbi8vICAgKGZ1bmN0aW9uICgpIHtcbi8vICAgICB2YXJcbi8vICAgICAgICAgYmcgICAgICAgICAgICAgID0gJCgnLmhlYWRlcl9fYmFja2dyb3VuZCcpLFxuLy8gICAgICAgICBzdHJhZmUgICAgICAgICAgPSB3U2Nyb2xsIC8gNDUsXG4vLyAgICAgICAgIHN0cmFmZUFtb3VudCAgICA9IC1zdHJhZmUgKyAnJScsXG4vLyAgICAgICAgIHRyYW5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCcgK3N0cmFmZUFtb3VudCArICcsIDApJztcbi8vXG4vLyAgICAgICAgIGJnLmNzcyh7XG4vLyAgICAgICAgICAgJ3RyYW5zZm9ybScgOiB0cmFuc2Zvcm1TdHJpbmdcbi8vICAgICAgICAgfSk7XG4vLyAgIH0oKSk7XG4vL1xuLy9cbi8vIH0pO1xuIiwiJCgnLnRvZ2dsZS1tZW51Jykub24oJ2NsaWNrJyB8fCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uKCl7XG5cbiAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgY29uc29sZS5sb2coJCh0aGlzKSk7XG5cbiAgJCgnLnNhbmR3JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gIGlmKCEkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAkKCcuc2NyZWVuLW1lbnUnKS5zaG93KCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgc2hvd01lbnVJdGVtcyh0cnVlKTtcbiAgICB9LCA1MDApO1xuICB9IGVsc2Uge1xuICAgICQoJy5zY3JlZW4tbWVudScpLmZhZGVPdXQoZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgc2hvd01lbnVJdGVtcyhmYWxzZSk7XG4gICAgfSk7XG4gIH1cbiAgJHRoaXMudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cblxuXG5mdW5jdGlvbiBzaG93TWVudUl0ZW1zKHNob3cpIHtcbiAgdmFyXG4gICAgICBpdGVtcyA9ICQoJy5zY3JlZW4tbWVudV9fbGluaycpLFxuICAgICAgZGVsYXkgPSA2MDAsXG4gICAgICBjb3VudGVyID0gMCxcbiAgICAgIHRpbWVyO1xuXG4gIGZ1bmN0aW9uIGVhY2goKSB7XG4gICAgdmFyICR0aGlzID0gaXRlbXMuZXEoY291bnRlcik7XG5cbiAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBpZiAodHlwZW9mIHRpbWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcbiAgICB9XG5cbiAgICBpZiAoJHRoaXMubGVuZ3RoKSB7XG4gICAgICB0aW1lciA9IHNldFRpbWVvdXQoZWFjaCwgZGVsYXkpO1xuICAgIH1cblxuICAgIGNvdW50ZXIrKztcbiAgfVxuXG4gIGlmIChzaG93KSB7XG4gICAgZWFjaCgpO1xuICB9IGVsc2Uge1xuICAgIGl0ZW1zLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgfVxufVxuIiwiLypqc2xpbnQgYnJvd3NlcjogdHJ1ZSovXG4vKmdsb2JhbCAkLCBqUXVlcnksIGFsZXJ0Ki9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJlbG9hZGVyIHdpdGggcGVyY2VudGFnZSBieSBpbWFnZSBjb3VudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyAkKGZ1bmN0aW9uICgpIHtcbi8vICAgJ3VzZSBzdHJpY3QnO1xuLy8gICB2YXIgaW1ncyA9IFtdO1xuLy9cbi8vICAgJC5lYWNoKCQoJyonKSwgZnVuY3Rpb24gKCkge1xuLy9cbi8vICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuLy8gICAgICAgICBiYWNrZ3JvdW5kID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXG4vLyAgICAgICAgIGltZyA9ICR0aGlzLmlzKCdpbWcnKTtcbi8vXG4vLyAgICAgaWYgKGJhY2tncm91bmQgIT09ICdub25lJykge1xuLy8gICAgICAgdmFyIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XG4vLyAgICAgICBpbWdzLnB1c2gocGF0aCk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBpZiAoaW1nKSB7XG4vLyAgICAgICB2YXIgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpO1xuLy8gICAgICAgaWYgKHBhdGgpIHtcbi8vICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xuLy9cbi8vICAgICAgIH1cbi8vICAgICB9XG4vL1xuLy8gICB9KTtcbi8vXG4vLyAgIHZhciBjdXJyZW50UGVyY2VudHMgPSAxO1xuLy9cbi8vICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWdzLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgdmFyIGltYWdlID0gJCgnPGltZz4nLCB7XG4vLyAgICAgICBhdHRyOiB7XG4vLyAgICAgICAgIHNyYzogaW1nc1tpXVxuLy8gICAgICAgfVxuLy8gICAgIH0pO1xuLy9cbi8vICAgICBpbWFnZS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgIHNldFBlcmNlbnRzKGltZ3MubGVuZ3RoLCBjdXJyZW50UGVyY2VudHMpO1xuLy8gICAgICAgY3VycmVudFBlcmNlbnRzKys7XG4vLyAgICAgfSk7XG4vLyAgICAgaW1hZ2Uub24oJ2Vycm9yJywgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgY3VycmVudFBlcmNlbnRzKys7XG4vLyAgICAgfSk7XG4vLyAgIH1cbi8vXG4vLyAgIGZ1bmN0aW9uIHNldFBlcmNlbnRzKHRvdGFsLCBjdXJyZW50KSB7XG4vLyAgICAgdmFyIHBlcmNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQvdG90YWwqMTAwKTtcbi8vICAgICAkKCcucHJlbG9hZGVyX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArIFwiJVwiKTtcbi8vICAgICBpZiAoKHBlcmNlbnRzID49IDEwMCkgfHwgKCAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSkge1xuLy8gICAgICAgJCgnLnByZWxvYWRlcicpLmZhZGVPdXQoKTtcbi8vICAgICB9XG4vLyAgIH1cbi8vIH0pO1xuXG4vLz09PT09PT09PT09PT09PT09PT09PT1cbmZ1bmN0aW9uIGxvYWRJbWcgKG9uQ29tcGxldGUpXG57XG4gIHZhciBpbWdzID0gW107XG4gIHZhciBoYXNoID0ge307XG5cbiAgJC5lYWNoICgkKCcqJyksIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICAgIHZhciBpbWdQYXRoO1xuICAgIC8vIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9jc3MvXG4gICAgLy8gXCIuLi4gUmV0cmlldmFsIG9mIHNob3J0aGFuZCBDU1MgcHJvcGVydGllcyAoZS5nLiwgbWFyZ2luLCBiYWNrZ3JvdW5kLCBib3JkZXIpLCBhbHRob3VnaCBmdW5jdGlvbmFsIHdpdGggc29tZSBicm93c2VycywgaXMgbm90IGd1YXJhbnRlZWQgLi4uXCJcbiAgICB2YXIgY3NzQmdJbWFnZVx0PSAkdGhpcy5jc3MgKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgdmFyIGlzSW1nXHRcdD0gJHRoaXMuaXMgKCdpbWcnKTtcblxuICAgIC8vIElmIGVsZW1lbnQgaGFzIGJhY2tncm91bmQtaW1hZ2UgcHJvcGVydHlcbiAgICBpZiAoL3VybFxcKC4rXFwpL2kudGVzdChjc3NCZ0ltYWdlKSkge1xuICAgICAgLy8gRXh0cmFjdCBpbWFnZSBwYXRoIHdpdG91dCBicmFja2V0cyBhbmQgcXVvdGVzXG4gICAgICBpbWdQYXRoID0gY3NzQmdJbWFnZS5yZXBsYWNlICgvXnVybFxcKC9pLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgvXFwpL2csICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cIi9nLCAnJylcbiAgICAgICAgICAucmVwbGFjZSgvXFwnL2csICcnKTtcblxuICAgICAgaWYgKCFoYXNoW2ltZ1BhdGhdKSB7XG4gICAgICAgIGhhc2hbaW1nUGF0aF0gPSB0cnVlO1xuICAgICAgICBpbWdzLnB1c2ggKGltZ1BhdGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGVsZW1lbnQgaXMgPGltZz4gYW5kIGhhcyBhdHRyaWJ1dGUgc3JjXG4gICAgaWYgKGlzSW1nKSB7XG4gICAgICBpbWdQYXRoID0gJHRoaXMuYXR0cignc3JjJyk7XG4gICAgICBpZiAoaW1nUGF0aCkge1xuICAgICAgICBpZiAoIWhhc2hbaW1nUGF0aF0pIHtcbiAgICAgICAgICBoYXNoW2ltZ1BhdGhdID0gdHJ1ZTtcbiAgICAgICAgICBpbWdzLnB1c2ggKGltZ1BhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBTZXQgcGljdHVyZSBsb2FkIHRpbWVvdXRcbiAgdmFyIHRpbWVvdXRcdFx0PSAwO1xuICB2YXIgcGVyY2VudHNcdD0gMDtcblxuICB2YXIgaW1nTG9hZFRpbWVvdXQgPSBzZXRJbnRlcnZhbCAoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aW1lb3V0ID09PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsIChpbWdMb2FkVGltZW91dCk7XG4gICAgfSBlbHNlIGlmICgocGVyY2VudHMgPj0gYXBwLnNldHRpbmdzLmxpbWl0cy5pbWFnZUxvYWRUaHJlc2hvbGQpICYmICh0aW1lb3V0ID49IGFwcC5zZXR0aW5ncy5saW1pdHMuaW1hZ2VMb2FkVGltZW91dCkpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwgKGltZ0xvYWRUaW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuXG4gICAgICBpZiAob25Db21wbGV0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSBvbkNvbXBsZXRlICgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aW1lb3V0Kys7XG4gICAgfVxuICB9LCAxMDAwKTtcblxuICB2YXIgbG9hZGVkSW1hZ2VzID0gMDtcbiAgZm9yICh2YXIgaT0wOyBpPGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgJGltYWdlID0gJCgnPGltZz4nLCB7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHNyYzogaW1nc1tpXVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJGltYWdlLm9uICgnbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHNldFBlcmNlbnRzIChpbWdzLmxlbmd0aCwgKytsb2FkZWRJbWFnZXMpO1xuICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBlcmNlbnRzICh0b3RhbCwgY3VycmVudCkge1xuICAgIHBlcmNlbnRzID0gTWF0aC5mbG9vciAoY3VycmVudCAvIHRvdGFsICogMTAwKTtcbiAgICAkKCcucHJlbG9hZGVyX3BlcmNlbnRzJykudGV4dChwZXJjZW50cyArIFwiJVwiKTtcblxuICAgIHRpbWVvdXQgPSAwO1xuXG4gICAgaWYgKHBlcmNlbnRzID49IDEwMCkge1xuICAgICAgJCgnLnByZWxvYWRlcicpLmZhZGVPdXQoKTtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgY2xlYXJJbnRlcnZhbCAoaW1nTG9hZFRpbWVvdXQpO1xuICAgICAgaWYgKG9uQ29tcGxldGUgaW5zdGFuY2VvZiBGdW5jdGlvbikgb25Db21wbGV0ZSAoKTtcbiAgICB9XG4gIH1cbn1cbmxvYWRJbWcoKTtcbiJdfQ==
