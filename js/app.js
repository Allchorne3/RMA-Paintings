$(function(){
    $('.list').on("click", function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.itemBox').css("display", "block");
        } else {
            $('.itemBox').not('.'+value).css("display", "none");
            $('.itemBox').filter('.'+value).css("display", "block");
        }
    })

    // Now Add/Remove active class
    $('.list').on("click", function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    // Owl Carousel
    $("#owl-slider").owlCarousel({
 
        navigation : false, // Show next and prev buttons
        autoplay: true,
        autoplayTimeout: 7500,
        autoplaySpeed : 2000,
        autoplayHoverPause: true,
        paginationSpeed : 800,
        loop: true,
        touchDrag: true,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });


    // Desktop Filter(s)
    const filterToggle = $('.filter-toggle span');
    const filters = $('.filters');

    filterToggle.on('click', function(){
        filters.toggleClass('active');

        if(filters.hasClass('active')) {
            filterToggle.text("Filters -")
        } else {
            filterToggle.text("Filters +")
        }
    })
   

    // Back To Top
    //Header transparency on scroll
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop()

       
        if(wScroll > ($('main').height() / 3)) {
        $('.btt-btn').css("bottom", "50px")
        } else {
        $('.btt-btn').css("bottom", "-70px")
        }
    })

    // Change Diarama Links Wording
    const phone = window.matchMedia("(max-width: 599px)")
    const back = $('.diarama-links .diarama-link h4.back');
    const toJourney = $('.diarama-links .diarama-link h4.to-journey');
    const toDiaramas = $('.diarama-links .diarama-link h4.to-diaramas');

    if (phone.matches) {
        back.text("Back");
        toJourney.text("Journey");
        toDiaramas.text("Diaramas");
    }
    
    
})

// Mobile Filter Accordion
    
const accordionButton = document.querySelector('.accordion-button');

accordionButton.addEventListener('click', function(){
    const accordionContent = accordionButton.nextElementSibling;
    
    accordionButton.classList.toggle('accordion-button-active');
    
    if(accordionButton.classList.contains('accordion-button-active')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = 0;
    }
    
}); 