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
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(ingresos);
    document.getElementById("egresos").innerHTML = formatoMoneda(egresos);
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

const cargarIngresos = () => {
    let ingresosHTML = "";
    ingresoTotal.forEach((ingreso) => {
        ingresosHTML = ingresosHTML + crearIngresoHTML(ingreso);
    });
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML = "";
    ingresoHTML += "<div class=\"elemento limpiarEstilos\">\n";
    ingresoHTML += "    <div class=\"elemento_descripcion\">" + ingreso.descripcion + "</div>\n";
    ingresoHTML += "        <div class=\"derecha limpiarEstilos\">\n";
    ingresoHTML += "            <div class=\"elemento_valor\">" + formatoMoneda(ingreso.valor) + "</div>\n";
    ingresoHTML += "            <div class=\"elemento_eliminar\">\n";
    ingresoHTML += "            <button class=\"elemento_eliminar--btn\" onclick=\"eliminaIngreso(" + ingreso.id + ")\">\n";
    ingresoHTML += "                 <i class=\"bi bi-x-circle-fill\"></i>\n";
    ingresoHTML += "            </button>\n";
    ingresoHTML += "        </div>\n";
    ingresoHTML += "    </div>\n";
    ingresoHTML += "</div>\n";
    return ingresoHTML;
}

const cargarEgresos = () => {
    let egresosHTML = "";
    egresoTotal.forEach((egreso) => {
        egresosHTML = egresosHTML + crearEgresoHTML(egreso);
    });
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) => {
    let egresoHTML = "";
    egresoHTML += "<div class=\"elemento limpiarEstilos\">\n";
    egresoHTML += "    <div class=\"elemento_descripcion\">" + egreso.descripcion + "</div>\n";
    egresoHTML += "        <div class=\"derecha limpiarEstilos\">\n";
    egresoHTML += "            <div class=\"elemento_valor\">" + formatoMoneda(egreso.valor) + "</div>\n";
    egresoHTML += "            <div class=\"elemento_eliminar\">\n";
    egresoHTML += "            <button class=\"elemento_eliminar--btn\" onclick=\"eliminaEgreso(" + egreso.id + ")\">\n";
    egresoHTML += "                 <i class=\"bi bi-x-circle-fill\"></i>\n";
    egresoHTML += "            </button>\n";
    egresoHTML += "        </div>\n";
    egresoHTML += "    </div>\n";
    egresoHTML += "</div>\n";
    return egresoHTML;
}

const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

const eliminaEgreso = (id) => {
    const indiceEliminar = egresoTotal.findIndex((egreso) => egreso.id == id);
    egresoTotal.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

const eliminaIngreso = (id) => {
    const indiceEliminar = ingresoTotal.findIndex((ingreso) => ingreso.id == id);
    ingresoTotal.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const agregarDato = () => {
    const tipo = document.getElementById("tipo").value;
    const descripcion = document.getElementById("descripcion").value;
    const valor = document.getElementById("valor").valueAsNumber;
    if (tipo && descripcion && valor && valor > 0) {
        if (tipo == "ingresos") {
            ingresoTotal.push(new Ingreso(descripcion, valor));
        } else if (tipo == "egresos") {
            egresoTotal.push(new Egreso(descripcion, valor));
        }
        document.getElementById("forma").reset();
        cargarApp();
    } else {
        alert("Captura toda la información");
    }

}

window.cargarApp = cargarApp;
window.eliminaEgreso = eliminaEgreso;
window.eliminaIngreso = eliminaIngreso;
window.agregarDato = agregarDato;