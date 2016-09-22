/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      // Tell jQuery what kind of content you expect the server to send and it will parse it for you
      dataType: 'json',
      success: function ( newTweetArray ) {
        // console.log( "Success on GET; Tweet Array length:", newTweetArray.length );
        TweetToHTML.renderTweets( newTweetArray );

        registerHoverFns();
        registerTweetSubmissionFn();
        registerTypingFn();
      }
    });
  }

  loadTweets();

});

var TweetToHTML = {

  getElapsedTimeFromUTC: function( epochDate ){
    var postedDate = new Date( epochDate );
    var currentDate = new Date();
    var msOfTimeSincePost = currentDate - postedDate;
    var sOfTimeSincePost = msOfTimeSincePost/1000;



    if( sOfTimeSincePost > 60 ){
      var mOfTimeSincePost = sOfTimeSincePost/60;

      if( mOfTimeSincePost > 60 ){
        var hOfTimeSincePost = mOfTimeSincePost/60;

        if( hOfTimeSincePost > 24 ){
          var dOfTimeSincePost = hOfTimeSincePost/24;
          return String( Math.round( dOfTimeSincePost ) ) + ' days ago';
        }
        else {
          return String( Math.round( hOfTimeSincePost ) ) + ' hours ago';
        }
      }
      else {
        return String( Math.round( mOfTimeSincePost ) ) + ' minutes ago';
      }
    }
    else {
      return String( Math.round( sOfTimeSincePost ) ) + ' seconds ago';
    }
  },

  createTweetElement: function ( tweetObject ){
    var $tweet = $("<article>").addClass( 'tweet');
    var icons = $('<p>').addClass( 'icons' )
                        .append($('<i>').addClass( "fa fa-flag" ).attr( 'aria-hidden', "true"))
                        .append($('<i>').addClass( "fa fa-retweet").attr( 'aria-hidden', "true"))
                        .append($('<i>').addClass( "fa fa-heart" ).attr( 'aria-hidden', "true" ));

    var header = $( '<header>' )
          .append( '<img src=' + tweetObject.user.avatars.small + '>' )
          .append( '<h3>' + tweetObject.user.name + '</h3>' )
          .append( '<h5>' + tweetObject.user.handle + '</h5>' );

    var footer = $( '<footer>' )
          .append( '<p class="date">' + this.getElapsedTimeFromUTC(tweetObject.created_at) + '</p>' )
          .append( icons );

    $tweet.append( header )
          .append( '<p>' + tweetObject.content.text + '</p>' )
          .append( footer );
          // .append( '</article>' );

    return $tweet;
  },

  renderTweets: function (tweets) {
    // loops through tweets
    for( var i = 0; i < tweets.length; i ++ ){
      // calls createTweetElement for each tweet
      myElement = this.createTweetElement( tweets[i] );
      // takes return value and appends it to the tweets container
      $('#committed-tweets').append( myElement );
    }
  }

}

//module.exports = TweetToHTML;


