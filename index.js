const names = ["Guadalupe","Ollie","Aki"];
let eventName = 'Event Name';

function writeCards(names, value) {
    let cardSent = []
   for (let i = 0; i < names.length; i++) {
        cardSent.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
        console.log(cardSent)
        debugger;
   }

    return cardSent;
}

writeCards(names, "surprise");

function countDown(number) {
   let x = number
    while (x >= 0) {
        console.log(x);
        x--;
    }
return number;
}