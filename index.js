// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ==================================

// JS DATA IMPORTS
import printStatus from './ui1_header.js';
import printMenu from './ui3_footer.js';
import printCat from './ui2_body.js';
import printMode from './ui0_mode.js';
import printMinusLine from './ui_minusLine.js';
import needs_terminal_warnings from './ui_determine_warnings.js';
import break_The_Interval from './break_commands.js';
import interact from './interact_querry.js';

// ==================================================

let time = 0;
// let services = 0;

const yoshi = {
    name: 'Yoshi',
    food: 100,
    drink: 100,
    mood: 100,
    health: 100,
    services: 0,
    mode: "",

    // INTERACTIONS
    // FOOD
    feedTuna() {
        if (this.food < 71){ 
        this.food += 30
        this.mood -= 25
        console.log("that makes me full, but not satisfied");
        this.services++
        }else {
            this.food = 100;
            this.services++
        }
    },
    feedCatfood() {
        if (this.food < 81){
        this.food += 20
        this.drink -= 25
        console.log("are you Kidding me?");
        this.services++
        }else{
            this.food = 100;
            this.services++
        }
    },
    feedLasagne() {
        if (this.food < 91){
        this.food += 10
        this.health -= 30
        console.log("let's do the Garfield way, you may kiss the paw now");
        this.services++
        }else {
            this.food = 100;
            this.services++
        }
    },

    // DRINK
    drinkWater() {
        if (this.drink < 71){
        this.drink += 30
        this.mood -= 25
        console.log("Go away with the cheap booze.....but thanks loyal human");
        this.services++
    }else {
        this.drink = 100;
        this.services++
    }
    },
    drinkMilk() {
        if(this.drink < 81){
        this.drink += 20
        this.mood -= 20
        console.log("uhh mewow");
        this.services++
        }else {
            this.drink = 100;
            this.services++
    }
    },
    drinkChampagne() {
        if(this.drink < 91){
        this.drink += 10
        this.health -= 30
        console.log("just a little dropplet for my royal paw");
        this.services++
        }else {
            this.drink = 100;
            this.services++
    }
    },

    // MOOD
    strokeBelly() {
        if(this.mood < 71){
        this.mood += 30
        this.food -= 25
        console.log("purr purr....purr it's better now");
        this.services++
        }else {
            this.mood = 100;
            this.services++
        }
    },
    dance() {
        if(this.mood < 81){
        this.mood += 20
        this.drink -= 10
        console.log("dance little monkey...dance!");
        this.services++
        }else {
            this.mood = 100;
            this.services++
        }
    },
    turnOnTv() {
        if(this.mood < 81){
        this.mood += 20
        this.health -= 30
        console.log("Finally I can continue watching 'How to sell drugs online (fast)'. Do not disturb me");
        this.services++
        }else {
            this.mood = 100;
            this.services++
    }
    },
    serv(){
        if( this.services === 0 ){
            return "000"
        }
        if( this.services.toString().length === 1 ){
            return "00" + this.services
        }
        if( this.services.toString().length === 2 ){
            return "0" + this.services
        }
        if( this.services.toString().length === 3 ){
            return this.services
        }
    },
    lvl(){
        if (this.mode.length === 7){
            return this.mode
        }
        if( this.mode.length === 6 ){
            return this.mode + " "
        }        
        if( this.mode.length === 5 ){
            return this.mode + "  "
        }
    }
};

let countdownForNeeds = () => {
    // SET TIME (TIME PER UNIT) HIGHER
    if (catchTheNumArr.length > 0 ) {
        time += (Object.values(difficulty[catchTheNumArr]) / 1000); 
    } else if (catchTheNumArr.length > 0) {
        time += (Object.values(difficulty[catchTheNumArr]) / 1000);
    } else if (catchTheNumArr.length > 0) {
        time += (Object.values(difficulty[catchTheNumArr]) / 1000);
    };

    
    // to clear the console on every execution
    console.clear();
    let food = yoshi.food 
    let drink = yoshi.drink
    let mood = yoshi.mood   
    let health = yoshi.health  

    yoshi.food -= 1;
    yoshi.drink -= 3;    
    yoshi.mood -= 2;

    yoshi.health = parseInt(((yoshi.food + yoshi.drink + yoshi.mood) / 3).toFixed()) 

    // print the currant status of needs in the console  
    console.log();       
    printStatus ( yoshi.food, yoshi.drink, yoshi.mood, yoshi.health ); 
    console.log(printCat(yoshi))

    // INTERACTION 
    const interact = () =>{
        console.log(printMenu ())
        const interaction = prompt("      Type 1 - 9 for Interaction  ")             
            if (interaction === "7"){                
                yoshi.feedTuna()                   
            }if (interaction === "4"){                
                yoshi.feedCatfood()                   
            }if (interaction === "1"){                
                yoshi.feedLasagne()                   
            }if (interaction === "8"){                
                yoshi.drinkWater()                   
            }if (interaction === "5"){                
                yoshi.drinkMilk()                   
            }if (interaction === "2"){                
                yoshi.drinkChampagne()                   
            }if (interaction === "9"){                
                yoshi.strokeBelly() 
            }if (interaction === "6"){                
                yoshi.dance()                   
            }if (interaction === "3"){                
                yoshi.turnOnTv()                   
        }
    }

    // INTERACTION BREAKPOINT 

    if( health < 80 && health > 75 ){
        interact();
    }  
    if( health < 55 && health > 50 ){
        interact();
    }
    if( health < 25 && health > 15 ){
        interact();
    }

    console.log(printCat(yoshi));


    // MENU //  
    console.log(printMenu());
    // BREAK COMMAND //
    break_The_Interval(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);

    // PRINT THE WARNINGS OF THE 4 NEEDS //
    needs_terminal_warnings(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
    // INTERACTION BRAKEPOINT
    if( health < 80 && health > 75 ){
        interact(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
    }  
    if( health < 55 && health > 50 ){
        interact(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
    }
    if( health < 25 && health > 15 ){
        interact(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
    }
    console.log(yoshi);

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

yoshi.mode = Object.keys(difficulty[catchTheNumArr]).join("");

export default yoshi;