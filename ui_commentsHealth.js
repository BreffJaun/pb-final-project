const printCommentsHealth = (health) => {

    if ( health <= 0) {
        return `    "YOU ARE FIRED!"`;

    } else if ( health > 0 && health < 5 ) {
        return `    "I'm amazed that I'm still alive!" `;

    } else if ( health >= 20 && health < 25 ) {
        return `    "It's been worse. But not very often."`;

    } else if ( health >= 40 && health < 45 ) {
        return `    "Tell me, simple people can't learn how to treat their king"`;

    } else if ( health >= 60 && health < 65 ) {
        return `    "Your highness approves of your services!"`;

    } else if ( health >= 80 && health < 85 ) {
        return `    "Yes, that pleases your king." `;

    } else if ( health >= 95 ) {
        return `    "That's what I call living"`;
    };
}


console.log(printCommentsHealth(36));

