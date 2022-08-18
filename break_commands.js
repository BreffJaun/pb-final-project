// JS DATA IMPORTS
import yoshi from "./index.js";
import countdownMain from './index.js';
import printStatus from "./ui1_header.js";
import printCat from "./ui2_body.js";
import printMenu from "./ui3_footer.js";
import printMinusLine from './ui_minusLine.js';

// =======================================

const break_The_Interval = () => {
    if (yoshi.health <= 0) {
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('You dont care enough about my health. YOU ARE FIRED! ! !');
    }
    if (yoshi.mood <= 0) {
        console.clear();
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('You dont care enough about my mood. YOU ARE FIRED! ! !');
    }
    if (yoshi.food <= 0) {
        console.clear();
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('You dont care enough about my food. YOU ARE FIRED! ! !');
    }
    if (yoshi.drink <= 0) {
        console.clear();
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('     You dont care enough about my DRINK. YOU ARE FIRED ! ! !');
    }
};

export default break_The_Interval;