# Neos Code Challenges

## INSTRUCTIONS

There are two challenge folders, named `learner-activitiy-challenge` and `api-challenge`. Each one of these contains the files for different languages (Java, Python, JavaScript or Ruby).

Please complete the challenges in only ONE of the languages (note that it doesn't have to be the same for both challenges).

When you are ready to submit, please commit the files and run the command `git push origin master`

There are some language specific instructions for each challenge in the README.md of each language folder.

It should take no longer than a total of _2 hours_ to complete both challenges, so please ensure that you have uninterrupted time available for this. Use this timeframe a frame of reference, but submit as soon as you can.

GOOD LUCK!

# Challenge 1

## Learner Activity Challenge

We want to get some learning activity data of our learners!

You will receive an array as an input, containing 1s or 0s, based on whether or not a learner completed a
lesson on that day (1 if they completed a lesson, 0 if not).

### Instructions

Assume that the array can be for any time period, but the learner status is based on a
rolling 7 day period (thus only take into account the last 7 days’ data).

Return an array containing 3 values:

1. number of days that the user completed a lesson
2. longest streak
3. learner status based on the last 7 days

Learner status rules

    <= 2 'Slow starter'
    >2 && <= 4 'Getting there'
    >4 'Super user'

### Example Input

    [1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0]

### Example Output

    [13, 5, 'Super user']

# Challenge 2

## API Challenge

### Instructions

We want to get lists of movies! Use the URL below to do 2 API calls, with different parameters, and follow the instructions below on what the output should look like.

Feel free to use any other HTTP request library than the suggested in the challenges.

URL: https://jsonmock.hackerrank.com/api/movies/search/?Title=_SEARCHTERM_

(Hint replace the _SEARCHTERM_ text in the url)

### Output format

Combine the results of the 2 API calls, and map them into the following JSON structure:

    {
        substrA: [
            { title: title - year, imdbID },
            { title: title - year, imdbID },
            { title: title - year, imdbID },
        ],
        substrB: [
            { title: title - year, imdbID },
            { title: title - year, imdbID },
            { title: title - year, imdbID },
        ]
    }

Print the mapped JSON result to the console

### Example Input

Substring input 1: Deathly

Substring input 2: Goblet

### Example Output

    {
        Deathly: [
            { title: 'Harry Potter and the Deathly Hallows: Part 1 - 2010', imdbID: 65573 },
            { title: 'Harry Potter and the Deathly Hallows: Part 2 - 2011', imdbID: 62234 }
        ],
        Goblet: [
            { title: 'Harry Potter and the Goblet of Fire - 2005', imdbID: 12351 },
            { title: 'Inside 'Harry Potter and the Goblet of Fire' - 2005", imdbID: 34564 }
        ]
    }

# NOTES

If you can't get your code to work correctly, write down in psuedo code the steps you would take in order to get the desired output.
