/* 
Crea la función cargarCabecero con las siguientes características:
    Es una función flecha.
    Crea una variable llamada presupuesto y asígnale el resultado de la resta de la función
    totalIngresos() menos el contenido de la función totalEgresos().
    Crea una variable porcentajeEgreso y asígnale el resultado de la división de la función
    totalEgresos() entre el resultado de la función totalIngresos().*/

/* Para validar el funcionamiento de cargar cabecera, crea dos arreglos:*/

let ingresoTotal = {
    quincena: 9000,
    venta: 400,
};

let egresoTotal = {
    renta: 900,
    ropa: 400
};

const cargarCabecero = () => {
    const egresos = calculaEgresos();
    const ingresos = calculaIngresos();
    const presupuesto = ingresos - egresos();
    const porcentajeEgreso = egresos / ingresos();
  
/*Coloca las siguientes líneas en la función cargarCabecero: */
console.log (formatoMoneda(presupuesto));
console.log (formatoPorcentaje(porcentajeEgreso));
console.log (formatoMoneda(ingresos));
console.log (formatoMoneda(egresos));

cargarCabecero();

/* Como puedes ver, se requieren un par de funciones totalIngresos y totalEgresos, para ello,
realiza lo siguiente:
    • Crea la función totalIngresos con estas características:
        •Defínela como función flecha.
        • Declara la variable totalIngresos e inicialízala en 0.
        • Itera el arreglo ingresos en un ciclo for of. Recuerda que es necesario declarar la
        variable ingreso para poder iterar.
        • Dentro del ciclo, a la variable totalIngreso, suma cada uno de los valores de los elementos del arreglo ingresos.
        • Cuando termine de iterar, regresa la variable totalIngreso.
    • Crea la función totalEgresos con estas características:
        •Defínela como una función flecha.
        • Dentro del cuerpo de la función, declara la variable totalEgreso e inicialízala en 0.
        • Con un ciclo for, itera para cada elemento egreso del arreglo egresos y súmalo a la
        variable totalEgreso.
        • Cuando termine de iterar, retorna la variable totalEgreso. */

//Está función en la práctica solicita el de totalEgresos
//Para mayor entendimiento se modificó a calculaEgresos
const calculaEgresos = () => {
    let totalEgresos = 0;
    for (let key in egresoTotal);{
        let egreso = egresoTotal[key];
        totalEgresos = totalEgresos + egreso;
    }
        return totalEgresos;
}

//Está función en la práctica solicita el de totalIngresos
//Para mayor entendimiento se modificó a calculaIgresos
const calculaIngresos = () => {
    let totalIngresos = 0;
    for (let key in ingresoTotal);{
            let ingreso = ingresoTotal[key];
            totalIngresos = totalIngresos + ingreso;
        }
        return totalIngresos;
}        

/*Ahora, es necesario darle formato a la moneda y al porcentaje. Para ello, crea dos funciones:
    Crea la función formatoMoneda con las siguientes características:
        Créala como función flecha.
        Se debe recibir el valor que se requiere formatear.
        Utiliza la función toLocaleString, especificando el idioma, y luego un arreglo
        indicando el estilo, que en este caso sería moneda, el tipo de moneda, en el que se
        sugiere pongas el valor MXN y mínimo de dígitos decimales igual a 2.*/
    
const formatoMoneda = (number) => {
    return number.toLocaleString("es-Mx",{
        style:"currency", 
        currency:"MXN",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

formatoMoneda();
     
    /*  Crea la función formatoPorcentaje con las siguientes características:
        Créala como función flecha.
        Se debe recibir el valor que se requiere formatear.
        Utiliza la función toLocaleString, especificando el idioma que se desea utilizar.
        Posteriormente, especifica un objeto en el que indiques el estilo, para este caso será
        percent y el mínimo de dígitos decimales igual a 2.*/

const formatoPorcentaje = (number) => {
    return number.toLocaleString("es-Mx",{
        style:"percent", 
        currency:"MXN",
        });
}

formatoPorcentaje();
}
