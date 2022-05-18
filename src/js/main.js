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


  $(function() {
      
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.wrapper').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
    
  });

  //переход между страницами табов (которая скрыта и обратно)
  // $('.catalog-item__link').each(function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //     console.log(`i = ${i}`);
  //     console.log(`e = ${e}`);
  //   })
  // })

  // $('.catalog-item__link_back').each(function(i){
  //   $(this).on('click', function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
  //   })
  // })

  //Оптимизированный вариант совмещающий эти две функции
  const toggleSlide = (item)=>{
    $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    })
  }

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__link_back');
});
