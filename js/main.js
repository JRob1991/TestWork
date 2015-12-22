import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

/*
  1) Find the movie that starts closest to the provided date.

  For this exercise, you will be provided an array of movies that all have a release date. You need to create a function
  that accepts a date, and returns the movie that starts closest to the provided date. For example if new Date('12/19/15')
  was passed in, it may return Star Wars: The Force Awakens, because it's release date was on 12/18/2015.

  BONUS: If there is more than one movie on the same date, return the one with a higher rating.
*/

var movies = [{
  name: 'Star Wars: The Force Awakens',
  releaseDate: '12/18/2015',
  rating: 9.8
}, {
  name: 'The Hunger Games: Mockingjay, Part 2',
  releaseDate: '11/20/2015',
  rating: 7.1
}, {
  name: 'Creed',
  releaseDate: '11/25/2015',
  rating: 7.6
}, {
  name: 'In The Heart of the Sea',
  releaseDate: '12/11/2015',
  rating: 5
}, {
  name: 'Sisters',
  releaseDate: '12/18/2015',
  rating: 7.1
}];

console.log(movies);

function findMovieByDate(movies, date) {
  var searchTimestamp = date.getTime;
  var closestMovie = movies[0];


_.each(movies,function(movie){

    var closestMovieTimestampDifference = Math.abs(new Date(closestMovie.releaseDate).getTime() - searchTimestamp);
    var currentMovieTimestampDifference = Math.abs(new Date(movie.releaseDate).getTime() - searchTimestamp);
    if(currentMovieTimestampDifference  < closestMovieTimestampDifference ){
      closestMovie = movie;
    }else if( currentMovieTimestampDifference === closestMovieTimestampDifference ){// case where the movies are both as close to the search date
        if(closestMovie.rating: < movie.rating){
          closestMovie = movie;
        }
    }
});


  return closestMovie;

  console.log (movies)
}

/*
  2) Using the same data source as the above question (movies) write a function that returns the average rating of all
  movies in the array.
*/

function getAvgMovieRating(movies) {
  return _.sum(movies,'rating') / movies.length;

}

/*
  3) Take an array of numbers and a start and end number, and return the numbers from the array that are between the start
  number and the end number. For example if your array of numbers is [5, 9, 3, 1, 6] and you pass in a start number of 5
  and an end number of 9, you would return [5, 9, 6].
*/

function getNumbersBetween(numbers, start, end) {
  // return numbers between start and end
  return _.filter(numbers,function(number){
    return ((number === start) || nunumber === end) || _.inRange(number,start,end));
  });
  
}

console.log('Hello, World');
