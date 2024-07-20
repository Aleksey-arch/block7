import { main } from "./main"
import { popupBurger } from "./main"
import { body } from "./main"

export let popupOrderCall = document.querySelector('.popup-order-call')
let popupOrderCallButtonClose = document.querySelector('.popup-order-call__button-close')
export let popupOrderCallActive = document.querySelector('.popup-feedback--active')
let popupOrderCallButtonOpen = document.querySelector('.popup-order-call__button-open')
let headerButtonCall = document.querySelector('.header__button-call')


headerButtonCall.addEventListener('click', function () {
  popupOrderCall.classList.add('popup-feedback--deactive')
  popupOrderCall.classList.remove('popup-feedback--active')
  main.classList.add('popup-blur')
})
popupOrderCallButtonOpen.addEventListener('click', function () {
  popupOrderCall.classList.add('popup-feedback--deactive')
  popupOrderCall.classList.remove('popup-feedback--active')
  popupBurger.classList.add('popup-blur')
  main.classList.add('popup-blur')
	body.classList.add('popup-overflow')
})
popupOrderCallButtonClose.addEventListener('click', function () {
  popupOrderCall.classList.remove('popup-feedback--deactive')
  popupOrderCall.classList.add('popup-feedback--active')
	popupBurger.classList.remove('popup-blur')
  main.classList.remove('popup-blur')
	body.classList.remove('popup-overflow')
})
