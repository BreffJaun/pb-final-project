# "tamaYOSHI"

A BRANDNEW RETRO GAME by BreffJaun, itzFlorian and grossesbewirken.
Dedicated to Jeffs Cat called Yoshi and the old Tamagotchi-Game.
Just pure JavaScript, a clear Terminal and joy of games from 1997.
But more Yoshi than Tamagotchi as you might think off.

## How to install:

1. Clone this repo with THIS ssh-key => "git clone git@github.com:BreffJaun/pb-final-project.git"
2. Install npm-package (if necessary) =>  "npm install"
3. Install npm packages promp-sync and chalk => "npm install prompt-sync chalk"
4. Start the game on your terminal => "node index.js"
5. Enjoy the life of a 24/7 cat servant!

## How to play:

"tamaYOSHI" is the javascript version of owning a cat, what basically means, to be the servant of a cat.
And Yoshis is the "Highness" of all cats. So be prepared for "Your Highnesses high standards".
That´s why tamaYOSHI has THREE game modes:
1. FOOTMAN (easy): for beginners, means, people who haven´t hat a cat before
2. VALET (normal): for those, who think they know cats.
3. BUTLER (hard): for those, who never met Yoshi before. 

### FOOD: 
Finest Tuna - Cat Food - Lasagne
### DRINK: 
Just Pure Water - Cool Fresh Milk - Nice Champagne
### MOOD:
Turn on the TV! - Dance for me! - Stroke my Belly!

## **What has to be programmed to realize the Project?**
- a class to create your own cat. 
--> the result is, you can't create your own cat, your fluffiness still exists. We are  not on a "Wishconcert" ;)
- Queries (Abfragen) with prompt to get in the pet needs
- a countdown to see when the pet is hungry, drinky, sick, or bored.

------------------------------------------------------------------
------------------------------------------------------------------

## **Values and effects of the needs:**

**1. food**   

|   **Name**    |     Tuna     |   Usual Cat food   |   Lasagne   |
|:-------------:|:------------:|:------------------:|:-----------:|
|     **+**     |  food: +75 |     food: +50    | food: +25 |
|     **-**     |  Mood:   -25 |     drink: -25    | Health: -50 |
|   **Print**   | "that makes me full, but not satisfied" | "are you Kidding me?"    | "let's do the Garfield way, you may kiss the paw now" |

------------------------------------------------------------------------

**2. drink**   

|   **Name**    |     Water    |        Milk          |  Champagne  |
|:-------------:|:------------:|:--------------------:|:-----------:|
|     **+**     |  drink: +75 |     drink: +50      | drink: +25 |
|     **-**     |  Mood:   -25 |     Mood: -25        | Health: -75 |
|   **Print**   |  "Go away with the cheap booze.....but thanks loyal human" | "uhh mewow"    | "just a little dropplet for my royal paw" |

------------------------------------------------------------------------

**3. Health**   

|   **Name**    |    Massage   |       Stroke       |   Kiss the paw   |
|:-------------:|:------------:|:------------------:|:----------------:|
|     **+**     |  Health: +75 |     Health: +50    | Health: +25      |
|     **-**     |  food: -25 |     drink: -25    | Mood: -75        |
|   **Print**   | "yeahh...this point in the neck, yeahh exactly" | "purr purr....purr it's better now"    | "but was also time for this my loyal human" |

------------------------------------------------------------------------

**4. Mood**  

|   **Name**    | Throw a ball | Dance for your cat | Turn on the TV |
|:-------------:|:------------:|:------------------:|:--------------:|
|     **+**     |  Mood: +75   |     Mood: +50      | Mood:   +25    |
|     **-**     |  food: -25 |     drink: -25    | Health: -50    |
|   **Print**   | "that makes me full, but not satisfied" | "dance little monkey...dance!"    | "Finally I can continue watching "How to sell drugs online (fast)". Do not disturb me" |