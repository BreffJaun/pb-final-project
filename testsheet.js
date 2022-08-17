// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync({eot: true});
import chalk from 'chalk';
// =========================================================

/* CONVERSION TABLE 
1000 ms     = 1 s
60000 ms    = 60 s = 1 m
100000 ms   = 100 s = 1 m 40 s // => The time span we need for the game
*/

// ===================================================================

// TIMER //

// CREATION OF THE 4 NEEDS AND THEIR BASIC VALUES
let health = 100;
let mood = 100;
let hunger = 100;
let thirst = 100;

// HEADER
const printHeadLine = 
`
                                    ●-=========xXx=========-●
==================================-●  " t a m a Y O S H I "  ●-==================================
                                    ●-=========xXx=========-●
`
;


// NEEDS INTERFACE
const printLine = () => {
    return `\n===============================================================================================\n`
};

const printMood = ( mood, health ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= mood/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Mood:     ${print}      ●-=======xXx=======-●`
};


const printHunger = (hunger) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= hunger/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Hunger:   ${print}      |    H E A L T H    |`
};

const printThirst = (thirst) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= thirst/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Thirst:   ${print}      |    ${health} von 100     |`
};

const printHealth = (health) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= thirst/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Health:   ${print}      ●-=======xXx=======-●\n`
};

function printStatus ( mood, hunger, thirst, health ) {
    console.log(printLine());
    console.log(printMood( mood, health));
    console.log(printHunger( hunger ));
    console.log(printThirst(thirst));
    console.log(printHealth( health ));
};

// CAT PRINT OUTPUT FIELD
const catPrintOutputField = `
----------------------------------------------------------------------------------------------














-----------------------------------------------------------------------------------------------
`;

// USER MENU INTERFACE
const menuInterface = `
FOOD                   DRINKS                 ACTIVITIES             HAPPYNESS
-----------------      -----------------      -----------------      -----------------
{ F1 } Tuna            { F4 } Water           { F7 } Safari          { F10 } xxxxx
{ F2 } Cat Food        { F5 } Milk            { F8 } Couch Surfing   { F11 } xxxxx
{ F3 } Lasagne         { F6 } Champagne       { F9 } Massage         { F12 } xxxxx
`;

let countdownForNeeds = () => { 
    // to clear the console on every execution
    console.clear();
    
    // each need is decreased by 1 for each execution
    health-- && mood-- && hunger-- && thirst--;

    // print the currant status of needs in the console 
    console.log();
    console.log(printHeadLine);
    printStatus (mood, hunger, health, thirst);
    
    // DETERMINE THE WARNINGS OF THE 4 NEEDS //
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
    console.log(catPrintOutputField);
    console.log(menuInterface);
};
// SET THE DIFFICULTY LEVELS //
// DIFFICULTY ARRAY OF OBJECTS
const difficulty = [
    { Footmen: 2000 },   // => Hausdiener
    { Valet: 1000 },     // => Kammerdiener
    { Butler: 500 },     // => (Chef-) Diener
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

