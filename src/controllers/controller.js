import VuelosService from "../services/service.js";

class VuelosController {
    constructor() {
        this.vuelosService = new VuelosService();
    }

    getVuelos = async (req, res) => {
        try {
            const vuelos = await this.vuelosService.getVuelos();
            res.status(200).json(vuelos);
        } catch (error) {
            res.status(500).json({ error: "Error consiguiendo los vuelos.", errorMsg: error.message });
        }
    }

    postVuelos = async (req, res) => {
        try {
            const vuelo = req.body;
            const result = await this.vuelosService.postVuelos(vuelo);
            res.status(200).json(result);
        }
        catch (error) {
            res.status(500).json({ error: "Error creando el vuelo.", errorMsg: error.message });
        }
    }

    patchVuelo = async (req, res) => {
        try {
            const { id } = req.params;
            const vuelo = req.body;
            const result = await this.vuelosService.patchVuelo(id, vuelo);
           res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: "Error actualizando el vuelo.", errorMsg: error.message });
        }
    }
}
export default VuelosController;