burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp')
    navList.classList.toggle('v-class-resp')
    navbar.classList.toggle('h-nav-resp')
})


const heading = document.querySelector('.text-big');

let text = 'CHEATSHEET4U';

let endValue = 1;

let id = setInterval(function(){
    heading.textContent = text.substring(0, endValue);
    endValue++;
    console.log(endValue);

    if(endValue > text.length + 30){
        endValue = 1;
    }
}, 100)