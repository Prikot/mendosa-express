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
