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


  //modal jquery code

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');

  });

  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  })


  $('[data-catalog=buy]').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });

  //validate form by plagin JQuery
  validateForm('#consultation form');
  validateForm('#order form');
  validateForm('#consultation-form');

  function validateForm(form){
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2
        },
        phone: "required",
        email: {
          required: true,
          email: true
        }
      },
        messages: {
          name: {
            required: 'Введите Ваше Имя',
            minlength: jQuery.validator.format('ВВедите не меньше {0} символов')
  
          },
          email: {
            required: 'Введите почтовый адрес',
            email: 'Введенный почтовый адрес не корректный!'
          },
          phone: 'Введите номер телефона'
        }
  
    });
  }

  new WOW().init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animate__animated'
  });

  $('form').submit(function(e){
    e.preventDefault();

    if(!$(this).valid()) {
      return;
    }

    

    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");

      $('form').trigger('reset');
    });
    return false;
  });
});
