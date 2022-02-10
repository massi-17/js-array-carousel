// array
const img = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const title = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise",
];

const text = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
    "Lorem ipsum",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
    "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
];

// dichiaro le variabili dell'immagine principale e delle anteprime
let photo = document.getElementById("photo");
let thumbs = document.getElementById("thumbs");
let active = 0; // Puntatore

// creo un ciclo per l'array che contiene le img
for (let i = 0; i < img.length; i++) {
    // inserisco nel div con id photo delle stringhe html per la foto principale
    photo.innerHTML += `
        <div class="content" id="pic-${i}">
            <img src="${img[i]}" alt="">
            <div class="text">
                <h2>${title[i]}</h2>
                <p>${text[i]}</p>
            </div>            
        </div>
        `;
        // inserisco il codice html per le img di anteprima
        thumbs.innerHTML += `<img src="${img[i]}" alt="" id="preview-${i}">`;
}

// dichiaro delle variabili per le img attive
let photoActive = document.getElementById("pic-" + active);
let thumbsActive = document.getElementById("preview-" + active);
photoActive.classList.add("active");
thumbsActive.classList.add("thumbnail-active");

