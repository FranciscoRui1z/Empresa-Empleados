import Empresa from './empresa.js';

const empresas = [];



async function cargarEmpresas() {
  try {
    const res = await fetch('../../assets/empresas.json'); 
    const datos = await res.json();
    datos.forEach(d => {
      empresas.push(new Empresa(d.id,d.nombre, d.direccion, d.telefono));
    });
  } catch (error) {
    console.error('Error al cargar empresa:', error);
  }
}




function mostrarEmpresas() {
  const tabla = document.getElementById('tablaEmpresas');
  tabla.innerHTML = '';
  empresas.forEach((e, i) => {
    const fila = `<tr>
      <td>${e.nombre}</td>
      <td>${e.direccion}</td>
      <td>${e.telefono}</td>
      <td><button class="btn btn-danger btn-sm" onclick="eliminar(${i})">Eliminar</button></td>
    </tr>`;
    tabla.innerHTML += fila;
  });
 
}
 function eliminar(index) {
    empresas.splice(index, 1);
    mostrarEmpresas();
    }



document.addEventListener('DOMContentLoaded', async () => {
  await cargarEmpresas();
  mostrarEmpresas();
});
window.eliminar = eliminar;