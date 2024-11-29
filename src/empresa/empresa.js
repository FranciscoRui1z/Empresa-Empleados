class Empresa {
    constructor(id, nombre, direccion, telefono) {
        this.id = id;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    actualizarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion;
    }

    mostrarInfo() {
        return `Empresa: ${this.nombre}, Dirección: ${this.direccion}`;
    }
}
export default Empresa;
