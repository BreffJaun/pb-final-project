// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ==================================

// JS DATA IMPORTS
import yoshi from "./index.js";
import printMenu from "./design/ui_menu.js";

// ===============================

const interact = () =>{   
    const interaction = prompt("                        C H O O S E   Y O U R   S E R V I C E >>     ")             
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