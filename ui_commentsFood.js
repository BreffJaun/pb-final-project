const printCommentsFood = ( food ) => {

    if ( food <= 0 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food > 0 && food < 5 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food >= 20 && food < 25 ) {
        return `    "20xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food >= 40 && food < 45 ) {
        return `    "40xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food >= 60 && food < 65 ) {
        return `    "60xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food >= 80 && food < 85 ) {
        return `    "80xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( food >= 95 ) {
        return `    "95xxxxxxxxxxxxxxxxxxxxxx"`;
    };
}

console.log(printCommentsFood(36));


