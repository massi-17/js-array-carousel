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

// dichiaro le variabili delle frecce
let up = document.getElementById("arrow-up");
let down = document.getElementById("arrow-down");


// freccia in su
// al click della freccia
up.addEventListener('click', function(){
    // la var active decrementa di 1
    active--;
    // se sei sulla prima foto (i0) e fai click 
    if(active < 0){
        // va all'ultima img (i4)
        active = 4;
    }

    photoActive.classList.remove("active");
    thumbsActive.classList.remove("thumbnail-active");
    photoActive = document.getElementById("pic-" + active);
    thumbsActive = document.getElementById("preview-" + active);
    photoActive.classList.add("active");
    thumbsActive.classList.add("thumbnail-active");
})


// freccia in giu
// al click della freccia
down.addEventListener('click', function(){
    // la var active aumenta di 1
    active++;
    // se sei sull'ultima foto (i4) e fai click 
    if(active > 4){
        // va alla prima img (i0)
        active = 0;
    }

    photoActive.classList.remove("active");
    thumbsActive.classList.remove("thumbnail-active");
    photoActive = document.getElementById("pic-" + active);
    thumbsActive = document.getElementById("preview-" + active);
    photoActive.classList.add("active");
    thumbsActive.classList.add("thumbnail-active");
})