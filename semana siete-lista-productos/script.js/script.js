// Lista de productos inicial
let productos = [
  { nombre: "Camisa", precio: 15.99, descripcion: "Camisa de algodón" },
  { nombre: "Pantalón", precio: 25.50, descripcion: "Pantalón de mezclilla" },
  { nombre: "Zapatos", precio: 45.00, descripcion: "Zapatos de cuero" }
];

// Función para renderizar los productos
function renderizarProductos() {
  const lista = document.getElementById("lista-productos");
  lista.innerHTML = ""; // Borra todo antes de mostrar

  productos.forEach(producto => {
    const item = document.createElement("li");
    item.textContent = `${producto.nombre} - $${producto.precio.toFixed(2)}: ${producto.descripcion}`;
    lista.appendChild(item);
  });
}

// Función para agregar un producto nuevo
function agregarProducto() {
  const nuevoProducto = {
    nombre: "Producto Nuevo",
    precio: 9.99,
    descripcion: "Descripción del nuevo producto"
  };
  productos.push(nuevoProducto);
  renderizarProductos();
}

// Ejecuta cuando la página se carga
window.onload = renderizarProductos;
