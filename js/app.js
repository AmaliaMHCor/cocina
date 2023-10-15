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

    const postres = platillosArreglo.filter(postre => postre.getAttribute('data-platillos') === 'postre');
    mostrarPlatillos(entradas, principaless, postres, platillosArreglo);

}
const mostrarPlatillos = (entradas, principaless, postres, todos) => {
    btnEntradas.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        entradas.forEach(entrada => contenedorPlatillos.appendChild(entrada));
    });
    btnPrincipales.addEventListener('click', () => {
        limpiarHtml(contenedorPlatillos);
        principaless.forEach(principales => contenedorPlatillos.appendChild(principales));

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
//var downloadPdfLink = modal1.querySelector("#downloadPdfLink"); //BOTON DE DESARGA PDF
//MODAL 2
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = modal2.querySelector(".close2");
var opcionTexts2 = modal2.querySelectorAll(".opcionText");
var radioOptions2 = modal2.querySelectorAll(".opcionRadio");
//var downloadPdfLink2 = modal2.querySelector("#downloadPdfLink2");
//MODAL 3
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("openModalBtn3");
var span3 = modal3.querySelector(".close3");
var opcionTexts3 = modal3.querySelectorAll(".opcionText");
var radioOptions3 = modal3.querySelectorAll(".opcionRadio");
//var downloadPdfLink3 = modal3.querySelector("#downloadPdfLink3");
//MODAL 4
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("openModalBtn4");
var span4 = modal4.querySelector(".close4");
var opcionTexts4 = modal4.querySelectorAll(".opcionText");
var radioOptions4 = modal4.querySelectorAll(".opcionRadio");
//var downloadPdfLink4 = modal4.querySelector("#downloadPdfLink4");
//MODAL 5
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("openModalBtn5");
var span5 = modal5.querySelector(".close5");
var opcionTexts5 = modal5.querySelectorAll(".opcionText");
var radioOptions5 = modal5.querySelectorAll(".opcionRadio");
//var downloadPdfLink5 = modal5.querySelector("#downloadPdfLink5");
//MODAL 6
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("openModalBtn6");
var span6 = modal6.querySelector(".close6");
var opcionTexts6 = modal6.querySelectorAll(".opcionText");
var radioOptions6 = modal6.querySelectorAll(".opcionRadio");
//var downloadPdfLink6 = modal6.querySelector("#downloadPdfLink6");
//MODAL 7
var modal7 = document.getElementById("myModal7");
var btn7 = document.getElementById("openModalBtn7");
var span7 = modal7.querySelector(".close7");
var opcionTexts7 = modal7.querySelectorAll(".opcionText");
var radioOptions7 = modal7.querySelectorAll(".opcionRadio");
//var downloadPdfLink7 = modal7.querySelector("#downloadPdfLink7");
//MODAL 8
var modal8 = document.getElementById("myModal8");
var btn8 = document.getElementById("openModalBtn8");
var span8 = modal8.querySelector(".close8");
var opcionTexts8 = modal8.querySelectorAll(".opcionText");
var radioOptions8 = modal8.querySelectorAll(".opcionRadio");
//var downloadPdfLink8 = modal8.querySelector("#downloadPdfLink8");
//MODAL 9
var modal9 = document.getElementById("myModal9");
var btn9 = document.getElementById("openModalBtn9");
var span9 = modal9.querySelector(".close9");
var opcionTexts9 = modal9.querySelectorAll(".opcionText");
var radioOptions9 = modal9.querySelectorAll(".opcionRadio");
//var downloadPdfLink9 = modal9.querySelector("#downloadPdfLink9");
//MODAL 10
var modal10 = document.getElementById("myModal10");
var btn10 = document.getElementById("openModalBtn10");
var span10 = modal10.querySelector(".close10");
var opcionTexts10 = modal10.querySelectorAll(".opcionText");
var radioOptions10 = modal10.querySelectorAll(".opcionRadio");
//var downloadPdfLink10 = modal10.querySelector("#downloadPdfLink10");
//MODAL 11
var modal11 = document.getElementById("myModal11");
var btn11 = document.getElementById("openModalBtn11");
var span11 = modal11.querySelector(".close11");
var opcionTexts11 = modal11.querySelectorAll(".opcionText");
var radioOptions11 = modal11.querySelectorAll(".opcionRadio");
//var downloadPdfLink11 = modal11.querySelector("#downloadPdfLink11");
//MODAL 12
var modal12 = document.getElementById("myModal12");
var btn12 = document.getElementById("openModalBtn12");
var span12 = modal12.querySelector(".close12");
var opcionTexts12 = modal12.querySelectorAll(".opcionText");
var radioOptions12 = modal12.querySelectorAll(".opcionRadio");
//var downloadPdfLink12 = modal12.querySelector("#downloadPdfLink12");
//MODAL 13
var modal13 = document.getElementById("myModal13");
var btn13 = document.getElementById("openModalBtn13");
var span13 = modal13.querySelector(".close13");
var opcionTexts13 = modal13.querySelectorAll(".opcionText");
var radioOptions13 = modal13.querySelectorAll(".opcionRadio");
//var downloadPdfLink13 = modal13.querySelector("#downloadPdfLink13");
//MODAL 14
var modal14 = document.getElementById("myModal14");
var btn14 = document.getElementById("openModalBtn14");
var span14 = modal14.querySelector(".close14");
var opcionTexts14 = modal14.querySelectorAll(".opcionText");
var radioOptions14 = modal14.querySelectorAll(".opcionRadio");
//var downloadPdfLink14 = modal14.querySelector("#downloadPdfLink14");
//MODAL 15
var modal15 = document.getElementById("myModal15");
var btn15 = document.getElementById("openModalBtn15");
var span15 = modal15.querySelector(".close15");
var opcionTexts15 = modal15.querySelectorAll(".opcionText");
var radioOptions15 = modal15.querySelectorAll(".opcionRadio");
//var downloadPdfLink15 = modal15.querySelector("#downloadPdfLink15");
//MODAL 16
var modal16 = document.getElementById("myModal16");
var btn16 = document.getElementById("openModalBtn16");
var span16 = modal16.querySelector(".close16");
var opcionTexts16 = modal16.querySelectorAll(".opcionText");
var radioOptions16 = modal16.querySelectorAll(".opcionRadio");
//var downloadPdfLink16 = modal16.querySelector("#downloadPdfLink16");
//MODAL 17
var modal17 = document.getElementById("myModal17");
var btn17 = document.getElementById("openModalBtn17");
var span17 = modal17.querySelector(".close17");
var opcionTexts17 = modal17.querySelectorAll(".opcionText");
var radioOptions17 = modal17.querySelectorAll(".opcionRadio");
//var downloadPdfLink17 = modal17.querySelector("#downloadPdfLink17");
//MODAL 18
var modal18 = document.getElementById("myModal18");
var btn18 = document.getElementById("openModalBtn18");
var span18 = modal18.querySelector(".close18");
var opcionTexts18 = modal18.querySelectorAll(".opcionText");
var radioOptions18 = modal18.querySelectorAll(".opcionRadio");
//var downloadPdfLink18 = modal18.querySelector("#downloadPdfLink18");

function openModal(modal) {
    modal.style.display = "block";
}
/* ------------------ MODAL 1 --------------------------------*/
btn.onclick = function () {
    openModal(modal1);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span.onclick = function () {
    closeModal(modal1, radioOptions1, opcionTexts1);
}
/* ------------------ MODAL 2 --------------------------------*/
btn2.onclick = function () {
    openModal(modal2);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span2.onclick = function () {
    closeModal(modal2, radioOptions2, opcionTexts2);
}
/* ------------------ MODAL 3 --------------------------------*/
btn3.onclick = function () {
    openModal(modal3);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span3.onclick = function () {
    closeModal(modal3, radioOptions3, opcionTexts3);
}
/* ------------------ MODAL 4 --------------------------------*/
btn4.onclick = function () {
    openModal(modal4);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span4.onclick = function () {
    closeModal(modal4, radioOptions4, opcionTexts4);
}
/* ------------------ MODAL 5 --------------------------------*/
btn5.onclick = function () {
    openModal(modal5);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span5.onclick = function () {
    closeModal(modal5, radioOptions5, opcionTexts5);
}
/* ------------------ MODAL 6 --------------------------------*/
btn6.onclick = function () {
    openModal(modal6);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span6.onclick = function () {
    closeModal(modal6, radioOptions6, opcionTexts6);
}
/* ------------------ MODAL 7 --------------------------------*/
btn7.onclick = function () {
    openModal(modal7);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span7.onclick = function () {
    closeModal(modal7, radioOptions7, opcionTexts7);
}
/* ------------------ MODAL 8 --------------------------------*/
btn8.onclick = function () {
    openModal(modal8);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span8.onclick = function () {
    closeModal(modal8, radioOptions8, opcionTexts8);
}
/* ------------------ MODAL 9 --------------------------------*/
btn9.onclick = function () {
    openModal(modal9);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span9.onclick = function () {
    closeModal(modal9, radioOptions9, opcionTexts9);
}
/* ------------------ MODAL 10 --------------------------------*/
btn10.onclick = function () {
    openModal(modal10);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span10.onclick = function () {
    closeModal(modal10, radioOptions10, opcionTexts10);
}
/* ------------------ MODAL 11 --------------------------------*/
btn11.onclick = function () {
    openModal(modal11);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span11.onclick = function () {
    closeModal(modal11, radioOptions11, opcionTexts11);
}
/* ------------------ MODAL 12 --------------------------------*/
btn12.onclick = function () {
    openModal(modal12);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span12.onclick = function () {
    closeModal(modal12, radioOptions12, opcionTexts12);
}
/* ------------------ MODAL 13 --------------------------------*/
btn13.onclick = function () {
    openModal(modal13);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span13.onclick = function () {
    closeModal(modal13, radioOptions13, opcionTexts13);
}
/* ------------------ MODAL 14 --------------------------------*/
btn14.onclick = function () {
    openModal(modal14);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span14.onclick = function () {
    closeModal(modal14, radioOptions14, opcionTexts14);
}
/* ------------------ MODAL 15 --------------------------------*/
btn15.onclick = function () {
    openModal(modal15);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span15.onclick = function () {
    closeModal(modal15, radioOptions15, opcionTexts15);
}
/* ------------------ MODAL 16 --------------------------------*/
btn16.onclick = function () {
    openModal(modal16);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span16.onclick = function () {
    closeModal(modal16, radioOptions16, opcionTexts16);
}
/* ------------------ MODAL 17 --------------------------------*/
btn17.onclick = function () {
    openModal(modal17);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span17.onclick = function () {
    closeModal(modal17, radioOptions17, opcionTexts17);
}
/* ------------------ MODAL 18 --------------------------------*/
btn18.onclick = function () {
    openModal(modal18);
}
// Cerrar el modal cuando se haga clic en la "x" de cierre
span18.onclick = function () {
    closeModal(modal18, radioOptions18, opcionTexts18);
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target == modal1) {
        closeModal(modal1, radioOptions1, opcionTexts1);
    } 
    else if (event.target == modal2) {
        closeModal(modal2, radioOptions2, opcionTexts2);
    }
    else if (event.target == modal3) {
        closeModal(modal3, radioOptions3, opcionTexts3);
    }
    else if (event.target == modal4) {
        closeModal(modal4, radioOptions4, opcionTexts4);
    }
    else if (event.target == modal5) {
        closeModal(modal5, radioOptions5, opcionTexts5);
    }
    else if (event.target == modal6) {
        closeModal(modal6, radioOptions6, opcionTexts6);
    }
    else if (event.target == modal7) {
        closeModal(modal7, radioOptions7, opcionTexts7);
    }
    else if (event.target == modal8) {
        closeModal(modal8, radioOptions8, opcionTexts8);
    }
    else if (event.target == modal9) {
        closeModal(modal9, radioOptions9, opcionTexts9);
    }
    else if (event.target == modal10) {
        closeModal(modal10, radioOptions10, opcionTexts10);
    }
    else if (event.target == modal11) {
        closeModal(modal11, radioOptions11, opcionTexts11);
    }
    else if (event.target == modal12) {
        closeModal(modal12, radioOptions12, opcionTexts12);
    }
    else if (event.target == modal13) {
        closeModal(modal13, radioOptions13, opcionTexts13);
    }
    else if (event.target == modal14) {
        closeModal(modal14, radioOptions14, opcionTexts14);
    }
    else if (event.target == modal15) {
        closeModal(modal15, radioOptions15, opcionTexts15);
    }
    else if (event.target == modal16) {
        closeModal(modal16, radioOptions16, opcionTexts16);
    }
    else if (event.target == modal17) {
        closeModal(modal17, radioOptions17, opcionTexts17);
    }
    else if (event.target == modal18) {
        closeModal(modal18, radioOptions18, opcionTexts18);
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
radioOptions4.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal4.querySelector('input[name="opcion4"]:checked').value;
        applyStyles(selectedValue, opcionTexts4);
    });
});
radioOptions5.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal5.querySelector('input[name="opcion5"]:checked').value;
        applyStyles(selectedValue, opcionTexts5);
    });
});
radioOptions6.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal6.querySelector('input[name="opcion6"]:checked').value;
        applyStyles(selectedValue, opcionTexts6);
    });
});
radioOptions7.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal7.querySelector('input[name="opcion7"]:checked').value;
        applyStyles(selectedValue, opcionTexts7);
    });
});
radioOptions8.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal8.querySelector('input[name="opcion8"]:checked').value;
        applyStyles(selectedValue, opcionTexts8);
    });
});
radioOptions9.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal9.querySelector('input[name="opcion9"]:checked').value;
        applyStyles(selectedValue, opcionTexts9);
    });
});
radioOptions10.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal10.querySelector('input[name="opcion10"]:checked').value;
        applyStyles(selectedValue, opcionTexts10);
    });
});
radioOptions11.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal11.querySelector('input[name="opcion11"]:checked').value;
        applyStyles(selectedValue, opcionTexts11);
    });
});
radioOptions12.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal12.querySelector('input[name="opcion12"]:checked').value;
        applyStyles(selectedValue, opcionTexts12);
    });
});
radioOptions13.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal13.querySelector('input[name="opcion13"]:checked').value;
        applyStyles(selectedValue, opcionTexts13);
    });
});
radioOptions14.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal14.querySelector('input[name="opcion14"]:checked').value;
        applyStyles(selectedValue, opcionTexts14);
    });
});
radioOptions15.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal15.querySelector('input[name="opcion15"]:checked').value;
        applyStyles(selectedValue, opcionTexts15);
    });
});
radioOptions16.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal16.querySelector('input[name="opcion16"]:checked').value;
        applyStyles(selectedValue, opcionTexts16);
    });
});
radioOptions17.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal17.querySelector('input[name="opcion17"]:checked').value;
        applyStyles(selectedValue, opcionTexts17);
    });
});
radioOptions18.forEach(function (radioOption) {
    radioOption.addEventListener("change", function () {
        var selectedValue = modal18.querySelector('input[name="opcion18"]:checked').value;
        applyStyles(selectedValue, opcionTexts18);
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
// downloadPdfLink.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/restaurante.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-pesacado.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink2.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink3.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink4.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink5.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink6.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink7.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink8.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink9.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink10.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink11.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink12.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink13.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink14.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink15.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink16.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink17.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });
// downloadPdfLink18.addEventListener("click", function () {
   
//     var pdfUrl = "recetas/cuy.pdf";
//     // enlace temporal para descargar el archivo PDF
//     var a = document.createElement("a");
//     a.href = pdfUrl;
//     a.download = "receta-cuy.pdf"; // nombre del archivo
//     a.style.display = "none";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
// });