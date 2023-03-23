const ProductManager = require("../models/product.model")

module.exports.apiTest = (req, res)=> {
    res.json({message: "Product Manager is communicating"})
}

module.exports.allProductManager = (req, res)=> {
    ProductManager.find()
    .then(proList=> res.json(proList))
    .catch(err=>res.status(400).json(err))
}

module.exports.oneProductManager = (req, res)=> {
    ProductManager.findOne({_id: req.params.id})
    .then(oneProduct=> res.json(oneProduct))
    .catch(err=>res.status(400).json(err))
}

module.exports.createProductManager = (req, res)=> {
    const newPro = req.body
    ProductManager.create(newPro)
    .then(addedPro => res.json(addedPro))
    .catch(err=>res.status(400).json(err))
}

module.exports.updateProductManager = (req, res)=> {
    ProductManager.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedPro=> res.json(updatedPro))
        .catch(err=>res.status(400).json(err))
}

module.exports.deleteProductManager = (req, res)=> {
    ProductManager.deleteOne({_id: req.params.id})
    .then(message=>res.json(message))
    .catch(err=>res.status(400).json(err))
}