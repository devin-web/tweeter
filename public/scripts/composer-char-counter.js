
$(document).ready(function() {

  function updateTextCount( curDomObject ) {
    //var charCount = $('.new-tweet textarea').val().length;
    var curParent = $( curDomObject ).parent();
    var charCount = curParent.find( 'textarea' ).val().length;
    console.log( charCount );
    //$('.counter').text( 140 - charCount );
    var curCounter = curParent.find( '.counter' );
    curCounter.text( 140 - charCount );
    if( charCount > 140 )
    {
      curCounter.css( 'color', 'red' );
    }
    else
    {
      curCounter.css( 'color', 'black' );
    }
  }

  $('.new-tweet textarea').on('focus', function() {
    console.log( this );
    updateTextCount( this );
  });

  $('.new-tweet textarea').on( 'keyup', function() {
    updateTextCount( this );
  });
});
