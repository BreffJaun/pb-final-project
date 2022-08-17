const printCommentsDrink = ( drink ) => {

    if ( drink <= 0 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink > 0 && drink < 5 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink >= 20 && drink < 25 ) {
        return `    "20xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink >= 40 && drink < 45 ) {
        return `    "40xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink >= 60 && drink < 65 ) {
        return `    "60xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink >= 80 && drink < 85 ) {
        return `    "80xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( drink >= 95 ) {
        return `    "95xxxxxxxxxxxxxxxxxxxxxx"`;
    };
}

console.log(printCommentsDrink(36));

