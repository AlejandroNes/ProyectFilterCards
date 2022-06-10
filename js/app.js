//variables

//inputs
const marca = document.querySelector("#marca");
const year = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
//resultado
const resultado = document.querySelector("#resultado");

let filtros = [];
//objetoGlobal
const objCard = {
    marca: '',
    year: '',
    precio: '',
    puertas:'',
    transmision:'',
    color: '',
};

//eventos
(()=>{
//cuando carga la app
document.addEventListener("DOMContentLoaded", cargarApp);
//cuando se selecciona un input
marca.addEventListener( 'change', guardarMarca );
year.addEventListener( 'change', guardarYear );
color.addEventListener( 'change', guardarColor );
minimo.addEventListener( 'change', guardarPrecioMin );
puertas.addEventListener( 'change', guardarPuertas );
transmision.addEventListener( 'change', guardarTransmision );

})()


//funciones
function cargarApp(){
    //mostrar los años en el html
    showYear();
    mostrarHTML(autos)
}

//EJECUTAR FILTROS DE INPUTS
function guardarMarca(e){
    let marca = e.target.value;
    objCard["marca"] = marca;
    //funcion fiter
    filtrarCard();

}
function guardarYear(e){
    let year = parseInt(e.target.value);
    objCard["year"] = year;
    filtrarCard();
}

function guardarPrecioMin(e){
    let precioMin = parseInt(e.target.value);
    objCard["precio"] = precioMin;
    filtrarCard();
}
function guardarPuertas(e){
    let puertas = parseInt(e.target.value);
    objCard["puertas"] = puertas;
    filtrarCard();
}

function guardarColor(e){
    const color = e.target.value;
    objCard["color"] = color;
    filtrarCard();
}
function guardarTransmision(e){
    const transmision = e.target.value;
    objCard["transmision"] = transmision;
    filtrarCard();
}


//mostrar los años en el DOOM
function showYear(){
   let maxYear = new Date().getFullYear();
   let minYear = maxYear - 10;
   //mostrar todos los años
   for (let i = maxYear; i > minYear; i--) {
    const opcion = document.createElement('option');
    opcion.value = i;
    opcion.textContent =i;
    year.appendChild(opcion);   
   }

}

//FILTRAR CARD
function filtrarCard(){
    filtros = autos.filter( (filtrarMarca) ).filter( filtrarYear ).filter( filtrarMinimo ).filter(filtrarPuertas).filter( filtrarColor ).filter( filtrarTransmision )
    
    if(filtros.length == 0){
        limpiarHTML()
        const mensaje  = document.createElement("h3");
        mensaje.textContent = "sin resultados - prueba con otra busqueda";
        mensaje.style.textAlign = "center"
        resultado.appendChild(mensaje)
    }else{
        mostrarHTML(filtros);
    }
    

}

//marca
const filtrarMarca = (item) => {
    if( objCard.marca ){
        return item.marca === objCard.marca
    }else{
        return item
    }
} 
//year
const filtrarYear = (item) => {
    if( objCard.year ){
        return item.year === objCard.year
    }else{
        return item
    }
} 
//minimo
const filtrarMinimo = (item) => {
    if( objCard.precio ){
        return item.precio >= objCard.precio;
    }else{
        return item
    }
} 

//puertas
const filtrarPuertas = (item) => {
    if( objCard.puertas ){
        return item.puertas === objCard.puertas;
    }else{
        return item
    }
} 
//color
const filtrarColor = (item) => {
    if( objCard.color ){
        return item.color === objCard.color;
    }else{
        return item
    }
} 
//transmision
const filtrarTransmision = (item) => {
    if( objCard.transmision ){
        return item.transmision === objCard.transmision;
    }else{
        return item
    }
} 

//MOSTRAR EN EL HTML
function mostrarHTML(filtroCard){

    limpiarHTML()

    filtroCard.forEach( (item) => {
        const parrafo = document.createElement('p')
        parrafo.innerHTML = `
         ${item.marca} ${item.modelo} - ${item.year} - precio: ${item.precio} - puertas: ${item.puertas} - color: ${item.color} - transmision: ${item.transmision}
        `

        resultado.appendChild(parrafo)
    } )
}

function limpiarHTML(){
    while( resultado.firstChild ){
        resultado.removeChild(resultado.firstChild);
    }
}