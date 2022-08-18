// JS DATA IMPORTS
import yoshi from "./index.js";
import countdownMain from './index.js';
import printStatus from "./ui1_header.js";
import printCat from "./ui2_body.js";
import printMenu from "./ui3_footer.js";
import printMinusLine from './ui_layout.js';

// =======================================

const break_The_Interval = () => {
    if (yoshi.health <= 0) {
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('     You dont care enough about my HEALTH. YOU ARE FIRED! ! !');
    } else if (yoshi.mood <= 0) {
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('     You dont care enough about my MOOD. YOU ARE FIRED! ! !');
    } else if (yoshi.food <= 0) {
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('     You dont care enough about my FOOD. YOU ARE FIRED! ! !');
    } else if (yoshi.drink <= 0) {
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        console.log(printMenu());
        console.log('     You dont care enough about my DRINK. YOU ARE FIRED! ! !');
    }
};

export default break_The_Interval;