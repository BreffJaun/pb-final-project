// JS DATA IMPORTS
import yoshi from "./index.js";
import countdownMain from './index.js';
import printStatus from "./design/ui_header.js";
import printCat from "./design/ui_body.js";
import printMenu from "./design/ui_menu.js";
import printMinusLine from './ui_minusLine.js';

// =======================================

const break_The_Interval = () => {
    if (yoshi.health === 0 || yoshi.health < 0) {       
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
        console.log('           You dont care enough about my health. YOU ARE FIRED! ! !');
    }
    if (yoshi.mood <= 0) {        
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi));
        printMenu();
        console.log('           You dont care enough about my mood. YOU ARE FIRED! ! !');
    }
    if (yoshi.food <= 0) {     
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
        console.log('           You dont care enough about my food. YOU ARE FIRED! ! !');
    }
    if (yoshi.drink === 0 || yoshi.drink < 0) {        
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
        console.log('           You dont care enough about my DRINK. YOU ARE FIRED ! ! !');
    }
};

export default break_The_Interval;