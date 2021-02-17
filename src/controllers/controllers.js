import mongoose from 'mongoose'
import { reset } from 'nodemon'

import { ProductSchema } from '../models/models'

const Product = mongoose.model('Product', ProductSchema)

export const addnewProduct = (req, res) => {
    var newProduct = new Product(req.body)

    newProduct.save((err, Product) => {
        if (err)
            res.send(err)
        res.json(Product)
    })
}

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) => {
        if (err)
            res.send(err)
        res.json(Product)
    })

}

export const getProductWithID = (req, res) => {
    Product.findById(req.params.ProductID, (err, Product) => {
        if (err)
            res.send(err)
        res.json(Product)
    })
}
