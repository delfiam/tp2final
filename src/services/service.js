import Factory from "../models/Factory.js";
import validation from "../utils/validation.js";

class VuelosService {
    constructor() {
        this.vuelosModel = Factory.create(process.env.PERSISTENCE);
    }

    getVuelos = async () => {
        return await this.vuelosModel.getVuelos();
    }

    postVuelos = async (vuelo) => {
        const validarVuelo = validation.validate(vuelo);
        if (validarVuelo.error) {
            return { error: validarVuelo.error };
        } else {
            return await this.vuelosModel.postVuelos(vuelo);
        }
    }

    patchVuelo = async (id, vuelo) => {
        const validarVuelo = validation.validate(vuelo);
        if (validarVuelo.error) {
            return { error: validarVuelo.error };
        } else {
            return await this.vuelosModel.patchVuelo(id, vuelo);
        }
    }
}
export default VuelosService;