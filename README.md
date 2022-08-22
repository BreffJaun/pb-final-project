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
5. Enjoy the life of a full time cat servant!

## How to play:

"tamaYOSHI" is the javascript version of owning a cat, what basicly means, to be the servant of a cat.
And Yoshis is the "Highness" of all cats. So be prepared for "Your Highnesses high standards".
That´s why tamaYOSHI has THREE game modes:
1. FOOTMAN (easy): for beginners, means, people who haven´t hat a cat before
2. VALET (normal): for those, who think they know cats.
3. BUTLER (hard): for those, who never met Yoshi before. 

### FOOD: 
Finest Tuna / Cat Food / Lasagne
### DRINK: 
Just Pure Water / Cool Fresh Milk / Nice Champagne
### MOOD:
ere more a nervous breakdown or a "meowlife crisis" of his purrriness**   

  The following choices are available to select:
- massage your pet
- stroke the belly
- kiss the paw

**4. Mood: play with....or even better, play for your majesty, to amuse him**   

  The following choices are available to select:
- throw a ball
- dance for your cat
- turn on the TV and give him the remote control
------------------------------------------------------------------

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


<!-- 
1. First Ideas for the Game

**Hungry: Feed your Pet with delicious food**

Feed with:
- Tuna ("that makes me full, but not satisfied")
- Salmon ("delicious")
- Feed with cheap Cat food from the Supermarket  ("are you Kidding me?")     
- expensive cat food, "the finest of the finest"   ("you may kiss the paw now")
- a Burger ("lets do it")
- Lasagne ("let's do the Garfield way")
=> Hungry:      -50;
=> Happy:       +50;
=> Healthy:     -70;

**drinky: Give your pet water, milk or even finer things to drink**

Feed with:
- water ("Go away with the cheap booze.....but thanks loyal human")
=> Healthy:     +50;
=> Hungry:      -50;
=> Happy:       -70;

- delicious milk ("uhh mewow")
- Prosecco ("just a little dropplet for my royal paw") 

**Sickness: heal your pet**

Heal with:
- stroke the belly ("purr purr....purr it's better now")
- massage your pet ("yeahh...this point in the neck, yeahh exactly")
- stroking the head (purr purr....don't stop")
- kiss the paw ("but was also time for this my loyal human")

**Happienes: play with....or even better, play for your cat, to amuse him**

Amuse with:
- dance for your cat ("dance little monkey...dance!")
- throw a ball ("do i look like i'm running after it? Run yourself, I am royalty and this is beneath me.")
- play with the laserpointer ("I'd be chasing the dot if you hadn't cheesed me so fat")
- turn on the TV and give him the remote control ("Finally I can continue watching "How to sell drugs online (fast)". Be quite little human")
------------------------------------------------------------------

## **What has to be programmed to realize the Project?**
- a class to create your own cat. 
 the result is, you can't create your own cat, Yoshi decides who he is and how he looks. We are  not on a "Wishconcert" ;)
- Queries (Abfragen) with prompt to get in the pet properties
- a countdown to see when the pet is hungry, drinky, sick, or bored.

------------------------------------------------------------------

 -->
