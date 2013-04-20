$(function() {

  var images = [
    '1.gif',
    '2.gif',
    '3.gif',
    '4.gif',
    '5.gif',
    '6.gif',
    '7.gif',
    '8.gif',
    '9.gif',
    '10.gif',
    //'11.gif',
    '12.gif',
    '13.gif',
    '14.gif',
    //'15.gif',
    '16.gif',
    '17.gif',
    '18.gif',
    //'19.gif',
    '20.gif',
    '21.gif',
    '22.gif',
    '23.gif',
    '24.gif',
    '25.gif',
    '26.gif',
    '27.gif',
    '28.gif',
    '29.gif'
  ];

  var mobileImages = [
    '1.gif',
    '2.gif',
    '3.gif',
    '4.gif',
    '5.gif',
    '6.gif',
    //'7.gif',
    '8.gif',
    '9.gif',
    '10.gif',
    //'11.gif',
    '12.gif',
    //'13.gif',
    '14.gif',
    //'15.gif',
    //'16.gif',
    '17.gif',
    '18.gif',
    '19.gif',
    '20.gif',
    '21.gif',
    //'22.gif',
    //'23.gif',
    //'24.gif',
    //'25.gif',
    //'26.gif',
    '27.gif',
    //'28.gif',
    //'29.gif'
  ];

        var d = new Date(),
      seconds = d.getSeconds();

   var $cover = $('.cover'),
  $coverImage = $cover.find('.js-bg');

  //
  // if it's a touch device, only load the mobile image array with the lighter images
  if( $('html').hasClass('touch') ) {
    $coverImage.attr('src', 'i/bg/' + mobileImages[getImageNumber(seconds)]);

    $cover.imagesLoaded({
      done: function() {
        $('html').css({
          'background': 'url(i/texture.png), url(i/bg/' + mobileImages[getImageNumber(seconds)] + ')',
          'background-repeat': 'no-repeat, no-repeat',
          'background-size': 'cover, cover'
        });

        $cover.removeClass('active');
        showLogo();
      }
    });
  } else {
    $coverImage.attr('src', 'i/bg/' + images[getImageNumber(seconds)]);

    $cover.imagesLoaded({
      done: function() {
        $('html').css({
          'background': 'url(i/texture.png), url(i/bg/' + images[getImageNumber(seconds)] + ')',
          'background-repeat': 'no-repeat, no-repeat',
          'background-size': 'cover, cover'
        });

        $cover.removeClass('active');
        showLogo();
      }
    });
  }

  function getImageNumber(secs) {

    if(secs < images.length) {
      return secs;
    } else {
      return getImageNumber(secs - images.length);
    }

  }

  //
  //
  // toggle the main header location change (active state)
  $('.main-nav').on('click', 'a', function(event) {
    var $self = $(this),
      $header = $('.main-header'),
    $projects = $('.js-projects'),
       $about = $('.js-about'),
     $contact = $('.js-contact');

     var hash = $self.attr('href'),
    finalHash = hash.substring(1); // remove #


    // if this is the first time...remove the primed class
    if( $header.hasClass('primed') ) {
      $header.removeClass('primed');
    }


    switch (finalHash) {
      case "projects":
        if( $projects.hasClass('active') ) {
          $projects.hideListItems();
          $header.addClass('primed');
        } else if( $about.hasClass('active') | $contact.hasClass('active') ) {
          $about.hideListItems();
          $contact.hideListItems();

          (function(i) {
            $projects.showListItems();
          }).delay(300);
        } else {
          $projects.showListItems();
        }
        break;
      case "about":
        if( $about.hasClass('active') ) {
          $about.hideListItems();
          $header.addClass('primed');
        } else if( $projects.hasClass('active') | $contact.hasClass('active') ) {
          $projects.hideListItems();
          $contact.hideListItems();

          (function(i) {
            $('.about__portrait').addClass('animated');
          }).delay(100);

          (function(i) {
            $about.showListItems();
          }).delay(200);

        } else {
          $about.showListItems();

          (function(i) {
            $('.about__portrait').addClass('animated');

            $('.about__history li').each(function(i) {
              var $self = $(this);

              (function(i) {
                $self.addClass('animated');
              }).delay(i * 50);
            });
          }).delay(300);
        }
        break;
      case "contact":
        if( $contact.hasClass('active') ) {
          $contact.hideListItems();
          $header.addClass('primed');
        } else if( $about.hasClass('active') | $projects.hasClass('active') ) {
          $about.hideListItems();
          $projects.hideListItems();

          (function(i) {
            $contact.showListItems();
          }).delay(300);
        } else {
          $contact.showListItems();
        }
        break;
      default:

    }

    event.preventDefault();
  });



  jQuery.fn.showListItems = function() {
      var $elem = $(this[0]), // It's your element
          items = $elem.find('.future');

    $elem.addClass('active');

    $(items).each(function(i) {
      var $self = $(this);

      (function(i) {
        $self.removeClass('future').addClass('animated');
      }).delay(i * 26);
    });
  };

  jQuery.fn.hideListItems = function() {
      var $elem = $(this[0]), // It's your element
          items = $elem.find('.animated');

    $(items).each(function(i) {
      var $self = $(this);

      (function(i) {
        $self.addClass('fadeOutUp');
      }).delay(i * 40);
    });

    (function() {
      $elem.removeClass('active');

      (function() {
        items.removeClass('fadeOutUp animated').addClass('future');
      }).delay(100);
    }).delay(300);

  };


  //
  //
  // animate the nav items in
  function showNav() {
    $('.main-nav li').each(function(i) {
      var $self = $(this);

      (function(i) {
        $self.addClass('animated  flipInX');
      }).delay(i * 120);
    });
  }

  //
  //
  // animate the logo in
  function showLogo() {
    var $logo = $('.js-logo');

    (function() {
      $logo.addClass('animated  flipInX');
    }).delay(400);
    (function() {
      $logo.removeClass('initial');
      showNav();
    }).delay(600);
  }




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
