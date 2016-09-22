//is the same as $(document).ready( function {...});
//$(function() {

function insertFirstTweet() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    // Tell jQuery what kind of content you expect the server to send and it will parse it for you
    dataType: 'json',
    success: function ( newTweetArray ) {
      // console.log( "Success on GET; Tweet Array length:", newTweetArray.length );
      var myElement = TweetToHTML.createTweetElement( newTweetArray[0] );
    // takes return value and inserts it to the tweets container
      console.log( "Inserting", myElement, "before", $('#committed-tweets:first-child' ));
      // $('#committed-tweets').insertBefore( myElement, $('#committed-tweets:first-child' ));
      myElement.insertBefore( $('#committed-tweets').find( '>:first-child' ) );
    }
  });
}

function validateTweetSubmission( theTextArea ) {

  if( theTextArea.val().length < 1 ) {
    alert( 'You must enter some text to Tweet!' );
    return false;
  }
  else if( theTextArea.val().length > 140 ) {
    alert( 'Tweet is too long!' );
    return false;
  }
  return true;
}

function registerTweetSubmissionFn() {
  var $button = $('#submitNewTweet');
  $button.on('submit', function (event) {

    event.preventDefault();

    const theForm = $(this);

    if ( !validateTweetSubmission( theForm.find('textarea') ) ) {
      return;
    }

    console.log('Submit button clicked, performing ajax call...');
    $.ajax({
      url: theForm.attr('action'),
      method: theForm.attr('method'),
      data: theForm.serialize(),
      dataType: 'json',
      success: function ( data ) {
        console.log( 'Success!' );
        console.log('Success: ', data );
        theForm.find('textarea').val('');
        insertFirstTweet();
      }
    }); //ajax
  }); //on subnmit

  var $composeButton = $( '#composeButton' );
  $composeButton.on('click', function() {
    $( ".new-tweet" ).slideToggle( "slow", function() {
      if( $('.new-tweet textarea:focus').length === 0 )
        $('.new-tweet textarea').focus();
    });
  });
}
