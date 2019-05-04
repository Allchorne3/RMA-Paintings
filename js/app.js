var hamburger = document.querySelector("#hamburger")
var menu = document.querySelector(".menu")
var mainContent = document.querySelector("#main")
var catButton = document.querySelector(".categories-btn")
var catClose = document.querySelector(".category-close")
var logoSpan = document.querySelector(".logo-span")

//reveal nav when clicking the hamburger menu
hamburger.addEventListener("click", _ => {
  menu.classList.toggle("close")
  mainContent.classList.toggle("nav-open")
  logoSpan.classList.toggle("span-reveal")
})

//reveal the categories when the button is clicked and bring "close" opacity up to 1
catButton.addEventListener("click", _ => {
  mainContent.classList.add("category-reveal")
  catClose.classList.add("close-reveal")
  catButton.style.pointerEvents = "none"
})

catClose.addEventListener("click", _ => {
  mainContent.classList.remove("category-reveal")
  catClose.classList.remove("close-reveal")
  catButton.style.pointerEvents = "auto"
})

//-------------------------------------------------------------------------------------//
// MEDIA QUERIES

var tablet = window.matchMedia("(max-width: 900px)")
var phone = window.matchMedia("(max-width: 550px)")

function mediaQueryMatch(x) {
  if (tablet.matches) { // If media query matches
    mainContent.classList.toggle("nav-open-tab")
  } else if(phone.matches) {
    mainContent.classList.toggle("nav-open-mobile")
  } else {
    mainContent.classList.toggle("nav-open")
  }
}


