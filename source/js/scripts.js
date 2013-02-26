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



  //var paper = Raphael("js_logo", 400, 220);
  //var inner_border = paper.path("M202.91,20.111 C99.91,20.111 38.91,37.777 31.243,40.444 C25.243,47.444 16.243,84.444 17.506,111.444 C16.243,137.886 25.243,174.121 31.243,180.976 C38.91,183.588 99.91,200.889 202.91,200.889 C303.234,200.889 362.649,183.588 370.117,180.976 C375.961,174.121 384.727,137.886 383.497,111.444 C384.727,84.444 375.961,47.444 370.117,40.444 C362.649,37.777 303.234,20.111 202.91,20.111");
  //inner_border.attr({"stroke-width": 4,
                //"stroke": "#ffffff"});
  //var outer_border = paper.path("M203.052,7.904 C100.052,7.904 29.112,28.174 21.445,30.841 C15.445,37.84 5.456,83.904 6.719,110.904 C5.456,137.692 15.445,183.395 21.445,190.34 C29.112,192.985 100.052,213.096 203.052,213.096 C303.376,213.096 372.473,192.985 379.94,190.34 C385.784,183.395 395.514,137.692 394.284,110.904 C395.514,83.904 385.784,37.84 379.94,30.841 C372.473,28.174 303.376,7.904 203.052,7.904");
  //outer_border.attr({"stroke-width": 7,
                //"stroke": "#ffffff"});
  //var benjamin = paper.path("M74.605,96.898 Q77.572,99.244 77.572,103.004 Q77.572,106.213 75.295,108.49 Q73.018,110.767 69.809,110.767 L55.147,110.767 L55.147,84.892 L68.084,84.892 Q71.293,84.892 73.57,87.169 Q75.847,89.446 75.847,92.654 Q75.847,94.966 74.605,96.898 z M60.322,95.242 L68.084,95.242 Q69.154,95.242 69.913,94.483 Q70.672,93.724 70.672,92.654 Q70.672,91.585 69.913,90.826 Q69.154,90.067 68.084,90.067 L60.322,90.067 z M60.287,105.592 L69.809,105.592 Q70.879,105.592 71.638,104.833 Q72.397,104.074 72.397,103.004 Q72.397,101.935 71.638,101.176 Q70.879,100.417 69.809,100.417 L60.287,100.417 z M95.682,110.767 L95.682,84.892 L114.657,84.892 L114.657,90.067 L100.857,90.067 L100.857,97.829 L111.207,97.829 L111.207,103.004 L100.857,103.004 L100.857,105.592 L114.657,105.592 L114.657,110.767 z M134.492,110.767 L134.492,84.892 L135.872,84.892 L151.742,100.003 L151.742,84.892 L156.917,84.892 L156.917,110.767 L155.502,110.767 L139.667,95.656 L139.667,110.767 z M174.509,107.075 L173.992,106.385 L178.097,103.211 L178.615,103.901 Q179.926,105.592 182.03,105.592 Q183.824,105.592 185.084,104.333 Q186.343,103.073 186.343,101.279 L186.343,84.892 L191.518,84.892 L191.518,101.279 Q191.518,105.212 188.741,107.99 Q185.963,110.767 182.03,110.767 Q179.753,110.767 177.787,109.784 Q175.82,108.8 174.509,107.075 z M229.086,110.767 L226.705,106.454 L213.388,106.454 L211.042,110.767 L205.143,110.767 L220.047,83.477 L234.985,110.767 z M216.217,101.279 L223.876,101.279 L220.047,94.241 z M250.715,110.767 L252.716,84.892 L254.027,84.892 L263.376,95 L272.691,84.892 L274.037,84.892 L276.003,110.767 L270.828,110.767 L269.69,95.794 L263.376,102.625 L257.063,95.794 L255.89,110.767 z M300.668,84.892 L300.668,110.767 L295.493,110.767 L295.493,84.892 z M320.848,110.767 L320.848,84.892 L322.228,84.892 L338.098,100.003 L338.098,84.892 L343.273,84.892 L343.273,110.767 L341.859,110.767 L326.023,95.656 L326.023,110.767 z");
  //benjamin.attr("fill", "#ffffff");
  //var charity = paper.path("M136.285,144.649 Q137.545,144.649 138.648,144.093 Q139.75,143.536 140.485,142.549 L142.144,143.83 Q141.115,145.174 139.582,145.962 Q138.049,146.749 136.285,146.749 Q133.24,146.749 131.088,144.597 Q128.935,142.444 128.935,139.399 Q128.935,136.354 131.088,134.202 Q133.24,132.049 136.285,132.049 Q138.049,132.049 139.582,132.837 Q141.115,133.624 142.144,134.968 L140.485,136.249 Q139.75,135.262 138.648,134.706 Q137.545,134.149 136.285,134.149 Q134.122,134.149 132.579,135.682 Q131.035,137.215 131.035,139.399 Q131.035,141.583 132.579,143.116 Q134.122,144.649 136.285,144.649 z M163.044,132.049 L165.144,132.049 L165.144,146.749 L163.044,146.749 L163.044,142.024 L154.644,142.024 L154.644,146.749 L152.544,146.749 L152.544,132.049 L154.644,132.049 L154.644,139.924 L163.044,139.924 z M189.488,146.749 L188.039,144.124 L179.303,144.124 L177.875,146.749 L175.481,146.749 L183.671,131.755 L191.882,146.749 z M180.458,142.024 L186.905,142.024 L183.671,136.123 z M209.758,142.024 L212.866,146.749 L210.346,146.749 L207.595,142.549 L207.469,142.549 L204.319,142.549 L204.319,146.749 L202.219,146.749 L202.219,132.049 L207.469,132.049 Q209.632,132.049 211.176,133.582 Q212.719,135.115 212.719,137.299 Q212.719,138.832 211.911,140.103 Q211.102,141.373 209.758,142.024 z M204.319,134.149 L204.319,140.449 L207.469,140.449 Q208.771,140.449 209.695,139.525 Q210.619,138.601 210.619,137.299 Q210.619,135.997 209.695,135.073 Q208.771,134.149 207.469,134.149 z M226.542,132.049 L226.542,146.749 L224.442,146.749 L224.442,132.049 z M237.362,132.049 L249.962,132.049 L249.962,134.149 L244.712,134.149 L244.712,146.749 L242.612,146.749 L242.612,134.149 L237.362,134.149 z M269.497,132.049 L271.975,132.049 L266.053,141.478 L266.053,146.749 L263.953,146.749 L263.953,141.478 L258.052,132.049 L260.53,132.049 L265.003,139.189 z");
  //charity.attr("fill", "#ffffff");

});
