const $ = require('jquery');
const slick = require('slick-carousel');

module.exports = function(slide) {
  const who = slide.find('.boards__img-big');
  const nav = slide.find('.boards__gallery');
  if (who.hasClass('slick-initialized')) {
    nav.find('.slick-slide').eq(0).addClass('slick-current');
    return;
  }
  who.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    asNavFor: nav,
  });
  nav.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: who,
    focusOnSelect: true,
    infinite: false,
  });
};

