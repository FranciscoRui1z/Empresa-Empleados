import Empleado from './empleado.js';

const empleados = [];

async function cargarEmpleados() {
  try {
    const res = await fetch('../../assets/empleados.json'); 
    const datos = await res.json();
    datos.forEach(d => {
      empleados.push(new Empleado(d.id, d.nombre, d.puesto, d.salario, d.empresaId));
    });
  } catch (error) {
    console.error('Error al cargar empleados:', error);
  }
}

function mostrarEmpleados() {
  const tabla = document.getElementById('tablaEmpleados');

  if (tabla != null) {
    tabla.innerHTML = '';
    empleados.forEach((e, i) => {
      const fila = `<tr>
        <td>${e.nombre}</td>
        <td>${e.puesto}</td>
        <td>$${e.salario}</td>
        <td>${e.id}</td>
        <td>${e.empresaId}</td>
        <td><button class="btn btn-warning btn-sm" onclick="editar(${i})">Editar</button></td>
      </tr>`;
      tabla.innerHTML += fila;
    });
  }
}

function editar(index) {
  const empleado = empleados[index];
  if (empleado) {
    window.location.href = `editarEmpleado.html?id=${empleado.id}`;
  }
}

function iniciarEdicion() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const empleado = empleados.find(e => e.id == id);

  if (!empleado) {
    alert('Empleado no encontrado');
    return;
  }

  document.getElementById('nombre').value = empleado.nombre;
  document.getElementById('puesto').value = empleado.puesto;
  document.getElementById('salario').value = empleado.salario;
  document.getElementById('empresaId').value = empleado.empresaId;

  const form = document.getElementById('formEditarEmpleado');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();

      empleado.nombre = document.getElementById('nombre').value;
      empleado.puesto = document.getElementById('puesto').value;
      empleado.salario = parseFloat(document.getElementById('salario').value);
      empleado.empresaId = document.getElementById('empresaId').value;

      console.log('Empleado actualizado:', empleado);
      alert('Cambios guardados (simulado)');
      window.location.href = 'listaEmpleados.html';
    });
  }
}

window.onload = async () => {
  await cargarEmpleados();
  const isEditar = window.location.pathname.includes('editarEmpleado.html');
  if (isEditar) {
    iniciarEdicion();
  } else {
    mostrarEmpleados();
  }
};

window.editar = editar;