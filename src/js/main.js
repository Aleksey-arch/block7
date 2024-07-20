
import { swiperWrapperBrands } from "./swiper"
import { swiperWrapperTechnic } from "./swiper-technic"
import { popupFeedback } from "./form-feedback"
import { popupOrderCall } from "./form-order-call"

let burgerOpen = document.querySelector('.header__burger-open')
export let popupBurger = document.querySelector('.menu')
let burgerClose = document.querySelector('.menu__burger-close')
export let main = document.querySelector('main')
export let body = document.querySelector('body')
let mediaQuery = window.matchMedia('(min-width: 1366px)')
let mediaPopupFeedback = window.matchMedia('(min-width: 1366px)')

window.onload = function () {
  if (mediaQuery.matches) {
    popupBurger.classList.add('menu-active')
    popupBurger.classList.remove('menu-deactive')
  } else {
    popupBurger.classList.remove('menu-active')
    popupBurger.classList.add('menu-deactive')
  }
	descriptionContainer.classList.add('description__container--deactive')
  if (mediaQuery.matches) {
    descriptionImage.src = '../img/service/image-desktop.png' 
  };

  swiperWrapperBrands.classList.add('swiper-wrapper--brands-active')
  swiperWrapperTechnic.classList.add('swiper-wrapper--technic-active')
  popupFeedback.classList.add('popup-feedback--active')
  popupOrderCall.classList.add('popup-feedback--active')
}

burgerOpen.addEventListener('click', function () {
  popupBurger.classList.add('menu-active')
  popupBurger.classList.remove('menu-deactive')
  main.classList.add('popup-blur')
})
burgerClose.addEventListener('click', function () {
  popupBurger.classList.remove('menu-active')
  popupBurger.classList.add('menu-deactive')
  main.classList.remove('popup-blur')
})

//..............................................

let descriptionButton = document.querySelector('.description__button')
let descriptionButtonText = document.querySelector('.description__button-text')
let descriptionContainer = document.querySelector('.description__container')
let descriptionButtonIcon = document.querySelector('.description__button-icon')
let descriptionImage = document.querySelector('.description__image')



descriptionButton.addEventListener('click', () => {
  if (
    descriptionContainer.classList.contains('description__container--deactive')
  ) {
    descriptionContainer.classList.add('description__container--active')
    descriptionContainer.classList.remove('description__container--deactive')
    descriptionButtonIcon.classList.add('description__button-icon--active')

    context()
  } else {
    descriptionContainer.classList.add('description__container--deactive')
    descriptionContainer.classList.remove('description__container--active')
    descriptionButtonIcon.classList.remove('description__button-icon--active')
    context()
  }
})
let context = () => {
  if (
    descriptionContainer.classList.contains('description__container--active')
  ) {
    descriptionButtonText.textContent = 'Скрыть'
  } else {
    descriptionButtonText.textContent = 'Читать далее'
  }
}
