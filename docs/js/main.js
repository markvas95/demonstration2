document.addEventListener('DOMContentLoaded', function(){
  let svg = document.querySelectorAll('.svg');
  svg.forEach(element => {
    const tempContainer = document.createElement('div')
    let img = element;
    let imgClass = img.getAttribute('class');
    let imgURL = img.getAttribute('src');
    let xhr = new XMLHttpRequest();
    xhr.open('GET', imgURL);
    xhr.onreadystatechange = function (data) {
      if(typeof xhr.response === 'string'){
        tempContainer.innerHTML = xhr.response;
        let svgi = tempContainer.querySelector('svg');
        if (typeof imgClass !== 'undefined') {
          svgi.setAttribute('class', imgClass);
        }
        img.replaceWith(svgi);
      }
    }
    xhr.send();
  })
  let faq = document.querySelectorAll('.faq__item');
  for(let i = 0 ; i < faq.length; i++){
    faq[i].addEventListener('click', () => {
      for(let x = 0 ; x < faq.length; x++){
        if(x != i){
          faq[x].classList.remove('active');
        }
      }
      faq[i].classList.toggle('active');
    })
  }
  if(document.querySelector('.header__menu') != undefined){
    window.addEventListener('scroll', function() {
      let scroll =  window.pageYOffset || document.documentElement.scrollTop;
      if(scroll > 400){
        document.querySelector('.header__menu').classList.add('fixed');
      }
      if(scroll < 400){
        document.querySelector('.header__menu').classList.remove('fixed');
      }
    });
  }

  if($(window).width() < 1320){
    $(".reviews__list").slick({
      dots: true,
      slidesToShow: 1,
      slidesToScroll:1,
    });
  }

  $('.marquee__more').hide();
  $('.marquee__about').mouseenter(function(){
    $('.marquee__more').fadeIn();
  })
  $('.marquee__about').mouseleave(function () { 
    $('.marquee__more').fadeOut();
  });
  $('.menu_btn').click(function (e) { 
    $(this).toggleClass('active');
    $('.header__nav').toggleClass('active');
    $('.header__menu').toggleClass('active');
  });

  $('a.anchor').click(function (e) { 
    $('.menu_btn').removeClass('active');
    $('.header__nav').removeClass('active');
    $('.header__menu').removeClass('active');
  });

  new WOW({
    offset: 300
  }).init();
  $(".fancybox").fancybox();

  $('a.anchor').on('click', function(e){
    e.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 100;
    $('body,html').animate({scrollTop: top}, 1000);
  });

});