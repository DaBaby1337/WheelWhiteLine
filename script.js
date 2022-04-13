let fixSection=document.querySelector('.city-tours-link');
fixSection.addEventListener('click',()=>{
    alert('This section is under development. All our operators and drivers are English-speaking , you can consult on any of the numbers on the website!');
});
// header-start
(function(){
    const header=document.querySelector('.header');
    const wrapper=document.querySelector('.wrapper-header');
    const headerTriple=document.querySelector('.header-triple');
    window.onscroll=()=>{
        if(window.pageYOffset>100){
            header.classList.add('header-active');
            wrapper.classList.add('active-wrapper');
            headerTriple.classList.add('header-triple-active');
        }
        else{
            header.classList.remove('header-active');
            wrapper.classList.remove('active-wrapper');
            headerTriple.classList.remove('header-triple-active');
        }
    };
    }());
    //media-header burger
    (function(){
        const burgerItem = document.querySelector('.burger');
        const menu=document.querySelector('.header-nav');
        const menuCloseItem=document.querySelector('.header-nav-close');
        const menuLinks=document.querySelectorAll('.header-link');
        burgerItem.addEventListener('click', () => {
            menu.classList.add('header-nav-active')
        });
        menuCloseItem.addEventListener('click',()=>{
            menu.classList.remove('header-nav-active')
        });
        if(window.innerWidth<=750){
            for (let i=0; i<menuLinks.length;i+=1){
                menuLinks[i].addEventListener('click', ()=>{
                    menu.classList.remove('header-nav-active');
                });
            }
        }
    }());
    // Scroll to anchors
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());
// header-end
const images= document.querySelectorAll('.slider .slider-line img');
const sliderLine= document.querySelector('.slider-line');
let count=0;
let timeoutId;
let width;
function init(){
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width=width*images.length + 'px';
    images.forEach(item=>{
        item.style.width=width +'px';
        item.style.height='auto';
    })
    rollSlider();
}
window.addEventListener('resize',init);
init();

  document.querySelector('.slider-next').addEventListener('click', function(){
    count++;
    if (count>= images.length){
        count=0;
    }
rollSlider(count);
})
document.querySelector('.slider-back').addEventListener('click', function(){
    count--;
    if (count <0 ){
        count=images.length-1;
    }
rollSlider(count);
})
function rollSlider(count){
        sliderLine.style.transform ='translate(-' +count*width +'px';
    }
 function start(){
     count++;
     if (count>= images.length){
        count=0;
    }
    if (count <0 ){
        count=images.length-1;
    }
    rollSlider(count);
}
    document.getElementById('sliderW-js').onmouseenter=function(){
    start();
}
// slider-cars-start
const imagesCar= document.querySelectorAll('.slider-car .slider-line-car img');
const sliderLineCar= document.querySelector('.slider-line-car');
let countCar=0;
let widthCar;
function initCar(){
    console.log('resize');
    widthCar = document.querySelector('.slider-car').offsetWidth;
    sliderLineCar.style.width=widthCar*imagesCar.length + 'px';
    imagesCar.forEach(item=>{
        item.style.width=widthCar +'px';
        item.style.height='auto';
    })
    rollSliderCar();
}
window.addEventListener('resize',initCar);
initCar();

document.querySelector('.slider-next-car').addEventListener('click', function(){
    countCar++;
    if (countCar>= imagesCar.length){
        countCar=0;
    }
rollSliderCar();
})

document.querySelector('.slider-back-car').addEventListener('click', function(){
    countCar--;
    if (countCar <0 ){
        countCar=imagesCar.length-1;
    }
rollSliderCar();
})

function rollSliderCar(){
    sliderLineCar.style.transform ='translate(-' +countCar*widthCar +'px';
}
//slider-cars-end

