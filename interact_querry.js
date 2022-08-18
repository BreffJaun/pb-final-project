// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ==================================

// JS DATA IMPORTS
import yoshi from "./index.js";
import printMenu from "./ui3_footer.js";

// ===============================

const interact = () =>{
    printMenu();
    const interaction = prompt("     Type 1 - 9 for Interaction  ")             
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

export default interact;