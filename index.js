// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import printStatus from './ui1_header.js';
import printMenu from './ui3_footer.js'
import printCatNormal from './ui2_body.js'

let time = 0;
let services = 0;

const yoshi = {    
    name : 'Yoshi',
    food : 100,
    drink : 100,
    mood : 100,
    health : 100
}

let countdownForNeeds = () => { 
    // to clear the console on every execution
    console.clear();
    let food = yoshi.food 
    let drink = yoshi.drink
    let mood = yoshi.mood   
    let health = yoshi.health  

    // each need is decreased for each execution

    yoshi.food -= 1
    yoshi.drink -= 3    
    yoshi.mood -= 2
    yoshi.health = (yoshi.food + yoshi.drink + yoshi.mood) / 3 

    // print the currant status of needs in the console  
    console.log();       
    printStatus ( yoshi.food, yoshi.drink, yoshi.mood, yoshi.health ); 

    console.log(printCat())
    // DETERMINE THE WARNINGS OF THE 4 NEEDS //
    // HEALTH
    health <= 75 && health > 50 ? console.log('     I need a curd mask...with cucumber slices for my eyes!') :
    health <= 50 && health > 25 ? console.log('     I need a spa right away') :
    health <= 25 ? console.log('     I feel dizzy....catch me up') : console.log();
    
    // MOOD
    mood <= 90 && mood > 60 ? console.log('     Entertain me!') :
    mood <= 60 && mood > 30 ? console.log('     Hello...i am hungry!') : 
    mood <= 30 ? console.log('     Where is the jester?') : console.log();
    
    // food
    food <= 80 && food > 55 ? console.log('     Feed me!') :
    food <= 55 && food > 35 ? console.log('     I am bored...just a reminder') :
    food <= 35 ? console.log('     I can see my paws after a long time, so TIME TO FEED ME NOW!') : console.log();
    
    // drink
    drink <= 70 && drink > 45 ? console.log('     Give me something to drink') :
    drink <= 45 && drink > 20 ? console.log('     My delicate royal lips are a little too dry') :
    drink <= 20 ? console.log('     I dehydrate....I already see flying mices') : console.log();

    // BREAK COMMAND => only works with if-else, not with ternary!
    if (health <= 0) {
        console.clear();
        console.log('You dont care enough about my health. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        // console.log(printCatHate())
    } else if (mood <= 0) {
        console.clear();
        console.log('You dont care enough about my mood. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        // console.log(printCatHate())
    } else if (food <= 0) {
        console.clear();
        console.log('You dont care enough about my food. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        // console.log(printCatHate())
    } else if (drink <= 0) {
        console.clear();
        console.log('You dont care enough about my drink. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        // console.log(printCatHate())
    }    
    printMenu ();
};

const difficulty = [
    { Footmen: 4000 },   // => Hausdiener
    { Valet: 3000 },     // => Kammerdiener
    { Butler: 500 },     // => (Chef-) Diener
];

// DIFFICULTY TERMINAL TEXT
const textForDifficulty = `
Choose your difficulty level!
Type 1 for Footmen (Easy)
Type 2 for Valet   (Heavy)
Type 3 for Butler  (Deadly)
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
let modus = Object.keys(difficulty[catchTheNumArr]).join("");

export default yoshi 