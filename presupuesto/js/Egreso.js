import Dato from "./Dato.js";

class Egreso extends Dato {

    static contadorEgresos = 0;

    _data = new WeakMap();

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this.contadorEgresos++;

        this._data.set(this, {
            id: this.contadorEgresos
        });
    }

    get id() {
        return this._data.get(this).id;
    }

}

export default Egreso;