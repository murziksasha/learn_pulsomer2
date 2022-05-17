"use strict"


document.addEventListener('DOMContentLoaded',()=>{
  
  const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });
  document.querySelector('.prev').addEventListener('click',()=>{
    slider.goTo('prev');
  });
  document.querySelector('.next').addEventListener('click',()=>{
    slider.goTo('next');
  });





});
