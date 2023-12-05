const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* let precedente = document.querySelector('.prev');
let successivo = document.querySelector('.next');

precedente.addEventListener('click', function() {
       
    console.log('Elemento con classe "prev" cliccato');
});

successivo.addEventListener('click', function() {
        
    console.log('Elemento con classe "next" cliccato');
}); */

let imgCorrente = 0;

const items = document.querySelector('.item.active')
function mostraImgCorrente() {
    
    /* let stampaImg = document.createElement('img')
    stampaImg.innerText = `src="./${images[imgCorrente].image}`;
    
    let div = document.document.createElement('div')
    div.classList.add('position-absolute bottom-50 text-right color-white padding-text')

    let title = `<h2>${images[imgCorrente].title}</h2>`
    let text = `<h5>${images[imgCorrente].text}</h5>`

    div.innerHTML = title + "<br>" + text; */

    console.log('Immagine corrente:', images[imgCorrente]);
} 


let precedente = document.querySelector('.prev');
let successivo = document.querySelector('.next');

precedente.addEventListener('click', function() {
    imgCorrente--;
    if (imgCorrente < 0) {
        imgCorrente = images.length - 1;
    }
    mostraImgCorrente();
});

successivo.addEventListener('click', function() {
    imgCorrente++;
    if (imgCorrente >= images.length) {
        imgCorrente = 0;
    }
    mostraImgCorrente();
});


/* let stampaTesto = `<div class="position-absolute bottom-50 text-right color-white padding-text"><h2>${images.title}</h2><h5>${images.text}</h5></div>`
stampa.innerHTML = stampaTesto 
 */
