import Ingreso from "./Ingreso.js";
import Egreso from "./Egreso.js";

const ingresoTotal = [
    new Ingreso("Salario", 20000),
    new Ingreso("Venta Auto", 50000)
];

const egresoTotal = [
    new Egreso("Renta", 4000),
    new Egreso("Ropa", 800)
];

const cargarCabecero = () => {
    const egresos = calculaEgresos();
    const ingresos = calculaIngresos();
    const presupuesto = ingresos - egresos;
    const porcentajeEgreso = egresos / ingresos;
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(ingresos));
    console.log(formatoMoneda(egresos));
}

// esta funcion en la practica el nombre original es totalEgresos
// el nombre se modifico para tener una mejor descripcion de lo que realmente hace
const calculaEgresos = () => {
    let totalEgresos = 0;
    egresoTotal.forEach((egreso) => {
        totalEgresos = totalEgresos + egreso.valor;
    });
    return totalEgresos;
}

// esta funcion en la practica el nombre original es totalIngresos
// el nombre se modifico para tener una mejor descripcion de lo que realmente hace
const calculaIngresos = () => {
    let totalIngresos = 0;
    ingresoTotal.forEach((ingreso) => {
        totalIngresos = totalIngresos + ingreso.valor;
    });
    return totalIngresos;
}

const formatoMoneda = (number) => {
    return number.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

const formatoPorcentaje = (number) => {
    return number.toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

window.cargarCabecero = cargarCabecero;