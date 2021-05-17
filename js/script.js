// launch product showGallery
LoadGallery(4, 2, '.product-bth');


//initialization slick-slider testimonials__slider
$(document).ready(function () {
    $('.testimonials__slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        initialSlide: 1,
        speed: 1500
    });
});


//hide placeholder. init it add init-pl-holder class to your form

let hidePlaceholder = function () {
    let initPlHolder = document.querySelector('.init-pl-holder');

    initPlHolder.addEventListener('focus', function (event) {
        event.target.removeAttribute('placeholder');
    }, true);
    initPlHolder.addEventListener('blur', function (event) {
        let plHolder = event.target.getAttribute('data-plHolder');
        event.target.setAttribute('placeholder', plHolder);
    }, true);
}
hidePlaceholder();

//init buguetteBox
window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
});

//burger-menu code start
let burgBth = document.querySelector('.burger-bth');
let burgCont = document.querySelector('.burger-content');
let takeItems = document.querySelector('.take');
let putBack = document.querySelector('.put-back');

let insertMenu = function () {
    document.documentElement.clientWidth < 769 ? burgCont.append(takeItems) : putBack.after(takeItems);
}

insertMenu();

window.addEventListener('resize', function (event) {
    insertMenu();
})


burgBth.addEventListener('click', function (event) {
    burgBth.classList.toggle('active');
    burgCont.classList.toggle('active');
    document.body.classList.toggle('active');
    if (document.body.classList.contains('active')) {
        document.body.scrollTo(0,0);
    }
})
//burger-menu code end



