const printCommentsActivities = ( activities ) => {

    if ( activities <= 0 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities > 0 && activities < 5 ) {
        return `    "0xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities >= 20 && activities < 25 ) {
        return `    "20xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities >= 40 && activities < 45 ) {
        return `    "40xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities >= 60 && activities < 65 ) {
        return `    "60xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities >= 80 && activities < 85 ) {
        return `    "80xxxxxxxxxxxxxxxxxxxxxx"`;

    } else if ( activities >= 95 ) {
        return `    "95xxxxxxxxxxxxxxxxxxxxxx"`;
    };
}

console.log(printCommentsActivities(36));



