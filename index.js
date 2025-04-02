// Code your solutions in this file

function writeCards(names, event) {
    let newArray = [];
    for ( let i = 0 ; i < names.length ; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }
    return newArray;
}

console.log(writeCards(['mike', 'joe', 'doreen'], 'graduation'));


const countDown = num => {
    let counter = num;
    while(counter >= 0) {
        console.log(counter);
        counter -=1;
    }
}

countDown(10);