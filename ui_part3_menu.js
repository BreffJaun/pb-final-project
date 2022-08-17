const printOptions = () => {
    return`
    FOOD                   DRINKS                 ACTIVITIES             HAPPYNESS
    -----------------      -----------------      -----------------      -----------------
    { F1 } Tuna            { F4 } Water           { F7 } Safari          { F10 } xxxxx
    { F2 } Cat Food        { F5 } Milk            { F8 } Couch Surfing   { F11 } xxxxx
    { F3 } Lasagne         { F6 } Champagne       { F9 } Massage         { F12 } xxxxx`};


const printStyleLine = () => {
    return `\n==================================-●-=========xXx=========-●-==================================`
};


function printMenu  () {
    console.log(printOptions());
    console.log(printStyleLine());
}


printMenu ();

export default printMenu;