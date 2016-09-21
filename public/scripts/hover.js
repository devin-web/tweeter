$(document).ready(function() {
  $('.committed-tweets article').on('mouseover', function() {
    console.log("Hover");
    $( this ).find( '.icons' ).css('display', 'initial'); //maybe should be inline?
  });

  $('.committed-tweets article').on('mouseout', function() {
    $( this ).find( '.icons' ).css('display', 'none');
    console.log("no Hover");
  });
});