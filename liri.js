// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
 
var keys = require("./key.js").twitterKeys;

// var require = require("require");

var request = require("request")
var twitter = require("twitter");
var spotify = require("spotify");

// my-tweets
// node liri.js my-tweets
// This will show your last 20 tweets and when they were created at in your terminal/bash window.

var client = new twitter({
  consumer_key: keys.consumer_key,
  consumer_secret: keys.consumer_secret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys.access_token_secret
});

client.get('tweet_count: 20', function(error, tweets, response) {
  if(error) throw error;
  console.log(tweet_count);  // The favorites. 
  console.log(response);  // Raw response object. 
});


// spotify-this-song
// node liri.js spotify-this-song '<song name here>'
// This will show the following information about the song in your terminal/bash window
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// if no song is provided then your program will default to
// "The Sign" by Ace of Base

var nodeArgs = process.argv;

var songName = ""

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    songName = songName + "+" + nodeArgs[i];

  }

  else {

    songName += nodeArgs[i];

  }
}


spotify.search({ artist: "artist", query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    console.log(JSON.parse(data).type)  
});


// movie-this
// node liri.js movie-this '<movie name here>'
// This will output the following information to your terminal/bash window:
//    * Title of the movie.
//    * Year the movie came out.
//    * IMDB Rating of the movie.
//    * Country where the movie was produced.
//    * Language of the movie.
//    * Plot of the movie.
//    * Actors in the movie.
//    * Rotten Tomatoes Rating.
//    * Rotten Tomatoes URL.
// If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

var nodeArgs = process.argv;

var movieName = "";


for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}



var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";

request(queryUrl, function(error, response, body) {

  // If the request is successful
  if (!error && response.statusCode === 200) {

  	 console.log("Title: " + JSON.parse(body).Title + "\nRelease Year: " + JSON.parse(body).Year + "\nIMDB Rating: " + 
  	 	JSON.parse(body).imdbRating + "\nCountry Movie Produced: " + JSON.parse(body).Country + "\nLanguage: " + 
  	 	JSON.parse(body).Language + "\nPlot: " + JSON.parse(body).Plot + "\nActors: " + JSON.parse(body).Actors);
  }
});

// do-what-it-says
// node liri.js do-what-it-says
// Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.





// BONUS

// In addition to logging the data to your terminal/bash window, output the data to a .txt file called log.txt.
// Make sure you append each command you run to the log.txt file.
// Do not overwrite your file each time you run a command.
