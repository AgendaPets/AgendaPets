
const STORAGE_KEY = "servicios";
const servicios = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const formulario = document.getElementById("form-servicio");

pintarLista();

formulario.addEventListener("submit", function (event) {
    event.preventDefault();
    agregarServicio();
    guardarEnLocalStorage();
    pintarLista();

    formulario.reset();
});

function agregarServicio() {

    const nombre = document.getElementById("nombre").value;
    const duracion = document.getElementById("duracion").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;

    const servicio = {
        nombre: nombre,
        duracion: duracion,
        precio: precio,
        descripcion: descripcion
    };

    servicios.push(servicio);


    console.log(JSON.stringify(servicios, null, 2));
}


function guardarEnLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(servicios));
}

function pintarLista() {
  const contenedor = document.getElementById("listaServicios");
  contenedor.innerHTML = "";

  servicios.forEach((servicio, index) => {
    const item = document.createElement("article");

    item.innerHTML = `
<article class="servicio">

<div class="icono-servicio">
<i class="bi bi-paw-fill"></i>
</div>

<div class="info-servicio">

<h5>${servicio.nombre}</h5>

<p>
    descripción: ${servicio.descripcion}
</p>

<div class="datos-servicio">
    <span>$ ${servicio.precio}</span>
    <span>
        <i class="bi bi-clock"></i>
        ${servicio.duracion}
    </span>
</div>

</div>

<div class="acciones-servicio">

<button class="btn btn-sm btn-editar">
    <i class="bi bi-pencil-square"></i>
    Editar
</button>

<button class="btn btn-sm btn-ocultar">
    <i class="bi bi-eye-slash"></i>
    Ocultar
</button>

<button class="btn btn-sm btn-eliminar">
    <i class="bi bi-trash3"></i>
    Eliminar
</button>

</div>

</article>

    `;

    contenedor.appendChild(item);
  });
}

const botonesOcultar = document.querySelectorAll("ocultarServicio");

botonesOcultar.forEach(function (boton){
    boton.addEventListener("click",function(){
        const servicio = boton.ocultar(".servicio");
        servicio.style.display = "none";
    })
})


