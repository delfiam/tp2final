class VuelosModel {
    constructor(){
        this.vuelos = [];
    }
    
    getVuelos = async () => {
        return this.vuelos;
    }
    postVuelos = async (vuelo) =>{
        this.vuelos.push(vuelo);
        return vuelo;
    }
    patchVuelo = async (id, vuelo) => {
        const index = this.vuelos.findIndex(v => v.id === id);
        if (index !== -1) {
            this.vuelos[index] = {...this.vuelos[index], ...vuelo};
            return this.vuelos[index];
        }
        return "Error, el vuelo no existe";
    }
}
export default VuelosModel;