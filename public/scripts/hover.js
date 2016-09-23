function registerHoverFns(){
  $('#committed-tweets').on('mouseover', 'article', function() {
    $( this ).find( '.icons' ).css('display', 'initial');
  });

  $('#committed-tweets').on('mouseout', 'article', function() {
    $( this ).find( '.icons' ).css('display', 'none');
  });
}
