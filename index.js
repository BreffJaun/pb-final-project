// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
import printStatus from './ui1_header.js';
import printMenu from './ui3_footer.js'
import printCat from './ui2_body.js'

let time = 0;
let services = 0;

const yoshi = {    
    name : 'Yoshi',
    food : 100,
    drink : 100,
    mood : 100,
    health : 100,
    feedTuna(){
        this.food += 20
        this.mood += 10
        services++
    },   
    drinkWater(){
        this.drink += 20
        this.mood -= 10
        services++

    },
    turnOnTv(){
        this.mood += 20        
        services++
    }

}

let countdownForNeeds = () => { 
    // to clear the console on every execution
    console.clear();
    let food = yoshi.food 
    let drink = yoshi.drink
    let mood = yoshi.mood   
    let health = yoshi.health  


    yoshi.food -= 1
    yoshi.drink -= 3    
    yoshi.mood -= 2;
    yoshi.health = ((yoshi.food + yoshi.drink + yoshi.mood) / 3).toFixed() 

    // print the currant status of needs in the console  
    console.log();       
    printStatus ( yoshi.food, yoshi.drink, yoshi.mood, yoshi.health ); 
    console.log(printCat(yoshi))

    // INTERACTION 
        const interact = () =>{
           printMenu ();
           const interaction = prompt("Type 1 - 9 for Interaction  ")             
            if (interaction === "1"){                
                yoshi.feedTuna()                   
            }if (interaction === "2"){                
                yoshi.feedCatfood()                   
            }if (interaction === "3"){                
                yoshi.feedLasagne()                   
            }if (interaction === "4"){                
                yoshi.drinkWater()                   
            }if (interaction === "5"){                
                yoshi.drinkMilk()                   
            }if (interaction === "6"){                
                yoshi.drinkChampagne()                   
            }if (interaction === "7"){                
                yoshi.turnOnTv()                   
            }if (interaction === "8"){                
                yoshi.dance()                   
            }if (interaction === "9"){                
                yoshi.strokeBelly()                   
        }
            
    }

    // DETERMINE THE WARNINGS OF THE 4 NEEDS //    IN IF ELSE ABFRAGE ABÄNDERN DAMIT WIR MEHRERE AKTIONEN AUSFÜHREN KÖNNEN FÜR DIE INTERAKTIONEN 
    // HEALTH
    if (health <= 75 && health > 65){
        console.log('     I need a curd mask...with cucumber slices for my eyes!')        
        interact()
    }else if (health <= 50 && health > 40){
    console.log('     I need a spa right away')
    } else if(health <= 25 ){
     console.log('     I feel dizzy....catch me up')
    }else {
        console.log();
    }
    
    // food
    food <= 80 && food > 70 ? console.log('     Feed me!') :
    food <= 55 && food > 45 ? console.log('     I am bored...just a reminder') :
    food <= 35 ? console.log('     I can see my paws after a long time, so TIME TO FEED ME NOW!') : console.log();
    
    // drink
    drink <= 70 && drink > 60 ? console.log('     Give me something to drink') :
    drink <= 45 && drink > 35 ? console.log('     My delicate royal lips are a little too dry') :
    drink <= 20 ? console.log('     I dehydrate....I already see flying mices') : console.log();
    
    // MOOD
    mood <= 90 && mood > 80 ? console.log('     Entertain me!') :
    mood <= 60 && mood > 50 ? console.log('     Hello...i am hungry!') : 
    mood <= 30 ? console.log('     Where is the jester?') : console.log();

    // BREAK COMMAND => only works with if-else, not with ternary!
    if (health <= 0) {
        console.clear();
        console.log('You dont care enough about my health. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi))       
    } else if (mood <= 0) {
        console.clear();
        console.log('You dont care enough about my mood. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi))        
    } else if (food <= 0) {
        console.clear();
        console.log('You dont care enough about my food. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi))        
    } else if (drink <= 0) {
        console.clear();
        console.log('You dont care enough about my drink. YOU ARE FIRED! ! !');
        clearInterval(countdownMain);
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi))        
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