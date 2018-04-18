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
