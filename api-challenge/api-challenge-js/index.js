// We want to get lists of movies! Use the URL below to do 2 API calls, with different parameters,
// and follow the instructions below on what the output should look like.
//
// Feel free to use any other HTTP request library than the suggested in the challenges.
//
// URL: https://jsonmock.hackerrank.com/api/movies/search/?Title=_SEARCHTERM_
//
// (Hint replace the _SEARCHTERM_ text in the url)

const fetch = require("node-fetch");

// i wasn't sure about the instructions for the search terms
// it didn't specify if there were supposed to be input parameters to the script
// so i just hard coded the ones from the example
const firstTitle = "Deathly";
const secondTitle = "Goblet";

// make first api call
const firstResult = fetch(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${firstTitle}`
)
    .then(res => res.json())
    .then(json => {
        return {
            [firstTitle]: formatResults(json.data)
        };
    });

// make second api call
const secondResult = fetch(
    `https://jsonmock.hackerrank.com/api/movies/search/?Title=${secondTitle}`
)
    .then(res => res.json())
    .then(json => {
        return {
            [secondTitle]: formatResults(json.data)
        };
    });

// format the result of API calls
// this returns an array of dictionaries with the required format
function formatResults(data) {
    return data.map(movie => {
        return {
            title: `${movie.Title} - ${movie.Year}`,
            imdbID: movie.imdbID
        };
    });
}

Promise.all([firstResult, secondResult]).then(results => {
    console.log(JSON.stringify({ ...results[0], ...results[1] }));
});
