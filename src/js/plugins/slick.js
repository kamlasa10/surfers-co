const $ = require('jquery');
const slick = require('slick-carousel');
const tabs = require('../tabs');
const gallery = require('./gallery');
module.exports = function () {
  $(document).ready(() => {
    const $wrap = $('.boards__wrap');
    const $status = $('.boards__info');

    $wrap.on('init afterChange', function (event, slick, currentSlide = 0) {
      if ($(event.target).hasClass('boards__wrap')) {
        const dataId = $('.boards__wrap .slick-current');
        tabs(dataId)
        gallery(dataId);
        let i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + '/' + slick.slideCount);
      }
    });

    $wrap.on('beforeChange', function (event, slick, currentSlide = 0, nextSlide) {
      if ($(event.target).hasClass('boards__wrap')) {
        const elem = $('.boards__wrap .boards__item').eq(nextSlide);
        tabs(elem);
        gallery(elem);
      }
    });

    $wrap.slick({
      adaptiveHeight: true,
      infinite: false,
      draggable: false
    });

    $('.our-team__slider').slick({
      centerMode: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: true,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerMode: true,
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  });
};