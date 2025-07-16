import VuelosModel from "./DAO/model.js";
class Factory {
    static create(persistence) {
        switch (persistence) {
            case 'memory':
                console.log('Persistencia en memoria');
                return new VuelosModel();
            default:
                console.log('Persistencia default')
                return new VuelosModel(); 
        }
    }
}
export default Factory;