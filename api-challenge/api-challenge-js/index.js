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
