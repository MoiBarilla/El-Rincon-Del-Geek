//**************************************  API Y EVENTO ONCLICK DE JQUERY  *******************************/

//DEFINICIÓN DE VARIABLES GLOBALES
let url;
let foto;
let imagen;
let miFoto;
let nombre;
let apellido;
let email;
let cumpleaños;
let ubicación;
let teléfono;
let usuario;
let linea1;
let linea2;

//CONSUMO DEL API
function verinfo() {
    //DECLARACIÓN DE API´S
    url = "https://randomuser.me/api/";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            //SE CARGAN LOS VALORES DEL API EN CADA VARIABLE GLOBAL.
            foto = data.results[0].picture.large;
            nombre = data.results[0].name.first;
            apellido = data.results[0].name.last;
            email = data.results[0].email;
            cumpleaños = data.results[0].dob.age;
            ubicación = data.results[0].location.country;
            teléfono = data.results[0].cell;
            usuario = data.results[0].login.username;

            //ANTES DE PINTAR LOS DIVS DEBEMOS LIMPIARLOS.
            document.getElementById("foto").innerHTML = "";
            document.getElementById("contenido").innerHTML = "";
            document.getElementById("descripcion").innerHTML = "";


            //SE PINTA LA FOTO APARTE POR QUE LA FOTO DEBE SER ESTÁTICA
            imagen = document.getElementById("foto");
            miFoto = `<img class="rounded-circle d-block m-auto" width="140px" height="140px" src="${foto}" alt=" ">`;
            imagen.innerHTML = miFoto;

            //SE PINTAN LOS OTROS DATOS CON EVENTOS CLICK DE JQUERY
            $(document).ready(function() {

                //DECLARACIÓN DE VARIABLES A USAR EN LOS BOTONES DE LA VENTANA MODAL

                $("#nombreDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Mi nombre Es:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${nombre} ${apellido}</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });
                $("#emailDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Mi Dirección de Email Es:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${email}</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });

                $("#cumpleañosDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Mi Edad Es:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${cumpleaños} Años</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });

                $("#ubicacionDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Yo Vivo en:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${ubicación}</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });

                $("#telefonoDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Mi Número de Teléfono es:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${teléfono}</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });

                $("#usuarioDom").click(function() {
                    document.getElementById("contenido").innerHTML = "";
                    document.getElementById("descripcion").innerHTML = "";
                    linea1 = `<h2 id="contenido" class="text-center text-secondary">Mi Usuario Es:</h2>`;
                    linea2 = `<p id="descripcion" class="text-center text-secondary">${usuario}</p>`;
                    contenido.innerHTML = linea1;
                    descripcion.innerHTML = linea2;
                });
            });
        });
}