var s,
DollaDollaBillYall = {

  settings : {
    newDate: new Date(),
    images: [ '2', '4', '5', '6', '7', '8', '9', '10', '12', '13', '14', '16', '17', '18', '21', '23', '25', '26', '27', '28', '29' ]
  },

  init: function () {
    s = this.settings;

    this.setBackgroundImage();

    // only load the GIF background image if not on a mobile device
    if( !$('html').hasClass('touch') ) {
      this.loadGIFBackground( $('body') );
    }

    this.navigation();
  },

  //
  //
  //
  // used by loadGifBackground()
  getImageNumber: function (seconds) {
    if(seconds < s.images.length) {
      return seconds;
    } else {
      return this.getImageNumber(seconds - s.images.length);
    }
  },

  //
  //
  //
  //
  setBackgroundImage: function () {
    var seconds = s.newDate.getSeconds();

    // define an element to pass to the background function
    var $needsBG = $('html');

    // create a new image
    var img = new Image();
    // set the src
    img.src = 'i/bg/' + s.images[this.getImageNumber(seconds)] + '.jpg';
    // set the onload function to set the gif as the background of the element
    img.onload = function() {
      DollaDollaBillYall.addJPGBackground( $needsBG );
    }

  },

  //
  //
  //
  //
  loadGIFBackground: function( $elem ) {
    var seconds = s.newDate.getSeconds();
    var $needsBG = $elem;

    // usage:
    //this.switchBackground( $elem );

    // create a new image
    var img = new Image();
    // set the src
    img.src = 'i/bg/' + s.images[this.getImageNumber(seconds)] + '.gif';
    // set the onload function to set the gif as the background of the element
    img.onload = function( $needsBG ) {
      DollaDollaBillYall.addGIFBackground( $elem );
    }

  },

  //
  //
  //
  //
  addJPGBackground: function( $elem ) {
    var seconds = s.newDate.getSeconds();
    var $cover = $('.cover');

    $elem.css({
      'background': 'url(i/bg/' + s.images[DollaDollaBillYall.getImageNumber(seconds)] + '.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });

    $cover.removeClass('is-active');
    this.showLogo();
  },

  //
  //
  //
  // used by loadGIFBackground()
  addGIFBackground: function( $elem ) {
    var seconds = s.newDate.getSeconds();

    $elem.css({
      'background': 'url(i/bg/' + s.images[DollaDollaBillYall.getImageNumber(seconds)] + '.gif)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover'
    });
  },

  //
  //
  //
  //
  navigation: function (seconds) {
    $('.main-nav').on('click', 'a', function(event) {
      var $self = $(this);
      var $header = $('.main-header');
      var $projects = $('.js-projects');
      var $about = $('.js-about');
      var $contact = $('.js-contact');

      var hash = $self.attr('href');
      var finalHash = hash.substring(1); // remove #

      // if this is the first time...remove the is-primed class
      if( $header.hasClass('is-primed') ) {
        $header.removeClass('is-primed');
      }

      switch (finalHash) {
        case "projects":
          if( $projects.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $projects );
            $header.addClass('is-primed');
          } else if( $about.hasClass('is-active') | $contact.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $about );
            DollaDollaBillYall.hideListItems( $contact );

            setTimeout(function() {
              DollaDollaBillYall.showListItems( $projects );
            }, 300);
          } else {
            DollaDollaBillYall.showListItems( $projects );
          }
          break;

        case "about":
          if( $about.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $about );
            $header.addClass('is-primed');
          } else if( $projects.hasClass('is-active') | $contact.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $projects );
            DollaDollaBillYall.hideListItems( $contact );

            DollaDollaBillYall.showListItems( $about );

            setTimeout(function() {
              $('.about__portrait').addClass('animated');

              $('.about__history li').each(function(i) {
                var $self = $(this);

                setTimeout(function() {
                  $self.addClass('animated');
                }, 50 * (i + 1));

              });
            }, 100);

            setTimeout(function() {
              $self.addClass('animated');
            }, 200);

          } else {
            DollaDollaBillYall.showListItems( $about );

            setTimeout(function() {
              $('.about__portrait').addClass('animated');

              $('.about__history li').each(function(i) {
                var $self = $(this);

                setTimeout(function() {
                  $self.addClass('animated');
                }, 50 * (i + 1));

              });
            }, 500);
          }
          break;

        case "contact":
          if( $contact.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $contact );
            $header.addClass('is-primed');
          } else if( $about.hasClass('is-active') | $projects.hasClass('is-active') ) {
            DollaDollaBillYall.hideListItems( $about );
            DollaDollaBillYall.hideListItems( $projects );

            setTimeout(function() {
              DollaDollaBillYall.showListItems( $contact );
            }, 300);
          } else {
            DollaDollaBillYall.showListItems( $contact );
          }
          break;
        default:
      }

      event.preventDefault();
    });
  },

  //
  //
  //
  // used by showLogo()
  showNavigation: function() {
    $('.main-nav li').each(function(i) {
      var $self = $(this);

      setTimeout(function(i) {
        $self.addClass('animated  flipInX');
      }, i * 120);
    });
  },

  //
  //
  //
  // used by setBackgroundImage()
  showLogo: function() {
    var $logo = $('.js-logo');

    setTimeout(function(i) {
      $logo.addClass('animated  flipInX');
    }, 400);

    setTimeout(function(i) {
      $logo.removeClass('initial');
      DollaDollaBillYall.showNavigation();
    }, 600);
  },

  //
  //
  //
  // used by navigation()
  showListItems: function($elem) {
    var items = $elem.find('.future');

    $elem.addClass('is-active');

    $(items).each(function(i) {
      var $self = $(this);

      setTimeout(function(i) {
        $self.removeClass('future').addClass('animated');
      }, i * 26);
    });
  },

  //
  //
  //
  // used by navigation()
  hideListItems: function($elem) {
    var items = $elem.find('.animated');

    $(items).each(function(i) {
      var $self = $(this);

      setTimeout(function(i) {
        $self.addClass('fadeOutUp');
      }, i * 40);
    });

    setTimeout(function(i) {
      $elem.removeClass('is-active');

      $(items).each(function(i) {
        var $self = $(this);

        setTimeout(function(i) {
          $self.removeClass('fadeOutUp  animated').addClass('future');
        }, i * 50);
      });
    }, 300);
  }

};


(function ($) {
  DollaDollaBillYall.init();
})(window.jQuery || window.Zepto);
