$(document).ready(function(){
//nav toggles
  $('.photoBtn').click(function(){
    $('.photoList').toggleClass('listAnimate');
    $('.otherList').removeClass('listAnimate');
    $('.elementsList').removeClass('listAnimate');
    $('.videoList').removeClass('listAnimate');
  });

  $('.elementsBtn').click(function(){
    $('.elementsList').toggleClass('listAnimate');
    $('.otherList').removeClass('listAnimate');
    $('.videoList').removeClass('listAnimate');
    $('.photoList').removeClass('listAnimate');
  });

  $('.otherBtn').click(function(){
    $('.otherList').toggleClass('listAnimate');
    $('.videoList').removeClass('listAnimate');
    $('.elementsList').removeClass('listAnimate');
    $('.photoList').removeClass('listAnimate');
  });

  $('.videoBtn').click(function(){
    $('.videoList').toggleClass('listAnimate');
    $('.otherList').removeClass('listAnimate');
    $('.elementsList').removeClass('listAnimate');
    $('.photoList').removeClass('listAnimate');
  });


  //page toggles
  $('.photoGeneral').click(function(){
    var pics = $('.photosGen');
    if (pics.hasClass('slide')) {
      pics.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      pics.addClass('slide');
      pics.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.redCarpetBtn').click(function(){
    var redCarpet = $('.redCarpet');
    if (redCarpet.hasClass('slide')) {
      redCarpet.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      redCarpet.addClass('slide');
      redCarpet.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.theaterBtn').click(function(){
    var theater = $('.theater');
    if (theater.hasClass('slide')) {
      theater.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      theater.addClass('slide');
      theater.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.pressRoomBtn').click(function(){
    var pressRoom = $('.pressRoom');
    if (pressRoom.hasClass('slide')) {
      pressRoom.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      pressRoom.addClass('slide');
      pressRoom.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.webClipsBtn').click(function(){
    var clips = $('.webClips');
    if (clips.hasClass('slide')) {
      clips.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      clips.addClass('slide');
      clips.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.videoNetBtn').click(function(){
    var vids = $('.videoNets');
    if (vids.hasClass('slide')) {
      vids.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      vids.addClass('slide');
      vids.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.leadBtn').click(function(){
    var leads = $('.leads');
    if (leads.hasClass('slide')) {
      leads.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      leads.addClass('slide');
      leads.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.logosBtn').click(function(){
    var logos = $('.logos');
    if (logos.hasClass('slide')) {
      logos.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      logos.addClass('slide');
      logos.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.brandCentralBtn').click(function(){
    $('.black').removeClass('on');
    $('.Pages').removeClass('slide');
  });

  $('.pressBtn').click(function(){
    var press = $('.press');
    if (press.hasClass('slide')) {
      press.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      press.addClass('slide');
      press.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });

  $('.acsBtn').click(function(){
    var acs = $('.acs');
    if (acs.hasClass('slide')) {
      acs.removeClass('slide');
      $('.black').removeClass('on');
    }
    else {
      acs.addClass('slide');
      acs.siblings().removeClass('slide');
      $('.black').addClass('on');
    }
  });


// closing functions


    $('.black').click(function(){
      $('.black').removeClass('on');
      $('.Pages').removeClass('slide');
    });

//Mobile Navigation functions
$('.topNav').click(function(){
  $('.leftNav').addClass('slideLeft');
  $('.black2').addClass('on');
});

  $('.black2').click(function(){
    $('.leftNav').removeClass('slideLeft');
    $('.black2').removeClass('on');
  });

  $('.btnAction').click(function(){
    $('.leftNav').removeClass('slideLeft');
    $('.black2').removeClass('on');
  });









});
