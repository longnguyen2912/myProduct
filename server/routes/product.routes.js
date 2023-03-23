const ProductManagerController=require("../controllers/product.controllers")

module.exports=(app)=>{
    app.get("/api/testing", ProductManagerController.apiTest)
    app.get("/api/ProductManager", ProductManagerController.allProductManager)
    app.get("/api/ProductManager/:id", ProductManagerController.oneProductManager)
    app.post("/api/ProductManager", ProductManagerController.createProductManager)
    app.put("/api/ProductManager/:id", ProductManagerController.updateProductManager)
    app.delete("/api/ProductManager/:id", ProductManagerController.deleteProductManager)

}