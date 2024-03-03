import Dato from "./Dato.js";

class Ingreso extends Dato {

    static contadorIngresos = 0;

    _data = new WeakMap();

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.contadorIngresos++;
        this._data.set(this, {
            id: this.contadorIngresos
        });
    }

    get id() {
        return this._data.get(this).id;
    }

}

export default Ingreso;