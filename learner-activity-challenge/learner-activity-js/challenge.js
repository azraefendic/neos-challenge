// ## Learner Activity Challenge
// We want to get some learning activity data of our learners!
//
// You will receive an array as an input, containing 1s or 0s, based on whether or not a learner completed a
// lesson on that day (1 if they completed a lesson, 0 if not).
//
// ### Instructions
// Assume that the array can be for any time period, but the learner status is based on a
// rolling 7 day period (thus only take into account the last 7 days’ data).
//
// Return an array containing 3 values:
//
//   1. number of days that the user completed a lesson
//   2. longest streak
//   3. learner status based on the last 7 days

function evaluateLearnerActivity(activityArray) {
    let activitySummary = [];

    // calculate the number of days for which the user completed a lesson
    let completedLessons = 0;
    activityArray.forEach(day => {
        if (day === 1) {
            completedLessons++;
        }
    });
    activitySummary.push(completedLessons);

    // calculate the user's longest streak
    let longestStreak = 0;
    let currentStreak = 0;
    activityArray.map(day => {
        if (day === 1) {
            currentStreak++;
        } else {
            // current streak finished, compare with longest streak
            if (currentStreak > longestStreak) {
                // new longest streak found!
                longestStreak = currentStreak;
            }
            // reset current streak for use in next iterations
            currentStreak = 0;
        }
    });
    activitySummary.push(longestStreak);

    // calculate the user's learning status based on last 7 days
    let learnerStatus;
    let status = 0;
    // create new array containing last 7 days (or less if array's length < 7)
    let lastSevenDays = activityArray.slice(-7);
    lastSevenDays.forEach(day => (status += day));

    if (status <= 2) {
        learnerStatus = "Slow starter";
    } else if (status <= 4) {
        learnerStatus = "Getting there";
    } else if (status > 4) {
        learnerStatus = "Super user";
    }
    activitySummary.push(learnerStatus);

    return activitySummary;
}

// do not remove or change name
module.exports = evaluateLearnerActivity;
