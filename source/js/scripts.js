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

  $('html').css({'background-image': 'url(/i/bg/' + images[Math.floor(Math.random() * images.length)] + ')'});

});
