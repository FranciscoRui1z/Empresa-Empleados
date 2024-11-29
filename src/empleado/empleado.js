class Empleado {
    constructor(id, nombre, puesto, salario, empresaId) {
        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.salario = salario;
        this.empresaId = empresaId;
    }

    actualizarSalario(nuevoSalario) {
        this.salario = nuevoSalario;
    }

    mostrarInfo() {
        return `Empleado: ${this.nombre}, Puesto: ${this.puesto}, Salario: $${this.salario}`;
    }
}
export default Empleado;
