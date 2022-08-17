# pb-final-project
JavaScript Modul Final Project
(by Florian, Martin and Jeff)

-----------------------------------------
Project Name: "TamaYoshi" --> an Tamagotchi like game (just with a fat cat as your pet ;)

-----------------------------------------

## **Pet Needs**
### The 4 main needs are 
1. food 
2. drink
3. Health
4. Mood

Explanation:
You will Start with a set of stats for each of the 4 needs. At the beginning, every need on default is at 100 Points. The needs will reduce over time (getting hungry, drinky, sick and unhappy).

|   food   |   drink   |   Health   |    Mood    |
|:----------:|:----------:|:----------:|:----------:|
|    100     |    100     |    100     |    100     |

For each need, you have 3 things to choose from to satisfy it. These 3 choices consist of a good, a bad and a neutral one. Every decision also has an impact on the other needs. Note this to satisfy his fluffy highness.


**1. food: Feed your Pet with a selection of several foods**   

  The following choices are available to select:
- Tuna
- Usual Cat food from the Supermarket
- Lasagne

**2. drink: Quench the drink of his fluffiness with several drinks**   

  The following choices are available to select:
- delicious milk
- water
- Champagne

**3. Health: Means here more a nervous breakdown or a "meowlife crisis" of his purrriness**   

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
