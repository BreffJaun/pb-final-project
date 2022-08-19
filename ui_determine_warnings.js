// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ==================================

import yoshi from "./index.js"


// yoshi.food, yoshi.drink, yoshi.mood, yoshi.health
const needs_terminal_warnings = () => {

// .....console.log('===============================================================================================')


    // E V E R Y T H I N G   I S   F I N E     
    if ( yoshi.mood <= 0 || yoshi.food <= 0 || yoshi.drink <= 0 || yoshi.health <= 0 ) {
        return  console.log(), 
                console.log(), 
                console.log(), 
                console.log()
    }


    // H E A L T H
    if (yoshi.health <= 75 && yoshi.health > 65) {
        console.log(chalk.bold('                    I need a curd mask...with cucumber slices for my eyes!                     '));
    } else if (yoshi.health <= 50 && yoshi.health > 40) {
        console.log(chalk.bold('                                    I need a spa right away                                    '));
    } else if (yoshi.health <= 25 && yoshi.health > 0) {
        console.log(chalk.bold('                                  I feel dizzy....catch me up                                  '));
    } else {
        console.log();
    };


    // F O O D 
    if (yoshi.food <= 80 && yoshi.food > 70) {
        console.log(chalk.bold('                                            Feed me!                                           '));
    } else if (yoshi.food <= 55 && yoshi.food > 45) {
        console.log(chalk.bold('                                   I am bored...  Just sayin                                   '));
    } else if (yoshi.food <= 35 && yoshi.food > 0) {
        console.log(chalk.bold('                            I can see my paws! FEED ME!...  NOW!...                            '));
    } else {
        console.log();
    }


    // D R I N K
    if (yoshi.drink <= 70 && yoshi.drink > 60) {
        console.log(chalk.bold('                                  Give me something to drink                                   '));
    } else if (yoshi.drink <= 45 && yoshi.drink > 35) {
        console.log(chalk.bold('                          My delicate royal lips are a little bit dry                          '));
    } else if (yoshi.drink <= 20 && yoshi.drink > 0) {
        console.log(chalk.bold('                                 I dehydrate... GIMME a drink!                                 '));
    } else {
        console.log()
    };


    // M O O D 
    if (yoshi.mood <= 90 && yoshi.mood > 80) {
        console.log(chalk.bold('                                So boring!... Entertain me!...                                 '));
    } else if (yoshi.mood <= 60 && yoshi.mood > 50) {
        console.log(chalk.bold('                                Hellohooo!... I am starving!                                   '));
    } else if (yoshi.mood <= 30 && yoshi.mood > 0) {
        console.log(chalk.bold(`                                Where is the ${yoshi.lvl()}?                                   `));
    } else {
        console.log();
    }
};

export default needs_terminal_warnings;