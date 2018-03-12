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