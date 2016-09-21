
// $(document).ready(function() {

function updateTextCount( curDomObject ) {
  var curParent = $( curDomObject ).parent();
  var charCount = curParent.find( 'textarea' ).val().length;
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

function registerTypingFn() {
  $('.new-tweet textarea').on('focus keyup', function() {
    updateTextCount( this );
  });
}
// });
