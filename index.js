



const burger = document.querySelector('#burger')
const sNav = document.querySelector('.sNav')

burger.addEventListener('click' , function(){
    sNav.classList.toggle('active');
} )

const NavItems = document.querySelectorAll('.nav-item')
Array.from(NavItems).forEach(function(links){
    links.addEventListener('click', function(){
        sNav.classList.toggle('active');

    })
})