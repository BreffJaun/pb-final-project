const printHeadLine = () => {
    return`
                                    ●-=========xXx=========-●
==================================-●  " t a m a Y O S H I "  ●-==================================
                                    ●-=========xXx=========-●
`
};


const printHappyness = ( happy ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= happy/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `          Food: ${print}      ●-=======xXx=======-●`
};


const printActivity = ( activity ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= activity/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `        Drinks: ${print}      |    H E A L T H    |`
};


const printThurst = ( thurst, health ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= thurst/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `          Mood: ${print}      |    ${health} von 100     |`
};


const printHunger = (hunger) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= hunger/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `        Hunger: ${print}      ●-=======xXx=======-●\n`
};






function printStatus ( happyness, activity, thurst, hunger, health ) {
    console.log(printHeadLine());
    console.log(printHappyness( happyness));
    console.log(printActivity( activity ));
    console.log(printThurst( thurst, health ));
    console.log(printHunger( hunger ));
}

printStatus (10, 40, 80, 90, 50);




export default printStatus; 