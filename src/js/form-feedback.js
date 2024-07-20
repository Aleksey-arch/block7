import { main } from "./main"
import { popupBurger } from "./main"
import { body } from "./main"

export let popupFeedback = document.querySelector('.popup-feedback')
let popupFeedbackButtonClose = document.querySelector('.popup-feedback__button-close')
export let popupFeedbackActive = document.querySelector('.popup-feedback--active')
let popupFeedbackButtonOpen = document.querySelector('.popup-feedback__button-open')
let headerButtonChat = document.querySelector('.header__button-chat')


headerButtonChat.addEventListener('click', function () {
  popupFeedback.classList.add('popup-feedback--deactive')
  popupFeedback.classList.remove('popup-feedback--active')
  main.classList.add('popup-blur')
})
popupFeedbackButtonOpen.addEventListener('click', function () {
  popupFeedback.classList.add('popup-feedback--deactive')
  popupFeedback.classList.remove('popup-feedback--active')
  popupBurger.classList.add('popup-blur')
  main.classList.add('popup-blur')
	body.classList.add('popup-overflow')
})
popupFeedbackButtonClose.addEventListener('click', function () {
  popupFeedback.classList.remove('popup-feedback--deactive')
  popupFeedback.classList.add('popup-feedback--active')
	popupBurger.classList.remove('popup-blur')
  main.classList.remove('popup-blur')
	body.classList.remove('popup-overflow')
})
