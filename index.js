function writeCards(names, event) {
    const stringArray = [];
    for(let i = 0; i < names.length; i++)
        stringArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    return stringArray;
}

function countDown(integer) {
    while(integer >= 0){
        console.log(integer);
        integer--;
    }
}