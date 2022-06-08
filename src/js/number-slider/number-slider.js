
let sliders = document.querySelectorAll('.sliderwrapper');
// sliders - список всех элементов с классом class="slider"
// sliders[0] — первый элемент, sliders[1] — второй, sliders[i] — i-тый.

for (let i = 0; i < sliders.length; i++) {
  // Перебирает все, вызывает функцию для каждого.
  init_slider(sliders[i]);
}

function init_slider(slider) {
  // Значение slider: Очередной sliders[i], переданный при вызове функции.
  
  let slide = slider.querySelectorAll('.slide-img');
  // Вместо document.query... Получается список всех class="slide"
  // которые находятся где-то внутри текущего элемента slider.
  

  let next = slider.querySelector('.next-btn');
  // Кнопка next внутри этого slider.

  let prev = slider.querySelector('.prev-btn');
  // Кнопка prev внутри этого slider.

  let i = 0;
  // Номер текущего "открытого" слайда.
  
  next.addEventListener('click', function() {
    slide[i].classList.remove('slide-block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.add('slide-block');
    // slide[i] - следующий слайд. Показываем.
  });

  prev.addEventListener('click', function() {
    slide[i].classList.add('slide-block');
    // slide[i] - открытый слайд. Скрываем.
    
    i = (i + 1) % slide.length; // (*1)
    
    slide[i].classList.remove('slide-block');
    // slide[i] - следующий слайд. Показываем.
  });

}




// $('.next-btn').on('click', function() {
//     if ($('.slide-img-1').attr('alt') == 1) {
//         $('.slide-img-1').addClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '2');
//         $('.slider-dots').find(':first-child').removeClass('slider-dots__nav-1');
//         $('.slider-dots__nav-2').addClass('slider-dots__nav-white');
//     }
//     else if ($('.slide-img-1').attr('alt') == 2) {
//         $('.slide-img-2').addClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '3');
//         $('.slider-dots__nav-2').removeClass('slider-dots__nav-white');
//         $('.slider-dots__nav-3').addClass('slider-dots__nav-white');
//     }
//     else if ($('.slide-img-1').attr('alt') == 3) {
//         $('.slide-img-3').addClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '4');
//         $('.slider-dots__nav-3').removeClass('slider-dots__nav-white');
//         $('.slider-dots__nav-4').addClass('slider-dots__nav-white');
//     }
//     else if ($('.slide-img-1').attr('alt') == 4) {
//         $('.slide-img-1, .slide-img-2, .slide-img-3').removeClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '1');
//         $('.slider-dots__nav-4').removeClass('slider-dots__nav-white');
//         $('.slider-dots').find(':first-child').addClass('slider-dots__nav-1');
//     }

// });


// $('.prev-btn').on('click', function() {
//     if ($('.slide-img-1').attr('alt') == 2) {
//         $('.slide-img-1').removeClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '1');
//         $('.slider-dots').find(':first-child').addClass('slider-dots__nav-1');
//         $('.slider-dots__nav-2').removeClass('slider-dots__nav-white');
//     }
//     else if ($('.slide-img-1').attr('alt') == 3) {
//         $('.slide-img-2').removeClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '2');
//         $('.slider-dots__nav-3').removeClass('slider-dots__nav-white');
//         $('.slider-dots__nav-2').addClass('slider-dots__nav-white');
//     }
//     else if ($('.slide-img-1').attr('alt') == 4) {
//         $('.slide-img-3').removeClass('slide-img-none');
//         $('.slide-img-1').attr('alt', '3');
//         $('.slider-dots__nav-4').removeClass('slider-dots__nav-white');
//         $('.slider-dots__nav-3').addClass('slider-dots__nav-white');
//     }
// })
