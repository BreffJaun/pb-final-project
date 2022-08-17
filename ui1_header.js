const printHeadLine = () => {
    return`
                                    ●-=========xXx=========-●
==================================-●  " t a m a Y O S H I "  ●-==================================
                                    ●-=========xXx=========-●
                                                                    ●-========xXx========-●`
};


const printFood = ( food ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= food/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `      Food:   ${print}    |  -= H E A L T H =-  |`
};



const printDrinks = ( drinks, health ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= drinks/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `    Drinks:   ${print}    |         ${health} %        |`
};



const printMood = ( mood ) => {
    let print = "";
    for (let i = 0; i < 50; i++) {
        if (i <= mood/2) {
            print = print.concat(`●`)
        } else {
            print = print + `.`
        };
    }
    return `      Mood:   ${print}    ●-========xXx========-●`
};



function printStatus ( food, drinks, mood, health ) {
    console.log(printHeadLine());
    console.log(printFood( food ));
    console.log(printDrinks( drinks, health ));
    console.log(printMood( mood ));
}



export default printStatus; 