const backgroundMusic = document.getElementById('background-music');
window.addEventListener("load", function () {
    document.getElementById("loader").classList.toggle("loader2");
    backgroundMusic.play();
    backgroundMusic.volume = 0.5;
});
/* MUSICA DE FONDO */


document.addEventListener('DOMContentLoaded', () => {
    backgroundMusic.play();
});
document.body.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
    }
});

/* TOGGLE ICON NAVBAR*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEntradas = document.querySelector('.entradas');
const btnPrincipales = document.querySelector('.principales');
const btnPizza = document.querySelector('.pizza');
const btnPostres = document.querySelector('.postres');
const contenedorPlatillos = document.querySelector('.platillos');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
document.addEventListener('DOMContentLoaded', () => {
    platillos();
});
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });
    /* Ssticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* REMOVE TOGGLE ICON AND NAVBAR WHEN CLICK NAVBAR LINK (SCROLL)*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/** TYPED JS */
const typed = new Typed('.multiple-text', {
    strings: ['un maestro de la cocina', 'un chef de tu hogar'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/** CONTEO DE IMAGENES */
imagenes.forEach(imagen => {
    imagen.src = imagen.dataset.src;
});
const platillos = () => {
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
    platillos.forEach(platillo => platillosArreglo = [...platillosArreglo, platillo]);
    const entradas = platillosArreglo.filter(entrada => entrada.getAttribute('data-platillos') === 'entrada');
    const principaless = platillosArreglo.filter(principales => principales.getAttribute('data-platillos') === 'principales');

    const pizzas = platillosArreglo.filter(pizza => pizza.getAttribute('data-platillos') === 'pizza');
    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillos') === 'postre');
    mostrarPlatillos(entradas, principaless, pizzas, postres, platillosArreglo);

}
const mostrarPlatillos = (entradas, principaless, pizzas, postres, todos) => {
    btnEntradas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        entradas.forEach(entrada => contenedorPlatillos.appendChild(entrada));
    });
    btnPrincipales.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        principaless.forEach(principales => contenedorPlatillos.appendChild(principales));

    });
    btnPizza.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        pizzas.forEach(pizza => contenedorPlatillos.appendChild(pizza));

    });
    btnPostres.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre => contenedorPlatillos.appendChild(postre));

    });
    btnTodos.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo => contenedorPlatillos.appendChild(todo));
    })

}
const limpiarHtml = (contenedor) => {
    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}
/** ---------------------------- MODALS ------------------------------------ */
// Obtener referencias a elementos HTML
//MODAL 1
var modal1 = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = modal1.querySelector(".close");
var opcionTexts1 = modal1.querySelectorAll(".opcionText");
var radioOptions1 = modal1.querySelectorAll(".opcionRadio");
var downloadPdfLink = modal1.querySelector("#downloadPdfLink"); //BOTON DE DESARGA PDF
//MODAL 2
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = modal2.querySelector(".close2");
var opcionTexts2 = modal2.querySelectorAll(".opcionText");
var radioOptions2 = modal2.querySelectorAll(".opcionRadio");
var downloadPdfLink2 = modal2.querySelector("#downloadPdfLink2");
//MODAL 3
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("openModalBtn3");
var span3 = modal3.querySelector(".close3");
var opcionTexts3 = modal3.querySelectorAll(".opcionText");
var radioOptions3 = modal3.querySelectorAll(".opcionRadio");
var downloadPdfLink3 = modal3.querySelector("#downloadPdfLink3");

function openModal(modal) {
    modal.style.display = "block";
}
btn.onclick = function () {
    openModal(modal1);
}

// Cerrar el modal cuando se haga clic en la "x" de cierre
span.onclick = function () {
    closeModal(modal1, radioOptions1, opcionTexts1);
}

btn2.onclick = function () {
    openModal(modal2);
}

// Cerrar el modal cuando se haga clic en la "x" de cierre
span2.onclick = function () {
    closeModal(modal2, radioOptions2, opcionTexts2);
}
btn3.onclick = function () {
    openModal(modal3);
}

// Cerrar el modal cuando se haga clic en la "x" de cierre
span3.onclick = function () {
    closeModal(modal3, radioOptions3, opcionTexts3);
}
// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal(modal1, radioOptions1, opcionTexts1);
    } else if (event.target == modal2) {
        closeModal(modal2, radioOptions2, opcionTexts2);
    }
    else if (event.target == modal2) {
        closeModal(modal3, radioOptions3, opcionTexts3);
    }
}
function closeModal(modal, radioOptions, optionTexts) {
    modal.style.display = "none";
    resetStyles(optionTexts);
    resetRadioSelection(radioOptions);
}
function resetStyles(optionTexts) {
    optionTexts.forEach(function (optionText) {
        optionText.classList.remove("strike");
    });
}
// Deseleccionar todos los radio buttons
function resetRadioSelection(radioOptions) {
    radioOptions.forEach(function (radioOption) {
        radioOption.checked = false;
    });
}

radioOptions1.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal1.querySelector('input[name="opcion"]:checked').value;
        applyStyles(selectedValue, opcionTexts1);
    });
});

// Aplicar estilos al párrafo según la opción de radio seleccionada (segundo modal)
radioOptions2.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal2.querySelector('input[name="opcion2"]:checked').value;
        applyStyles(selectedValue, opcionTexts2);
    });
});
// Aplicar estilos al párrafo según la opción de radio seleccionada (segundo modal)
radioOptions3.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal3.querySelector('input[name="opcion3"]:checked').value;
        applyStyles(selectedValue, opcionTexts3);
    });
});
function applyStyles(selectedValue, optionTexts) {

    if (selectedValue === "opcion1") {
        optionTexts[0].classList.add("strike");
    } else if (selectedValue === "opcion2") {
        optionTexts[1].classList.add("strike");
    } else if (selectedValue === "opcion3") {
        optionTexts[2].classList.add("strike");
    } else if (selectedValue === "opcion4") {
        optionTexts[3].classList.add("strike");
    } else if (selectedValue === "opcion5") {
        optionTexts[4].classList.add("strike");
    } else if (selectedValue === "opcion6") {
        optionTexts[5].classList.add("strike");
    } else if (selectedValue === "opcion7") {
        optionTexts[6].classList.add("strike");
    } else if (selectedValue === "opcion8") {
        optionTexts[7].classList.add("strike");
    } else if (selectedValue === "opcion9") {
        optionTexts[8].classList.add("strike");
    } else if (selectedValue === "opcion10") {
        optionTexts[9].classList.add("strike");
    } else if (selectedValue === "opcion11") {
        optionTexts[10].classList.add("strike");
    }
}

/** EVENTO DE DESCARGAR PDF DEL PRIMER MODAL */
downloadPdfLink.addEventListener("click", function () {
   
    var pdfUrl = "recetas/restaurante.pdf";
    // enlace temporal para descargar el archivo PDF
    var a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "receta-pesacado.pdf"; // nombre del archivo
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
downloadPdfLink2.addEventListener("click", function () {
   
    var pdfUrl = "recetas/cuy.pdf";
    // enlace temporal para descargar el archivo PDF
    var a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "receta-cuy.pdf"; // nombre del archivo
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});


