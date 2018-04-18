
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
