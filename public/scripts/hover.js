function registerHoverFns(){
  $('#committed-tweets article').on('mouseover', function() {
    $( this ).find( '.icons' ).css('display', 'initial'); //maybe should be inline?
  });

  $('#committed-tweets article').on('mouseout', function() {
    $( this ).find( '.icons' ).css('display', 'none');
  });
}
