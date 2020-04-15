const evaluateLearnerActivity = require('./challenge');

const test1 = [1,1,0,1,0,1,0,0,0,0,0]; 
const test2 = [1,1,0,0,0,0,1,1,1,1,1,1,0,0,0];
const test3 = [1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1];
const status1 = [0,0,0,0,0,0,0]; // Slow starter
const status2 = [0,0,0,0,0,0,1]; // Slow starter
const status3 = [0,0,0,0,0,1,1]; // Slow starter
const status4 = [0,0,0,0,1,1,1]; // Getting there 
const status5 = [0,0,0,1,1,1,1]; // Getting there
const status6 = [0,0,1,1,1,1,1]; // Super user
const status7 = [0,1,1,1,1,1,1]; // Super user
const status8 = [1,1,1,1,1,1,1]; // Super user

// Do not modify!!!!
test('test number of days that the user completed a lesson', () => {
    
    expect(evaluateLearnerActivity(test1)[0]).toEqual(4);
    expect(evaluateLearnerActivity(test2)[0]).toEqual(8);
    expect(evaluateLearnerActivity(test3)[0]).toEqual(12);
})

test('test longest streak', () => {
    expect(evaluateLearnerActivity(test1)[1]).toEqual(2);
    expect(evaluateLearnerActivity(test2)[1]).toEqual(6);
    expect(evaluateLearnerActivity(test3)[1]).toEqual(4);
})

test('test user status', () => {
    expect(evaluateLearnerActivity(test1)[2]).toEqual('Slow starter');
    expect(evaluateLearnerActivity(test2)[2]).toEqual('Getting there');
    expect(evaluateLearnerActivity(test3)[2]).toEqual('Super user');

    // testing all possibilities
    expect(evaluateLearnerActivity(status1)[2]).toEqual('Slow starter');
    expect(evaluateLearnerActivity(status2)[2]).toEqual('Slow starter');
    expect(evaluateLearnerActivity(status3)[2]).toEqual('Slow starter');
    expect(evaluateLearnerActivity(status4)[2]).toEqual('Getting there');
    expect(evaluateLearnerActivity(status5)[2]).toEqual('Getting there');
    expect(evaluateLearnerActivity(status6)[2]).toEqual('Super user');
    expect(evaluateLearnerActivity(status7)[2]).toEqual('Super user');
    expect(evaluateLearnerActivity(status8)[2]).toEqual('Super user');

})

