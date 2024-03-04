class Dato {
    _private = new WeakMap();

    constructor(descripcion, valor) {
        this._private.set(this, {
            descripcion: descripcion,
            valor: valor
        });
    }

    get descripcion() {
        return this._private.get(this).descripcion;
    }

    set description(descripcion) {
        this._private.set(description, descripcion);
    }

    get valor() {
        return this._private.get(this).valor;
    }

    set valor(valor) {
        this._private.set(valor, valor);
    }

}

export default Dato;