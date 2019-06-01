var hamburger = document.querySelector("#hamburger")
var menu = document.querySelector(".menu")
var mainContent = document.querySelector("#main")
var navHeaders = document.querySelector(".nav-headers")
var logoSpan = document.querySelector(".logo-span")
var header = document.querySelector(".main-header")

//----------------------------------------------------------//
//FUNCTIONS
function revealNav(){
  menu.classList.toggle("close")
  header.classList.toggle("nav-open")
  navHeaders.classList.toggle("nav-reveal")
  logoSpan.classList.toggle("span-reveal")

}
//---------------------------------------------------------//

//reveal nav when clicking the hamburger menu
hamburger.addEventListener("click", revealNav)

//-------------------------------------------------------------------------------------//
// MEDIA QUERIES

var tablet = window.matchMedia("(max-width: 900px)")
var phone = window.matchMedia("(max-width: 550px)")

function mediaQueryMatch(tablet) {
  if (tablet.matches) { // If media query matches
    mainContent.classList.toggle("nav-open-tab")
  } else if(phone.matches) {
    mainContent.classList.toggle("nav-open-mobile")
  } else {
    mainContent.classList.toggle("nav-open")
  }
}


//-----------------------------------------------------------------------//
//JQUERY
//Lightbox
$(document).ready(function(){
  $(".button").click(function(){
    //store the value of datafilter into the variable called value
    var value = $(this).attr("data-filter");
    
    if (value == "all") 
    {
      $(".filter").css("display", "block")
    } 
    else 
    {
      $(".filter").not("."+value).css("display", "none")
      $(".filter").filter("."+value).css("display", "block")
    }
    
    //add active class to clicked button
    $("ul .button").click(function(){
      $(this).addClass('active').siblings().removeClass('active')
    })
  })
})

//Header transparency on scroll
$(window).scroll(function(){
  var wScroll = $(this).scrollTop()

  if(wScroll > $('.home-content').height()) {
    $('.main-header').addClass("trans")
  } else {
    $('.main-header').removeClass("trans")
  }

  if(wScroll > $('.home-content').height()) {
    $('.main-header').addClass("trans")
  }

  if(wScroll > $('.home-content').height()) {
    $('.btt-btn').css("bottom", "50px")
  } else {
    $('.btt-btn').css("bottom", "-70px")
  }
})


