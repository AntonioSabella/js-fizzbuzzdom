/* Scrivi un programma che stampi in console i numeri da 1 a 100.
MILESTONE 1
Per i multipli di 3 stampi “Fizz” al posto del numero
Per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/* Bonus
MILESTONE 2
Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
MILESTONE 3
Applica uno stile differente a seconda del valore dell'indice
per i multipli di 3, per i multipli di 5 e per i valori 
che sono sia multipli di 3 che di 5. */

const rowFizz = document.querySelector('.rowFizz')

for ( let i = 1; i <= 100; i++ ) {
    //console.log(i);
    let colSquare;

    if (i % 15 === 0) {
        console.log('FizzBuzz');
        colSquare = `<div class="col bg_red">FizzBuzz</div>`;
    } else if ( i % 3 === 0) {
        console.log('Fizz');
        colSquare = `<div class="col bg_green">Fizz</div>`;

    } else if ( i % 5 === 0 ) {
        console.log('Buzz');
        colSquare = `<div class="col bg_yellow">Buzz</div>`;

    } else {
        console.log(i);
        colSquare = `<div class="col">${i}</div>`
    }

    rowFizz.insertAdjacentHTML('beforeend', colSquare)

}









