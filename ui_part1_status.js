const printLine = () => {
    return `\n===============================================================================================\n`
};


const printHappyness = ( happy, health ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= happy/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Happyness:  ${print}     |     ${health} / 100  `
};


const printActivity = (activ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= activ/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Activity:   ${print}     |    ----V----`
};


const printHealth = (health) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= health/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Health:     ${print}     |     HEALTH \n`
};




function printStatus ( happyness, activity, health ) {
    console.log(printLine());
    console.log(printHappyness( happyness, health));
    console.log(printActivity( activity ));
    console.log(printHealth( health ));
}

printStatus (52, 19, 86);