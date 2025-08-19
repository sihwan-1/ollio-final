// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close();



$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});


function Coupon_close() {
  $('.coupon-close').click(function () {
    $('.coupon').addClass('close');
  });
}
Coupon_close() ;

function Search_1() {
  $('.search').click(function () {
    $('.search-box').toggleClass('show');
    $('header').toggleClass('show');
  });
}
Search_1();

function Menu_blur() {
  $('.menu-1').mouseenter(function () {
    $('.bg').addClass('blur');
  });

  $('.menu-1').mouseleave(function () {
    $('.bg').removeClass('blur');
  });
}
Menu_blur();


function Swiper_1() {
  var swiper = new Swiper(".swiper-1", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false 
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
Swiper_1();

function Swiper_2() {
  var swiper = new Swiper(".swiper-2", {
    slidesPerView: 4,
    spaceBetween: 32,
    scrollbar: {
      el: ".swiper-box-2 .swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-box-2 .swiper-button-next",
      prevEl: ".swiper-box-2 .swiper-button-prev",
    },
  });
}
Swiper_2();

function Swiper_3() {
  var swiper = new Swiper(".swiper-3", {
    slidesPerView: 3,
    spaceBetween: 32,
    scrollbar: {
      el: ".swiper-box-3 .swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-box-3 .swiper-button-next",
      prevEl: ".swiper-box-3 .swiper-button-prev",
    },
  });
}
Swiper_3();

function Swiper_5() {
  var swiper = new Swiper(".swiper-5", {
    slidesPerView: 4,
    spaceBetween: 32,
    navigation: {
      nextEl: ".swiper-box-5 .swiper-button-next",
      prevEl: ".swiper-box-5 .swiper-button-prev",
    },
  });
}
Swiper_5();

function Swiper_8() {
  var swiper = new Swiper(".swiper-8", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoplay: {
        delay: 3000,          // 3초마다 자동 전환
        disableOnInteraction: false,
      },
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}

Swiper_8();

// start popup 스크립트
function Popup_close() {
  $('.popup-close > p').click(function () {
    $('.start-popup').addClass('close');
  });
}
Popup_close();



$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});


function Coupon_close() {
  $('.coupon-close').click(function () {
    $('.coupon').addClass('close');
  });
}
Coupon_close();

function M_menu() {
  $('.side-menu > nav > ul > li').click(function() {
    let $this = $(this);
    
    $this.siblings('.hover').removeClass('hover');
    
    if ( $this.hasClass('hover') ) {
      $this.removeClass('hover');
    }
    else {
      $this.addClass('hover');
    }
  });
  
  $('.side-menu > nav > ul > li > ul').click(function() {
    return false;
  });
}

M_menu();

function Side_menu() {
  $('.m-menu').click(function () {
    $('.side-menu').addClass('active');
    $('.bg').addClass('blur');
    $('body').addClass('no-scroll');

    if ($('.search-m').hasClass('active')) {
      $('.search-m').removeClass('active');
    }
  });

  $('.close-btn').click(function (e) {
    e.stopPropagation();
    $('.side-menu').removeClass('active');
    $('.bg').removeClass('blur');
    $('body').removeClass('no-scroll');
  });
}
Side_menu();

function Search_m() {
  $('.search-btn').click(function (e) {
    e.stopPropagation();
    $('.search-m').addClass('active');
    $('header').addClass('on');
    $('.side-menu').removeClass('active');
    $('body').removeClass('no-scroll');
  });
}
Search_m();

function Bg_blur() {
  $('.bg').click(function () {
    $('.search-m').removeClass('active');
    $('.side-menu').removeClass('active');
    $('.bg').removeClass('blur');
  });
}
Bg_blur();

$(window).on('scroll', function () {
  let scrollTop = $(this).scrollTop();

  if (scrollTop > 20) {
    $('header').addClass('on');
  } else {
    $('header').removeClass('on');
  }
});

function Swiper_2_m() {
  var swiper = new Swiper(".swiper-2-m", {
    slidesPerView: 1.5,
    spaceBetween: 14,
  });
}
Swiper_2_m();

function Swiper_3_m() {
  var swiper = new Swiper(".swiper-3-m", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-box-3-m .swiper-button-next",
      prevEl: ".swiper-box-3-m .swiper-button-prev",
    },
  });
}
Swiper_3_m();

function Swiper_4_m() {
  var swiper = new Swiper(".swiper-4-m", {
    slidesPerView: 1.5,       // 양옆이 보이도록
    spaceBetween: 20,
    centeredSlides: true,     // 가운데 정렬
    loop: true,
  });
}
Swiper_4_m();

function Swiper_5_m() {
  var swiper = new Swiper(".swiper-5-m", {
    slidesPerView: 1.5,
    spaceBetween: 14,
  });
}
Swiper_5_m();

function Swiper_8_m() {
  var swiper = new Swiper(".swiper-8-m", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
  });
}

Swiper_8_m();

function Fotter_menu() {
  $('.cs-btn').click(function () {
    $('.cs-center-m > ul').toggleClass('open');
    $(this).toggleClass('open');
  });

  $('.company-btn').click(function () {
    $('.txt').toggleClass('open');
    $(this).toggleClass('open');
  });
}
Fotter_menu();

