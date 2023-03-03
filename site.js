/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/


const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
          // This holds your movies.json data.
          movies: [],
          /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
          title: "IMDB + Isabel's Top 8 Movies",
          owner: "Isabel",
          github: "https://github.com/IsabelJAR/NJIT-3",
        };
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            //function to convert the array to USA date order
            getMonthText(dateArray){
                  switch (dateArray[1]) {
                    case 1:
                      monthName = "January";
                      break;
                    case 2:
                      monthName = "February";
                      break;
                    case 3:
                      monthName = "March";
                      break;
                    case 4:
                      monthName = "April";
                      break;
                    case 5:
                      monthName = "May";
                      break;
                    case 6:
                      monthName = "June";
                      break;
                    case 7:
                      monthName = "July";
                      break;
                    case 8:
                      monthName = "August";
                      break;
                    case 9:
                      monthName = "September";
                      break;
                    case 10:
                      monthName = "October";
                      break;
                    case 11:
                      monthName = "November";
                      break;
                    case 12:
                      monthName = "December";
                      break;
                  }
                  return monthName + ' ' + dateArray[2] + ', ' + dateArray[0]; //will load ex: December 12, 1987 into page
            },
            // function to cycle through movie posters
            posterClick(index){
              //if you are on the last poster
              if (this.movies[index].posterindex >= this.movies[index].posters.length - 1) {
                //go back to the first poster
                this.movies[index].posterindex = 0;
              } else {
                //go to next poster then next poster
                this.movies[index].posterindex++;
              }
            },
            // function to convert minutes into hours with a remainder
            timeText(minutes){
              var h = Math.floor(minutes / 60); // min/60 and then round to nearest whole number
              var min = minutes % 60; // the remainder is equal to the minutes
              return h + "h " + min + "m"; // will load #h #m into the page
            }
      }
})

vue_app.mount("#vue_app")
