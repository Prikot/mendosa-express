// ==============================
// Gallery
// ==============================

$(document).ready(function() {
  var galleryClass = '.gallery';
  $(galleryClass+' li img').on('click' || 'touchend', function(){
    var $gallery = $(this).parents(galleryClass);
    $('.main-img',$gallery).attr('src', $(this).attr('src').replace('thumb/', ''));
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
// https://api.instagram.com/oauth/authorize/?client_id=36a7ffd38682428ba1e245c711447831&redirect_uri=REDIRECT-URI&response_type=token

var instafeed = new Instafeed({
  get: 'user',
  userId: '4772247690',
  clientId: '36a7ffd38682428ba1e245c711447831',
  limit: 6,
  accessToken: '4772247690.36a7ffd.86cdc7120cba426e931bd74f5336de52'
  // template: 'a(href="https://www.instagram.com/tkani_mendosa/")' +  'img(src="{{image}}" style="margin: 0 10px 0 0; width: 120px; height: 120px;")'
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
    // $('.barhat__img').removeClass('active');
    // $(this).toggleClass('active');
    $(this).$('.barhat__header').animate({ left: 0}, 1000, 'linear');
  });
});

// if (window.innerWidth <= 480 ) {
//   var a=document.getElementById('header__slide_1');
//   var b=document.getElementById('header__slide_2');
//   var c=document.getElementById('header__slide_3');
//   var d=document.getElementById('header__slide_4');
//   var e=document.getElementById('header__slide_5');
//
//   a.src=a.src.replace('/assets/img/banner/banner-17.jpg','/assets/img/banner/banner-17-900.jpg');
//   b.src=b.src.replace('/assets/img/banner/banner-13.jpg','/assets/img/banner/banner-13-900.jpg');
//   c.src=c.src.replace('/assets/img/banner/banner-14.jpg','/assets/img/banner/banner-14-900.jpg');
//   d.src=d.src.replace('/assets/img/banner/banner-18.jpg','/assets/img/banner/banner-18-900.jpg');
//   e.src=e.src.replace('/assets/img/banner/banner-11.jpg','/assets/img/banner/banner-11-900.jpg');
// }

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsIm93bC1jYXJvdXNlbC5qcyIsImJhbm5lci1jaGFuZ2UuanMiLCJnb29nbGVfbWFwcy5qcyIsInNjcm9sbC5qcyIsIm1lbnUuanMiLCJwcmVsb2FkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gR2FsbGVyeVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICB2YXIgZ2FsbGVyeUNsYXNzID0gJy5nYWxsZXJ5JztcbiAgJChnYWxsZXJ5Q2xhc3MrJyBsaSBpbWcnKS5vbignY2xpY2snIHx8ICd0b3VjaGVuZCcsIGZ1bmN0aW9uKCl7XG4gICAgdmFyICRnYWxsZXJ5ID0gJCh0aGlzKS5wYXJlbnRzKGdhbGxlcnlDbGFzcyk7XG4gICAgJCgnLm1haW4taW1nJywkZ2FsbGVyeSkuYXR0cignc3JjJywgJCh0aGlzKS5hdHRyKCdzcmMnKS5yZXBsYWNlKCd0aHVtYi8nLCAnJykpO1xuICB9KTtcbiAgdmFyIGltZ1N3YXAgPSBbXTtcbiAgJChnYWxsZXJ5Q2xhc3MrJyBsaSBpbWcnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgaW1nVXJsID0gdGhpcy5zcmMucmVwbGFjZSgndGh1bWIvJywgJycpO1xuICAgIGltZ1N3YXAucHVzaChpbWdVcmwpO1xuICB9KTtcbiAgJChpbWdTd2FwKS5wcmVsb2FkKCk7XG59KTtcbiQuZm4ucHJlbG9hZCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAkKCc8aW1nLz4nKVswXS5zcmMgPSB0aGlzO1xuICB9KTtcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gSU5TVEFHUkFNIEZPT1RFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL29hdXRoL2F1dGhvcml6ZS8/Y2xpZW50X2lkPTM2YTdmZmQzODY4MjQyOGJhMWUyNDVjNzExNDQ3ODMxJnJlZGlyZWN0X3VyaT1SRURJUkVDVC1VUkkmcmVzcG9uc2VfdHlwZT10b2tlblxuXG52YXIgaW5zdGFmZWVkID0gbmV3IEluc3RhZmVlZCh7XG4gIGdldDogJ3VzZXInLFxuICB1c2VySWQ6ICc0NzcyMjQ3NjkwJyxcbiAgY2xpZW50SWQ6ICczNmE3ZmZkMzg2ODI0MjhiYTFlMjQ1YzcxMTQ0NzgzMScsXG4gIGxpbWl0OiA2LFxuICBhY2Nlc3NUb2tlbjogJzQ3NzIyNDc2OTAuMzZhN2ZmZC44NmNkYzcxMjBjYmE0MjZlOTMxYmQ3NGY1MzM2ZGU1MidcbiAgLy8gdGVtcGxhdGU6ICdhKGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RrYW5pX21lbmRvc2EvXCIpJyArICAnaW1nKHNyYz1cInt7aW1hZ2V9fVwiIHN0eWxlPVwibWFyZ2luOiAwIDEwcHggMCAwOyB3aWR0aDogMTIwcHg7IGhlaWdodDogMTIwcHg7XCIpJ1xufSk7XG5cbmluc3RhZmVlZC5ydW4oKTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTY3JvbGwgYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5idG4tY29udGFpbmVyJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wIC0gNTB9LCAxMDAwLCAnbGluZWFyJyk7XG4gIH0pO1xufSk7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5uYXYgbGkgYVtocmVmPVwiI2Zvb3RlclwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoeyBzY3JvbGxUb3A6ICQoJCh0aGlzKS5hdHRyKCdocmVmJykpLm9mZnNldCgpLnRvcH0sIDEwMDAsICdsaW5lYXInKTtcbiAgfSk7XG59KTtcbiQoZnVuY3Rpb24oKSB7XG4gICQoJy5hYm91dF9fdGV4dCBhW2hyZWY9XCIjZm9vdGVyXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogJCgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkub2Zmc2V0KCkudG9wfSwgMTAwMCwgJ2xpbmVhcicpO1xuICB9KTtcbn0pO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAkKCcuYmFyaGF0X19pbWcnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gJCgnLmJhcmhhdF9faW1nJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIC8vICQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuJCgnLmJhcmhhdF9faGVhZGVyJykuYW5pbWF0ZSh7IGxlZnQ6IDB9LCAxMDAwLCAnbGluZWFyJyk7XG4gIH0pO1xufSk7XG5cbi8vIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA0ODAgKSB7XG4vLyAgIHZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX3NsaWRlXzEnKTtcbi8vICAgdmFyIGI9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fc2xpZGVfMicpO1xuLy8gICB2YXIgYz1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyX19zbGlkZV8zJyk7XG4vLyAgIHZhciBkPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJfX3NsaWRlXzQnKTtcbi8vICAgdmFyIGU9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcl9fc2xpZGVfNScpO1xuLy9cbi8vICAgYS5zcmM9YS5zcmMucmVwbGFjZSgnL2Fzc2V0cy9pbWcvYmFubmVyL2Jhbm5lci0xNy5qcGcnLCcvYXNzZXRzL2ltZy9iYW5uZXIvYmFubmVyLTE3LTkwMC5qcGcnKTtcbi8vICAgYi5zcmM9Yi5zcmMucmVwbGFjZSgnL2Fzc2V0cy9pbWcvYmFubmVyL2Jhbm5lci0xMy5qcGcnLCcvYXNzZXRzL2ltZy9iYW5uZXIvYmFubmVyLTEzLTkwMC5qcGcnKTtcbi8vICAgYy5zcmM9Yy5zcmMucmVwbGFjZSgnL2Fzc2V0cy9pbWcvYmFubmVyL2Jhbm5lci0xNC5qcGcnLCcvYXNzZXRzL2ltZy9iYW5uZXIvYmFubmVyLTE0LTkwMC5qcGcnKTtcbi8vICAgZC5zcmM9ZC5zcmMucmVwbGFjZSgnL2Fzc2V0cy9pbWcvYmFubmVyL2Jhbm5lci0xOC5qcGcnLCcvYXNzZXRzL2ltZy9iYW5uZXIvYmFubmVyLTE4LTkwMC5qcGcnKTtcbi8vICAgZS5zcmM9ZS5zcmMucmVwbGFjZSgnL2Fzc2V0cy9pbWcvYmFubmVyL2Jhbm5lci0xMS5qcGcnLCcvYXNzZXRzL2ltZy9iYW5uZXIvYmFubmVyLTExLTkwMC5qcGcnKTtcbi8vIH1cbiIsIi8v0KHQu9Cw0LnQtNC10YDRi1xuXG4vL9CeINC90LDRgVxuKGZ1bmN0aW9uKCl7XG4gICQoJyNzbGlkZXItYWJvdXQnKS5vd2xDYXJvdXNlbCh7XG4gICAgbG9vcDp0cnVlLCAvL9CX0LDRhtC40LrQu9C40LLQsNC10Lwg0YHQu9Cw0LnQtNC10YBcbiAgICBtYXJnaW46NSwgLy/QntGC0YHRgtGD0L8g0L7RgiDRjdC70LXQvNC10L3RgtCwINGB0L/RgNCw0LLQsCDQsiA1cHhcbiAgICBuYXY6IHRydWUsIC8v0J7RgtC60LvRjtGH0LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWxlZnQgZmEtbGcnPjwvaT5cIiAsIFwiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tcmlnaHQgZmEtbGcnPjwvaT5cIl0sXG4gICAgYXV0b3BsYXk6dHJ1ZSwgLy/QkNCy0YLQvtC30LDQv9GD0YHQuiDRgdC70LDQudC00LXRgNCwXG4gICAgc21hcnRTcGVlZDoxMDAwLCAvL9CS0YDQtdC80Y8g0LTQstC40LbQtdC90LjRjyDRgdC70LDQudC00LBcbiAgICBhdXRvcGxheVRpbWVvdXQ6MzAwMCwgLy/QktGA0LXQvNGPINGB0LzQtdC90Ysg0YHQu9Cw0LnQtNCwXG4gICAgcmVzcG9uc2l2ZTp7IC8v0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLiDQmtC+0Lst0LLQviDQstGL0LLQvtC00LjQvNGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQuCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YjQuNGA0LjQvdC1LlxuICAgICAgMDp7XG4gICAgICAgIGl0ZW1zOjFcbiAgICAgIH1cbiAgICB9XG4gICAgICB9KTtcbn0pKCk7XG5cbi8v0KLQutCw0L3QuFxuKGZ1bmN0aW9uKCl7XG4gICQoJyNzbGlkZXItdGlzc3VlJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSwgLy/Ql9Cw0YbQuNC60LvQuNCy0LDQtdC8INGB0LvQsNC50LTQtdGAXG4gICAgbWFyZ2luOjUsIC8v0J7RgtGB0YLRg9C/INC+0YIg0Y3Qu9C10LzQtdC90YLQsCDRgdC/0YDQsNCy0LAg0LIgNXB4XG4gICAgbmF2OiB0cnVlLCAvL9Ce0YLQutC70Y7Rh9C10L3QuNC1INC90LDQstC40LPQsNGG0LjQuFxuICAgIGFuaW1hdGVPdXQ6ICdmYWRlT3V0JyxcbiAgICBkb3RzOiBmYWxzZSxcbiAgICBuYXZUZXh0OiBbXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1sZWZ0IGZhLWxnJz48L2k+XCIgLCBcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLXJpZ2h0IGZhLWxnJz48L2k+XCJdLFxuICAgIGF1dG9wbGF5OnRydWUsIC8v0JDQstGC0L7Qt9Cw0L/Rg9GB0Log0YHQu9Cw0LnQtNC10YDQsFxuICAgIHNtYXJ0U3BlZWQ6MTAwMCwgLy/QktGA0LXQvNGPINC00LLQuNC20LXQvdC40Y8g0YHQu9Cw0LnQtNCwXG4gICAgYXV0b3BsYXlUaW1lb3V0OjQwMDAsIC8v0JLRgNC10LzRjyDRgdC80LXQvdGLINGB0LvQsNC50LTQsFxuICAgIHJlc3BvbnNpdmU6eyAvL9CQ0LTQsNC/0YLQuNCy0L3QvtGB0YLRjC4g0JrQvtC7LdCy0L4g0LLRi9Cy0L7QtNC40LzRi9GFINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0Lgg0L7Qv9GA0LXQtNC10LvQtdC90L3QvtC5INGI0LjRgNC40L3QtS5cbiAgICAgIDA6e1xuICAgICAgICBpdGVtczoxXG4gICAgICB9XG4gICAgfVxuICAgICAgfSk7XG59KSgpO1xuXG4vL9CQ0YLQtdC70YzQtVxuKGZ1bmN0aW9uKCl7XG4gICQoJyNzbGlkZXItc3R1ZGlvJykub3dsQ2Fyb3VzZWwoe1xuICAgIGxvb3A6dHJ1ZSwgLy/Ql9Cw0YbQuNC60LvQuNCy0LDQtdC8INGB0LvQsNC50LTQtdGAXG4gICAgbWFyZ2luOiA1LCAvL9Ce0YLRgdGC0YPQvyDQvtGCINGN0LvQtdC80LXQvdGC0LAg0YHQv9GA0LDQstCwINCyIDVweFxuICAgIG5hdjogdHJ1ZSwgLy/QntGC0LrQu9GO0YfQtdC90LjQtSDQvdCw0LLQuNCz0LDRhtC40LhcbiAgICBhbmltYXRlT3V0OiAnZmFkZU91dCcsXG4gICAgZG90czogZmFsc2UsXG4gICAgbmF2VGV4dDogW1wiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tbGVmdCBmYS1sZyc+PC9pPlwiICwgXCI8aSBjbGFzcz0nZmEgZmEtY2hldnJvbi1yaWdodCBmYS1sZyc+PC9pPlwiXSxcbiAgICBhdXRvcGxheTp0cnVlLCAvL9CQ0LLRgtC+0LfQsNC/0YPRgdC6INGB0LvQsNC50LTQtdGA0LBcbiAgICBzbWFydFNwZWVkOjEwMDAsIC8v0JLRgNC10LzRjyDQtNCy0LjQttC10L3QuNGPINGB0LvQsNC50LTQsFxuICAgIGF1dG9wbGF5VGltZW91dDozMDAwLCAvL9CS0YDQtdC80Y8g0YHQvNC10L3RiyDRgdC70LDQudC00LBcbiAgICByZXNwb25zaXZlOnsgLy/QkNC00LDQv9GC0LjQstC90L7RgdGC0YwuINCa0L7Quy3QstC+INCy0YvQstC+0LTQuNC80YvRhSDRjdC70LXQvNC10L3RgtC+0LIg0L/RgNC4INC+0L/RgNC10LTQtdC70LXQvdC90L7QuSDRiNC40YDQuNC90LUuXG4gICAgICAwOntcbiAgICAgICAgaXRlbXM6MVxuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KSgpO1xuXG4vL9Co0L7Rg9GA0YPQvFxuKGZ1bmN0aW9uKCl7XG4gICQoJyNzbGlkZXItc2hvd3Jvb20nKS5vd2xDYXJvdXNlbCh7XG4gICAgbG9vcDp0cnVlLCAvL9CX0LDRhtC40LrQu9C40LLQsNC10Lwg0YHQu9Cw0LnQtNC10YBcbiAgICBtYXJnaW46NSwgLy/QntGC0YHRgtGD0L8g0L7RgiDRjdC70LXQvNC10L3RgtCwINGB0L/RgNCw0LLQsCDQsiA1cHhcbiAgICBuYXY6IHRydWUsIC8v0J7RgtC60LvRjtGH0LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWxlZnQgZmEtbGcnPjwvaT5cIiAsIFwiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tcmlnaHQgZmEtbGcnPjwvaT5cIl0sXG4gICAgYXV0b3BsYXk6dHJ1ZSwgLy/QkNCy0YLQvtC30LDQv9GD0YHQuiDRgdC70LDQudC00LXRgNCwXG4gICAgc21hcnRTcGVlZDoxMDAwLCAvL9CS0YDQtdC80Y8g0LTQstC40LbQtdC90LjRjyDRgdC70LDQudC00LBcbiAgICBhdXRvcGxheVRpbWVvdXQ6NDAwMCwgLy/QktGA0LXQvNGPINGB0LzQtdC90Ysg0YHQu9Cw0LnQtNCwXG4gICAgcmVzcG9uc2l2ZTp7IC8v0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLiDQmtC+0Lst0LLQviDQstGL0LLQvtC00LjQvNGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQuCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YjQuNGA0LjQvdC1LlxuICAgICAgMDp7XG4gICAgICAgIGl0ZW1zOjFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoKTtcblxuKGZ1bmN0aW9uKCl7XG4gICQoJ2dhbGxlcnknKS5vd2xDYXJvdXNlbCh7XG4gICAgbG9vcDp0cnVlLCAvL9CX0LDRhtC40LrQu9C40LLQsNC10Lwg0YHQu9Cw0LnQtNC10YBcbiAgICBtYXJnaW46NSwgLy/QntGC0YHRgtGD0L8g0L7RgiDRjdC70LXQvNC10L3RgtCwINGB0L/RgNCw0LLQsCDQsiA1cHhcbiAgICBuYXY6IHRydWUsIC8v0J7RgtC60LvRjtGH0LXQvdC40LUg0L3QsNCy0LjQs9Cw0YbQuNC4XG4gICAgYW5pbWF0ZU91dDogJ2ZhZGVPdXQnLFxuICAgIGRvdHM6IGZhbHNlLFxuICAgIG5hdlRleHQ6IFtcIjxpIGNsYXNzPSdmYSBmYS1jaGV2cm9uLWxlZnQgZmEtbGcnPjwvaT5cIiAsIFwiPGkgY2xhc3M9J2ZhIGZhLWNoZXZyb24tcmlnaHQgZmEtbGcnPjwvaT5cIl0sXG4gICAgYXV0b3BsYXk6dHJ1ZSwgLy/QkNCy0YLQvtC30LDQv9GD0YHQuiDRgdC70LDQudC00LXRgNCwXG4gICAgc21hcnRTcGVlZDoxMDAwLCAvL9CS0YDQtdC80Y8g0LTQstC40LbQtdC90LjRjyDRgdC70LDQudC00LBcbiAgICBhdXRvcGxheVRpbWVvdXQ6NDAwMCwgLy/QktGA0LXQvNGPINGB0LzQtdC90Ysg0YHQu9Cw0LnQtNCwXG4gICAgcmVzcG9uc2l2ZTp7IC8v0JDQtNCw0L/RgtC40LLQvdC+0YHRgtGMLiDQmtC+0Lst0LLQviDQstGL0LLQvtC00LjQvNGL0YUg0Y3Qu9C10LzQtdC90YLQvtCyINC/0YDQuCDQvtC/0YDQtdC00LXQu9C10L3QvdC+0Lkg0YjQuNGA0LjQvdC1LlxuICAgICAgMDp7XG4gICAgICAgIGl0ZW1zOjFcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoKTsiLCJmdW5jdGlvbiB0aGVSb3RhdG9yKCkge1xuICAvL1NldCB0aGUgb3BhY2l0eSBvZiBhbGwgaW1hZ2VzIHRvIDBcbiAgJCgnZGl2LnJvdGF0b3IgdWwgbGknKS5jc3Moe29wYWNpdHk6IDAuMH0pO1xuXG4gIC8vR2V0IHRoZSBmaXJzdCBpbWFnZSBhbmQgZGlzcGxheSBpdCAoZ2V0cyBzZXQgdG8gZnVsbCBvcGFjaXR5KVxuICAkKCdkaXYucm90YXRvciB1bCBsaTpmaXJzdCcpLmNzcyh7b3BhY2l0eTogMS4wfSk7XG5cbiAgLy9DYWxsIHRoZSByb3RhdG9yIGZ1bmN0aW9uIHRvIHJ1biB0aGUgc2xpZGVzaG93LCA2MDAwID0gY2hhbmdlIHRvIG5leHQgaW1hZ2UgYWZ0ZXIgNiBzZWNvbmRzXG5cbiAgaWYgKCQoJ2Rpdi5yb3RhdG9yIHVsIGxpJykubGVuZ3RoID4gMSkge1xuICAgIHNldFRpbWVvdXQoJ3JvdGF0ZSgpJywgNjAwMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcm90YXRlKCkge1xuICAvL0dldCB0aGUgZmlyc3QgaW1hZ2VcbiAgdmFyIGN1cnJlbnQgPSAoJCgnZGl2LnJvdGF0b3IgdWwgbGkuc2hvdycpPyAkKCdkaXYucm90YXRvciB1bCBsaS5zaG93JykgOiAkKCdkaXYucm90YXRvciB1bCBsaTpmaXJzdCcpKTtcblxuICBpZiAoIGN1cnJlbnQubGVuZ3RoID09IDAgKSBjdXJyZW50ID0gJCgnZGl2LnJvdGF0b3IgdWwgbGk6Zmlyc3QnKTtcblxuICAvL0dldCBuZXh0IGltYWdlLCB3aGVuIGl0IHJlYWNoZXMgdGhlIGVuZCwgcm90YXRlIGl0IGJhY2sgdG8gdGhlIGZpcnN0IGltYWdlXG4gIHZhciBuZXh0ID0gKChjdXJyZW50Lm5leHQoKS5sZW5ndGgpID8gKChjdXJyZW50Lm5leHQoKS5oYXNDbGFzcygnc2hvdycpKSA/ICQoJ2Rpdi5yb3RhdG9yIHVsIGxpOmZpcnN0JykgOmN1cnJlbnQubmV4dCgpKSA6ICQoJ2Rpdi5yb3RhdG9yIHVsIGxpOmZpcnN0JykpO1xuXG4gIC8vVW4tY29tbWVudCB0aGUgMyBsaW5lcyBiZWxvdyB0byBnZXQgdGhlIGltYWdlcyBpbiByYW5kb20gb3JkZXJcblxuICB2YXIgc2licyA9IGN1cnJlbnQuc2libGluZ3MoKTtcbiAgdmFyIHJuZE51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpYnMubGVuZ3RoICk7XG4gIHZhciBuZXh0ID0gJCggc2lic1sgcm5kTnVtIF0gKTtcblxuICAvL1NldCB0aGUgZmFkZSBpbiBlZmZlY3QgZm9yIHRoZSBuZXh0IGltYWdlLCB0aGUgc2hvdyBjbGFzcyBoYXMgaGlnaGVyIHotaW5kZXhcbiAgbmV4dC5jc3Moe29wYWNpdHk6IDAuMH0pLmFkZENsYXNzKCdzaG93JykuYW5pbWF0ZSh7b3BhY2l0eTogMS4wfSwgMTAwMCk7XG5cbiAgLy9IaWRlIHRoZSBjdXJyZW50IGltYWdlXG4gIGN1cnJlbnQuYW5pbWF0ZSh7b3BhY2l0eTogMC4wfSwgMTAwMCwgZnVuY3Rpb24oKXtzZXRUaW1lb3V0KCdyb3RhdGUoKScsIDYwMDApO30pIC5yZW1vdmVDbGFzcygnc2hvdycpO1xuXG59O1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy9Mb2FkIHRoZSBzbGlkZXNob3dcbiAgdGhlUm90YXRvcigpO1xuICAkKCdkaXYucm90YXRvcicpLmZhZGVJbigxMDAwKTtcbiAgJCgnZGl2LnJvdGF0b3IgdWwgbGknKS5mYWRlSW4oMTAwMCk7IC8vIHR3ZWVrIGZvciBJRVxufSk7IiwidmFyIG1hcDtcblxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIHZhciBzdHlsZXMgPSBbXG4gICAge1xuICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImFkbWluaXN0cmF0aXZlXCIsXG4gICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgIFwic3R5bGVyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y3ZWZlMVwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF07XG4gIHZhciBzdHlsZWRNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShzdHlsZXMsXG4gICAgICB7bmFtZTogXCJTdHlsZWQgTWFwXCJ9KTtcblxuICB2YXIgbWFwT3B0aW9ucyA9IHtcbiAgICB6b29tOiAxNCxcbiAgICBzY2FsZUNvbnRyb2w6IGZhbHNlLFxuICAgIHNjcm9sbHdoZWVsOiBmYWxzZSxcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuNjk0NzMyLCAzNy41MzAzNDMpLFxuICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xuICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCAnbWFwX3N0eWxlJ11cbiAgICB9XG4gIH07XG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSxcbiAgICAgIG1hcE9wdGlvbnMpO1xuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTUuNjk0NzMyLCAzNy41MzAzNDMpLFxuICAgIG1hcDogbWFwXG4gICAgLy8gaWNvbjogJ21hcF9tYXJrZXIuc3ZnJ1xuICB9KTtcbiAgbWFwLm1hcFR5cGVzLnNldCgnbWFwX3N0eWxlJywgc3R5bGVkTWFwKTtcbiAgbWFwLnNldE1hcFR5cGVJZCgnbWFwX3N0eWxlJyk7XG59IiwiLy8gJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4vLyAgIHZhciB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuLy8gICAoZnVuY3Rpb24gKCkge1xuLy8gICAgIHZhclxuLy8gICAgICAgICBiZyAgICAgICAgICAgICAgPSAkKCcuaGVhZGVyX19iYWNrZ3JvdW5kJyksXG4vLyAgICAgICAgIHN0cmFmZSAgICAgICAgICA9IHdTY3JvbGwgLyA0NSxcbi8vICAgICAgICAgc3RyYWZlQW1vdW50ICAgID0gLXN0cmFmZSArICclJyxcbi8vICAgICAgICAgdHJhbnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsJyArc3RyYWZlQW1vdW50ICsgJywgMCknO1xuLy9cbi8vICAgICAgICAgYmcuY3NzKHtcbi8vICAgICAgICAgICAndHJhbnNmb3JtJyA6IHRyYW5zZm9ybVN0cmluZ1xuLy8gICAgICAgICB9KTtcbi8vICAgfSgpKTtcbi8vXG4vL1xuLy8gfSk7XG4iLCIkKCcudG9nZ2xlLW1lbnUnKS5vbignY2xpY2snIHx8ICd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oKXtcblxuICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuICBjb25zb2xlLmxvZygkKHRoaXMpKTtcblxuICAkKCcuc2FuZHcnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG5cbiAgaWYoISR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICQoJy5zY3JlZW4tbWVudScpLnNob3coKS5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBzaG93TWVudUl0ZW1zKHRydWUpO1xuICAgIH0sIDUwMCk7XG4gIH0gZWxzZSB7XG4gICAgJCgnLnNjcmVlbi1tZW51JykuZmFkZU91dChmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICBzaG93TWVudUl0ZW1zKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuICAkdGhpcy50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG5cbmZ1bmN0aW9uIHNob3dNZW51SXRlbXMoc2hvdykge1xuICB2YXJcbiAgICAgIGl0ZW1zID0gJCgnLnNjcmVlbi1tZW51X19saW5rJyksXG4gICAgICBkZWxheSA9IDYwMCxcbiAgICAgIGNvdW50ZXIgPSAwLFxuICAgICAgdGltZXI7XG5cbiAgZnVuY3Rpb24gZWFjaCgpIHtcbiAgICB2YXIgJHRoaXMgPSBpdGVtcy5lcShjb3VudGVyKTtcblxuICAgICR0aGlzLmFkZENsYXNzKCdhY3RpdmUnKTtcblxuICAgIGlmICh0eXBlb2YgdGltZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH1cblxuICAgIGlmICgkdGhpcy5sZW5ndGgpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChlYWNoLCBkZWxheSk7XG4gICAgfVxuXG4gICAgY291bnRlcisrO1xuICB9XG5cbiAgaWYgKHNob3cpIHtcbiAgICBlYWNoKCk7XG4gIH0gZWxzZSB7XG4gICAgaXRlbXMucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9XG59XG4iLCIvKmpzbGludCBicm93c2VyOiB0cnVlKi9cbi8qZ2xvYmFsICQsIGpRdWVyeSwgYWxlcnQqL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQcmVsb2FkZXIgd2l0aCBwZXJjZW50YWdlIGJ5IGltYWdlIGNvdW50XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICQoZnVuY3Rpb24gKCkge1xuLy8gICAndXNlIHN0cmljdCc7XG4vLyAgIHZhciBpbWdzID0gW107XG4vL1xuLy8gICAkLmVhY2goJCgnKicpLCBmdW5jdGlvbiAoKSB7XG4vL1xuLy8gICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4vLyAgICAgICAgIGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcbi8vICAgICAgICAgaW1nID0gJHRoaXMuaXMoJ2ltZycpO1xuLy9cbi8vICAgICBpZiAoYmFja2dyb3VuZCAhPT0gJ25vbmUnKSB7XG4vLyAgICAgICB2YXIgcGF0aCA9IGJhY2tncm91bmQucmVwbGFjZSgndXJsKFwiJywgJycpLnJlcGxhY2UoJ1wiKScsICcnKTtcbi8vICAgICAgIGltZ3MucHVzaChwYXRoKTtcbi8vICAgICB9XG4vL1xuLy8gICAgIGlmIChpbWcpIHtcbi8vICAgICAgIHZhciBwYXRoID0gJHRoaXMuYXR0cignc3JjJyk7XG4vLyAgICAgICBpZiAocGF0aCkge1xuLy8gICAgICAgICBpbWdzLnB1c2gocGF0aCk7XG4vL1xuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vXG4vLyAgIH0pO1xuLy9cbi8vICAgdmFyIGN1cnJlbnRQZXJjZW50cyA9IDE7XG4vL1xuLy8gICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbi8vICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHtcbi8vICAgICAgIGF0dHI6IHtcbi8vICAgICAgICAgc3JjOiBpbWdzW2ldXG4vLyAgICAgICB9XG4vLyAgICAgfSk7XG4vL1xuLy8gICAgIGltYWdlLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuLy8gICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIGN1cnJlbnRQZXJjZW50cyk7XG4vLyAgICAgICBjdXJyZW50UGVyY2VudHMrKztcbi8vICAgICB9KTtcbi8vICAgICBpbWFnZS5vbignZXJyb3InLCBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICBjdXJyZW50UGVyY2VudHMrKztcbi8vICAgICB9KTtcbi8vICAgfVxuLy9cbi8vICAgZnVuY3Rpb24gc2V0UGVyY2VudHModG90YWwsIGN1cnJlbnQpIHtcbi8vICAgICB2YXIgcGVyY2VudHMgPSBNYXRoLmNlaWwoY3VycmVudC90b3RhbCoxMDApO1xuLy8gICAgICQoJy5wcmVsb2FkZXJfcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgXCIlXCIpO1xuLy8gICAgIGlmICgocGVyY2VudHMgPj0gMTAwKSB8fCAoIC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkpKSB7XG4vLyAgICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfSk7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PVxuZnVuY3Rpb24gbG9hZEltZyAob25Db21wbGV0ZSlcbntcbiAgdmFyIGltZ3MgPSBbXTtcbiAgdmFyIGhhc2ggPSB7fTtcblxuICAkLmVhY2ggKCQoJyonKSwgZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XG4gICAgdmFyIGltZ1BhdGg7XG4gICAgLy8gaHR0cDovL2FwaS5qcXVlcnkuY29tL2Nzcy9cbiAgICAvLyBcIi4uLiBSZXRyaWV2YWwgb2Ygc2hvcnRoYW5kIENTUyBwcm9wZXJ0aWVzIChlLmcuLCBtYXJnaW4sIGJhY2tncm91bmQsIGJvcmRlciksIGFsdGhvdWdoIGZ1bmN0aW9uYWwgd2l0aCBzb21lIGJyb3dzZXJzLCBpcyBub3QgZ3VhcmFudGVlZCAuLi5cIlxuICAgIHZhciBjc3NCZ0ltYWdlXHQ9ICR0aGlzLmNzcyAoJ2JhY2tncm91bmQtaW1hZ2UnKTtcbiAgICB2YXIgaXNJbWdcdFx0PSAkdGhpcy5pcyAoJ2ltZycpO1xuXG4gICAgLy8gSWYgZWxlbWVudCBoYXMgYmFja2dyb3VuZC1pbWFnZSBwcm9wZXJ0eVxuICAgIGlmICgvdXJsXFwoLitcXCkvaS50ZXN0KGNzc0JnSW1hZ2UpKSB7XG4gICAgICAvLyBFeHRyYWN0IGltYWdlIHBhdGggd2l0b3V0IGJyYWNrZXRzIGFuZCBxdW90ZXNcbiAgICAgIGltZ1BhdGggPSBjc3NCZ0ltYWdlLnJlcGxhY2UgKC9edXJsXFwoL2ksICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXCkvZywgJycpXG4gICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcnKVxuICAgICAgICAgIC5yZXBsYWNlKC9cXCcvZywgJycpO1xuXG4gICAgICBpZiAoIWhhc2hbaW1nUGF0aF0pIHtcbiAgICAgICAgaGFzaFtpbWdQYXRoXSA9IHRydWU7XG4gICAgICAgIGltZ3MucHVzaCAoaW1nUGF0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSWYgZWxlbWVudCBpcyA8aW1nPiBhbmQgaGFzIGF0dHJpYnV0ZSBzcmNcbiAgICBpZiAoaXNJbWcpIHtcbiAgICAgIGltZ1BhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTtcbiAgICAgIGlmIChpbWdQYXRoKSB7XG4gICAgICAgIGlmICghaGFzaFtpbWdQYXRoXSkge1xuICAgICAgICAgIGhhc2hbaW1nUGF0aF0gPSB0cnVlO1xuICAgICAgICAgIGltZ3MucHVzaCAoaW1nUGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIC8vIFNldCBwaWN0dXJlIGxvYWQgdGltZW91dFxuICB2YXIgdGltZW91dFx0XHQ9IDA7XG4gIHZhciBwZXJjZW50c1x0PSAwO1xuXG4gIHZhciBpbWdMb2FkVGltZW91dCA9IHNldEludGVydmFsIChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRpbWVvdXQgPT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwgKGltZ0xvYWRUaW1lb3V0KTtcbiAgICB9IGVsc2UgaWYgKChwZXJjZW50cyA+PSBhcHAuc2V0dGluZ3MubGltaXRzLmltYWdlTG9hZFRocmVzaG9sZCkgJiYgKHRpbWVvdXQgPj0gYXBwLnNldHRpbmdzLmxpbWl0cy5pbWFnZUxvYWRUaW1lb3V0KSkge1xuICAgICAgY2xlYXJJbnRlcnZhbCAoaW1nTG9hZFRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG5cbiAgICAgIGlmIChvbkNvbXBsZXRlIGluc3RhbmNlb2YgRnVuY3Rpb24pIG9uQ29tcGxldGUgKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVvdXQrKztcbiAgICB9XG4gIH0sIDEwMDApO1xuXG4gIHZhciBsb2FkZWRJbWFnZXMgPSAwO1xuICBmb3IgKHZhciBpPTA7IGk8aW1ncy5sZW5ndGg7IGkrKykge1xuICAgIHZhciAkaW1hZ2UgPSAkKCc8aW1nPicsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3JjOiBpbWdzW2ldXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkaW1hZ2Uub24gKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgc2V0UGVyY2VudHMgKGltZ3MubGVuZ3RoLCArK2xvYWRlZEltYWdlcyk7XG4gICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGVyY2VudHMgKHRvdGFsLCBjdXJyZW50KSB7XG4gICAgcGVyY2VudHMgPSBNYXRoLmZsb29yIChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xuICAgICQoJy5wcmVsb2FkZXJfcGVyY2VudHMnKS50ZXh0KHBlcmNlbnRzICsgXCIlXCIpO1xuXG4gICAgdGltZW91dCA9IDA7XG5cbiAgICBpZiAocGVyY2VudHMgPj0gMTAwKSB7XG4gICAgICAkKCcucHJlbG9hZGVyJykuZmFkZU91dCgpO1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBjbGVhckludGVydmFsIChpbWdMb2FkVGltZW91dCk7XG4gICAgICBpZiAob25Db21wbGV0ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSBvbkNvbXBsZXRlICgpO1xuICAgIH1cbiAgfVxufVxubG9hZEltZygpO1xuIl19
