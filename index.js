// Prompt and Chalk Integration
import promptSync from 'prompt-sync';
const prompt = promptSync();
import chalk from 'chalk';
// ----------------------------

class TamaYoshi {
    constructor(name = 'Yoshi') {
        this.name = 'Yoshi';
        this.foodLevel = 100;
        this.thirstyLevel = 100;
        this.sickLevel = 100;
        this.boringLevel = 100;
    }
}

