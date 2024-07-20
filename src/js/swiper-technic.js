// import * as say from './swiper.js';

window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };

  resizableSwiper(
    '(max-width: 768px)',
    '.swiper-technic',
    {
      loop: true,
      spaceBetween: 16,
      watchSlidesProgress: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
			slidesPerView: 'auto',
    },
    someFunc
  );
});



let swiperTechnicButton = document.querySelector('.swiper-technic__button');
export let swiperWrapperTechnic = document.querySelector('.swiper-wrapper--technic');
let swiperTechnicImg = document.querySelector('.swiper-technic__img')
let swiperTechnicButtonText = document.querySelector('.swiper-technic__button--text')


swiperTechnicButton.addEventListener('click', () => {
  if(swiperWrapperTechnic.classList.contains('swiper-wrapper--technic-active')){
    swiperWrapperTechnic.classList.remove('swiper-wrapper--technic-active')
    swiperWrapperTechnic.classList.add('swiper-wrapper--technic-deactive')
    context()
    
  } else {
    swiperWrapperTechnic.classList.remove('swiper-wrapper--technic-deactive')
    swiperWrapperTechnic.classList.add('swiper-wrapper--technic-active')
    context()
    
  }
})

let context = () => {
  if (swiperWrapperTechnic.classList.contains('swiper-wrapper--technic-deactive')) {
    swiperTechnicButtonText.textContent = 'Скрыть'
    swiperTechnicImg.classList.add('swiper-technic__img-transform')
  } else {
    swiperTechnicButtonText.textContent = 'Читать далее'
    swiperTechnicImg.classList.remove('swiper-technic__img-transform')
  }
}