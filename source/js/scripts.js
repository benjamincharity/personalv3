$(function() {

  var images = [
    //'1.gif',
    '2.gif',
    //'3.gif',
    //'4.gif',
    //'5.gif',
    //'6.gif',
    '7.gif',
    '8.gif',
    '9.gif',
    '10.gif',
    '11.gif',
    //'12.gif',
    //'13.gif',
    //'14.gif',
    //'15.gif',
    '16.gif',
    '17.gif',
    '18.gif',
    '19.gif',
    '20.gif',
    '21.gif',
    '22.gif',
    '23.gif',
    '24.gif',
    '25.gif',
    '26.gif',
    '27.gif',
    //'28.gif',
    '29.gif',
    '30.gif',
    '31.gif'
  ];

  var imageNumber = images[Math.floor(Math.random() * images.length)];

  $('html').css({
    'background': 'url(/i/texture.png), url(/i/bg/' + imageNumber + ')',
    'background-position': 'left top, right bottom',
    'background-repeat': 'no-repeat, no-repeat',
    'background-size': 'cover, cover'
  });


  //
  //
  // toggle the main header location change (active state)
  $('.main-nav').on('click', 'a', function(event) {
    var $self = $(this),
    $header = $('.main-header'),
    hash = $self.attr('href'),
    finalHash = hash.substring(1); // remove #

    switch (finalHash) {
      case "projects":
        console.log(finalHash);
        $header.addClass('active');
        $('.projects').fadeIn();
        break;
      case "about":
        console.log(finalHash);
        $header.addClass('active');
        $('.about').fadeIn();
        break;
      case "contact":
        console.log(finalHash);
        $header.addClass('active');
        $('.contact').fadeIn();
        break;
      default:

    }

    event.preventDefault();
  });



  //
  //
  // animate the nav items in
  function showNav() {
    $('.main-nav li a').each(function(i) {
      var $self = $(this);

      (function(i) {
        $self.addClass('animated  flipInX');
      }).delay(i * 260);
    });
  }

  //
  //
  // animate the logo in
  (function() {
    $('.logo').addClass('animated  flipInX');
    (function() {
      showNav();
    }).delay(600);
  }).delay(600);




  //
  //
  // initialize the scrollbars
  $('.nano').nanoScroller({
    iOSNativeScrolling: true
  });


  //
  //
  // Read a page's GET URL variables and return them as an associative array.
  $.extend({
    getUrlVars: function(){
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
    },
    getUrlVar: function(name){
      return $.getUrlVars()[name];
    }
  });

});
