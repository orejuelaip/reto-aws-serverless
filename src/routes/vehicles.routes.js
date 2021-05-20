const controller = require("../controller/vehicles.controller");

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
    
        next();
    });

    app.get("/api/vehicles",  controller.listar);
    app.post("/api/vehicles/:id", controller.agregar);
  
}