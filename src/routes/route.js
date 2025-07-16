import VuelosController from "../controllers/controller.js";
import express from "express";
class Router {
    constructor() {
        this.router = express.Router();
        this.vuelosController = new VuelosController();
    }

    startRoutes() {
        this.router.get("/vuelos", this.vuelosController.getVuelos);
        this.router.post("/vuelos", this.vuelosController.postVuelos);
        this.router.patch("/vuelos/:id", this.vuelosController.patchVuelo);
        return this.router;
    }
}
export default Router;