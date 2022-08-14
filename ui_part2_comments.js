const printComment = (health) => {

    if (health <= 0) {
        return `
        "YOU ARE FIRED!"
        `;

    } else if (health > 0 && health < 20) {
        return `
        "I'm amazed that I'm still alive!" 
        `;

    } else if (health >= 20 && health < 40) {
        return `
        It's been worse. But not very often.
        `;

    } else if (health >= 40 && health < 60) {
        return `
        "Tell me, simple people can't learn how to treat their king"
        `;

    } else if (health >= 60 && health < 80) {
        return `
        "Your highness approves of your services!"
        `;

    } else if (health >= 80 && health < 95) {
        return `
        "Yes, that pleases your king." 
        `;

    } else  {
        return `
        "That's what I call living"
        `;
    };
}

export {printComment}

console.log(printComment(36));

