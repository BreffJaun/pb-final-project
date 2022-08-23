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
//                 ('===============================================================================================')
        console.log('                              >>   Y O U   A R E   F I R E D   <<                              ');
    }
    if (yoshi.mood <= 0) {        
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health)
        console.log(printCat(yoshi));
        printMenu();
//                 ('===============================================================================================')
        console.log('                              >>   Y O U   A R E   F I R E D   <<                              ');
    }
    if (yoshi.food <= 0) {     
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
//                 ('===============================================================================================')
        console.log('                              >>   Y O U   A R E   F I R E D   <<                              ');
    }
    if (yoshi.drink === 0 || yoshi.drink < 0) {        
        clearInterval(countdownMain);
        console.clear();
        printStatus(yoshi.food, yoshi.drink, yoshi.mood, yoshi.health);
        console.log(printCat(yoshi));
        printMenu();
//                 ('===============================================================================================')
        console.log('                              >>   Y O U   A R E   F I R E D   <<                              ');
    }
};

export default break_The_Interval;