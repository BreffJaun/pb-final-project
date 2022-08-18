// JS DATA IMPORTS
import yoshi from "./index.js"
import printMinusLine from './ui_minusLine.js';

// ===============================

// yoshi.food, yoshi.drink, yoshi.mood, yoshi.health
const needs_terminal_warnings = () => {
    // HEALTH
    if (yoshi.health <= 75 && yoshi.health > 65) {
        console.log('     I need a curd mask...with cucumber slices for my eyes!');
    } else if (yoshi.health <= 50 && yoshi.health > 40) {
        console.log('     I need a spa right away');
    } else if (yoshi.health <= 25) {
        console.log('     I feel dizzy....catch me up')
    } else {
        console.log();
    };

    // FOOD
    if (yoshi.food <= 80 && yoshi.food > 70) {
        console.log('     Feed me!');
    } else if (yoshi.food <= 55 && yoshi.food > 45) {
        console.log('     I am bored...just a reminder');
    } else if (yoshi.food <= 35) {
        console.log('     I can see my paws after a long time, so TIME TO FEED ME NOW!');
    } else {
        console.log();
    }

    // DRINK
    if (yoshi.drink <= 70 && yoshi.drink > 60) {
        console.log('     Give me something to drink');
    } else if (yoshi.drink <= 45 && yoshi.drink > 35) {
        console.log('     My delicate royal lips are a little too dry');
    } else if (yoshi.drink <= 20) {
        console.log('     I dehydrate....I already see flying mices');
    } else {
        console.log()
    };

    // MOOD
    if (yoshi.mood <= 90 && yoshi.mood > 80) {
        console.log('     Entertain me!');
    } else if (yoshi.mood <= 60 && yoshi.mood > 50) {
        console.log('     Hello...i am hungry!');
    } else if (yoshi.mood <= 30) {
        console.log('     Where is the jester?');
    } else {
        console.log();
    }
};

export default needs_terminal_warnings;