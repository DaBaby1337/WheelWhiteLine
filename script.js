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
    document.getElementById('sliderW').onmouseenter=function(){
    start();
}
function test(){
    a++;
}
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
}())
//media-header burger
(function(){
    const burgerItem = document.querySelector('.burger');
    const menu=document.querySelector('.header-nav');
    const menuCloseItem=document.querySelector('.header-nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active')
    });
    menuCloseItem.addEventListener('click',()=>{
        menu.classList.remove('header-nav-active')
    });
}());
// header-end
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

