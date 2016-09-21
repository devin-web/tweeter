//is the same as $(document).ready( function {...});
//$(function() {
function registerTweetSubissionFn() {
  var $button = $('#submitNewTweet');
  $button.on('submit', function (event) {

    event.preventDefault();
    const theForm = $(this);

    console.log('Submit button clicked, performing ajax call...');
    $.ajax({
      url: theForm.attr('action'),
      method: theForm.attr('method'),
      data: theForm.serialize(),
      dataType: 'json',
      success: function ( newTweet ) {
        console.log( 'Success!' );
        console.log('Success: ', newTweet);
        // $button.replaceWith(morePostsHtml);
      }
    });
  });
}
