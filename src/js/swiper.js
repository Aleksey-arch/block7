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
    '.swiper',
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



let swiperBrandsButton = document.querySelector('.swiper-brands__button');
export let swiperWrapperBrands = document.querySelector('.swiper-wrapper--brands');
let swiperBrandsImg = document.querySelector('.swiper-brands__img')
let swiperBrandsButtonText = document.querySelector('.swiper-brands__button--text')


swiperBrandsButton.addEventListener('click', () => {
  if(swiperWrapperBrands.classList.contains('swiper-wrapper--brands-active')){
    swiperWrapperBrands.classList.remove('swiper-wrapper--brands-active')
    swiperWrapperBrands.classList.add('swiper-wrapper--brands-deactive')
    context()
    
  } else {
    swiperWrapperBrands.classList.remove('swiper-wrapper--brands-deactive')
    swiperWrapperBrands.classList.add('swiper-wrapper--brands-active')
    context()
    
  }
})

let context = () => {
  if (swiperWrapperBrands.classList.contains('swiper-wrapper--brands-deactive')) {
    swiperBrandsButtonText.textContent = 'Скрыть'
    swiperBrandsImg.classList.add('swiper-brands__img-transform')
  } else {
    swiperBrandsButtonText.textContent = 'Читать далее'
    swiperBrandsImg.classList.remove('swiper-brands__img-transform')
  }
}