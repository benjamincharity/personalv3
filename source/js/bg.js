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
    '11.gif',
    '12.gif',
    '13.gif',
    '14.gif',
    '15.gif',
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
    '26.gif'
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
    //'26.gif'
  ];

        var d = new Date(),
      seconds = d.getSeconds();

   var $cover = $('.cover'),
  $coverImage = $cover.find('img');

   //
  // if it's a touch device, only load the mobile image array with lighter images
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
});
