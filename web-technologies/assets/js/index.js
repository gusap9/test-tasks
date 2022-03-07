(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 100) {
            menuHeader.classList.remove('burger_open')
            firstLine.classList.remove('burger_line_1_open')
            secondLine.classList.remove('burger_line_2_open')
            lastLine.classList.remove('burger_line_3_open')
            burger.classList.remove('header_burger-opened')
            backToTop.classList.add('back_to_top-opened')
        } else {
            backToTop.classList.remove('back_to_top-opened')
        }
    };
}());

const menuHeader = document.querySelector(".header_nav")
const firstLine = document.querySelector(".burger_line_1")
const secondLine = document.querySelector(".burger_line_2")
const lastLine = document.querySelector(".burger_line_3")
const burger = document.querySelector(".header_burger")
const linksForBurger = document.querySelectorAll(".header_list_item")

const burgerOpen = () => {
    menuHeader.classList.toggle('burger_open')
    firstLine.classList.toggle('burger_line_1_open')
    secondLine.classList.toggle('burger_line_2_open')
    lastLine.classList.toggle('burger_line_3_open')
    burger.classList.toggle('header_burger-opened')
}
burger.addEventListener("click", burgerOpen)

linksForBurger.forEach((link) => {
    link.addEventListener("click", burgerOpen)
})

const dayNight = document.querySelector(".day-night-mode");
const body = document.querySelector("body")
const bigTitle = document.querySelector(".big_title")
const mainTitle = document.querySelectorAll(".main_title")
const burgerLines = document.querySelectorAll(".burger_line")

const changeDayNight = () => {
    body.classList.toggle('white')
    dayNight.classList.toggle('day-mode')
    menuHeader.classList.toggle('header_nav_day-mode')
    bigTitle.classList.toggle('big_title_day-mode')
    mainTitle.forEach((title) => {
        title.classList.toggle('main_title_day-mode');
    })
}
dayNight.addEventListener("click", changeDayNight);

const backToTop = document.querySelector(".back_to_top")

const backTop = () => {

}
