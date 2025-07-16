import Factory from "../models/Factory.js";
import {schema, schemaPatch} from "../utils/validation.js";
class VuelosService {
    constructor() {
        this.vuelosModel = Factory.create(process.env.PERSISTENCE);
    }

    getVuelos = async () => {
        return await this.vuelosModel.getVuelos();
    }
    calcularDistancia = (vuelo1, vuelo2) => {
        const { xa: xa1, ya: ya1, za: za1 } = vuelo1;
        const { xa: xa2, ya: ya2, za: za2 } = vuelo2;
        return Math.sqrt(Math.pow(xa1 - xa2, 2) + Math.pow(ya1 - ya2, 2) + Math.pow(za1 - za2, 2));
    }

    postVuelos = async (vuelo) => {
        const validarVuelo = schema.validate(vuelo);
        if (validarVuelo.error) {
            return { error: validarVuelo.error };
        } else {
            const vuelos = await this.vuelosModel.getVuelos();
            if (vuelos.length > 0) {
                const vuelosEnRango = vuelos.filter(v => this.calcularDistancia(vuelo, v) < 500);
                if (vuelosEnRango.length > 0) {
                    console.log("Alerta: Colisión entre vuelos:", vuelosEnRango.map(v => v.id));
                }
            }
            return await this.vuelosModel.postVuelos(vuelo);
        }
    }

    patchVuelo = async (id, vuelo) => {
        const validarVuelo = schemaPatch.validate(vuelo);
        if (validarVuelo.error) {
            return { error: validarVuelo.error };
        } else {
             const vuelos = await this.vuelosModel.getVuelos();
            if (vuelos.length > 0) {
                const vuelosEnRango = vuelos.filter(v => this.calcularDistancia(vuelo, v) < 500);
                if (vuelosEnRango.length > 0) {
                    console.log("Alerta: Colisión entre vuelos:", vuelosEnRango.map(v => v.id));
                }
            }
            return await this.vuelosModel.patchVuelo(id, vuelo);
        }
    }
}
export default VuelosService;