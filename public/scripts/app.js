/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
var fauxData = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function() {
  TweetToHTML.renderTweets( fauxData );
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


