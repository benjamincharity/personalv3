$(function() {

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
      //case "about":
        //break;
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
    $('.main-nav li a').each(function(i) {
      var $self = $(this);

      (function(i) {
        $self.addClass('animated  flipInX');
      }).delay(i * 160);
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
