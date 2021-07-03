// testimonial js
var $owl = $('#carousel1');
$owl.children().each( function ( index ){
  $(this).attr('data-position', index);
});

$('#carousel1').owlCarousel({
  loop: true,
  center: true,
  margin: 0,
  responsiveClass: true,
  nav: false,
  autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
  responsive: {
    0: {
      items: 1
    },
    680: {
      items: 1
    },
    1200: {
      items: 3
    }
  }
});


$(document).on('click', '.owl-item>div', function(){
  var $speed = 1000;
  $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
});


// preloader js
setTimeout(function(){
  $('.loader_bg').fadeToggle();
}, 1000);


// filterable control
$(document).ready(function(){
  $('.list').click(function(){
    const value = $(this).attr('data-filter');
    if(value == 'all'){
      $('.itemBox').show('1000');
    }
    else{
      $('.itemBox').not('.'+value).hide('1000');
      $('.itemBox').filter('.'+value).show('1000');
    }
  });

  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
});
