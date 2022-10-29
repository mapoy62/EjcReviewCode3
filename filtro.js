// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];
var li = document.getElementById('lista-de-productos');
var $i = document.querySelector('input');

//Función para mostrar los productos que hay con su tipo y color
function displayProductos(productos){
  

  for (let i = 0; i < productos.length; i++) {
    var d = document.createElement("div");
        d.classList.add("productos");

    var ti = document.createElement("p");
        ti.classList.add("titulo");
        ti.textContent = productos[i].nombre;
    
    var imagen = document.createElement("img");
        imagen.setAttribute('src', productos[i].img);
  
    d.appendChild(ti);
    d.appendChild(imagen);
  
    li.appendChild(d);
  }
}

displayProductos(productos)

const botonDeFiltro = document.querySelector("button");
botonDeFiltro.onclick = function() {
  while (li.firstChild) {
    li.removeChild(li.firstChild);
  }

  let texto = $i.value;
  texto = texto.toLowerCase();
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
        d.classList.add("producto")
  
    var ti = document.createElement("p")
        ti.classList.add("titulo")
        ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
        imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  