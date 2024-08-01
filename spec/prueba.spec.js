const { Repository , Activity } = require("../scripts/index");

describe("la clase repository", ()=>{
    let repository;
    beforeEach(()=>{
        repository = new Repository();
    })
    it("debe ser una clase", ()=>{
        expect(typeof repository.prototype.constructor).toBe("function");
    });
    it("debe tener implementdo el metodo createActivity()", ()=>{
        expect(repository.createActivity).toBeDefined();
    });

    it("el metodo getAllActivities() debe retornar un array" , ()=>{
        expect(Array.isArray(repository.getAllActivities())).toBeTrue();
    });

});