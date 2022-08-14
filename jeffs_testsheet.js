// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
// ----------------------------

// =========================================================
// TIMER TEST AREA //

/* CONVERSION TABLE 
1000 ms     = 1 s
60000 ms    = 60 s = 1 m
100000 ms   = 100 s = 1 m 40 s // => The time span we need for the game
*/

// VARIABLES / FUNCTIONS

function repeatIt2() {
    console.log('Hello again 2');;
}

const repeatIt = () => { console.log('Hello again'); };

// ===================================================================

// ERSTE TESTS MIT setTimeout()
// const test1 = setTimeout(function () { repeatIt() }, 1000);
// const test2 = setTimeout(function () { repeatIt2() }, 3000);
// clearTimeout(test1);
// clearTimeout(test2);

// ===================================================================

// ERSTE TESTS MIT setInterval()
// const test3 = setInterval(function () { repeatIt() }, 1000);
// const test4 = setInterval(function () { repeatIt2() }, 3000);
// clearInterval(test3);
// clearInterval(test4);

// ===================================================================

// ERSTER TEST MIT EINEM COUNTER

let health = 100;
let mood = 100;
let hunger = 100;
let thirst = 100;
let countdownForNeeds = () => { 
    // to clear the console on every execution
    console.clear();
    // each need is decreased by 1 for each execution
    health-- && mood-- && hunger-- && thirst--;
    // print the currant status of needs in the console 
    console.log(`Health: ${health}`);
    console.log(`Mood:   ${mood}`);
    console.log(`Hunger: ${hunger}`);
    console.log(`Thirst: ${thirst}`);

    // DETERMINE THE WARNINGS 
    // HEALTH
    health <= 75 && health > 50 ? console.log('I need a curd mask...with cucumber slices for my eyes!') :
    health <= 50 && health > 25 ? console.log('I need a spa right away') :
    health <= 25 ? console.log('I feel dizzy....catch me up') : '';
    
    // MOOD
    mood <= 90 && mood > 60 ? console.log('Entertain me!') :
    mood <= 60 && mood > 30 ? console.log('Hello...i am hungry!') :
    mood <= 30 ? console.log('Where is the jester?') : '';
    
    // HUNGER
    hunger <= 80 && hunger > 55 ? console.log('Feed me!') :
    hunger <= 55 && hunger > 35 ? console.log('I am bored...just a reminder') :
    hunger <= 35 ? console.log('I can see my paws after a long time, so TIME TO FEED ME NOW!') : '';
    
    // THIRST
    thirst <= 70 && thirst > 45 ? console.log('Give me something to drink') :
    thirst <= 45 && thirst > 20 ? console.log('My delicate royal lips are a little too dry') :
    thirst <= 20 ? console.log('I dehydrate....I already see flying mices') : '';
    
    // BREAK COMMAND => only works with if-else, not with ternary!
    if (health === 0) {
        console.clear();
        console.log('You dont care enough about my health. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
    } else if (mood === 0) {
        console.clear();
        console.log('You dont care enough about my mood. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
    } else if (hunger === 0) {
        console.clear();
        console.log('You dont care enough about my hunger. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
    } else if (thirst === 0) {
        console.clear();
        console.log('You dont care enough about my thirst. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
    }
};
// SET THE DIFFICULTY LEVELS
// DIFFICULTY ARRAY OF OBJECTS
const difficulty = [
    { Footmen: 1000 },   // => Hausdiener
    { Valet: 500 },      // => Kammerdiener
    { Butler: 250 },     // => (Chef-) Diener
];

// DIFFICULTY TERMINAL TEXT
const textForDifficulty = `
Choose your difficulty level!
Type in 1 for Footmen (Easy)
Type in 2 for Valet   (Heavy)
Type in 3 for Butler  (Deadly)
`;

// LET THE USER CHOOSE THE DIFFICULTY LEVEL
const catchTheNumArr = [];
const setDifficulty = () => {
    console.log(textForDifficulty);
    const queryTheDifficulty = prompt(`Choose your difficulty level: `);
    console.log(`You have chosen the ${chalk.bold(Object.keys(difficulty[queryTheDifficulty - 1]))} difficulty. Good Luck, you'll need it!`);
    const catchTheNum = queryTheDifficulty-1;
    catchTheNumArr.push(catchTheNum);
};
setDifficulty();

const countdownMain = setInterval(function () { countdownForNeeds() }, Object.values(difficulty[catchTheNumArr])); 

// const changeTheNeeds = () => {
//     const queryTheDifficulty = prompt(`Choose your difficulty level: `);
//     console.log(`You have chosen the ${chalk.bold(Object.keys(difficulty[queryTheDifficulty - 1]))} difficulty. Good Luck, you'll need it!`);
//     const catchTheNum = queryTheDifficulty-1;
//     catchTheNumArr.push(catchTheNum);
// };
// changeTheNeeds();