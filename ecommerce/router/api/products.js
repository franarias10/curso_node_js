const express = require('express')
const router = express.Router()
const productMocks = require('../../utils/mocks/products')

function getProducts(req, res){

    const { query } = req.query 

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    })
}

function getProduct(req, res){

    const { productId } = req.params 

    res.status(200).json({
        data: productMocks[0],
        message: 'product retrieved'
    })
}

function postProducts(req, res){
    res.status(201).json({
        data: productMocks[0],
        message: 'product created'
    })
}

function putProducts(req, res){

    const { productId } = req.params 

    res.status(200).json({
        data: productMocks,
        message: 'product updated'
    })
}

function deleteProducts(req, res){

    const { productId } = req.params 

    res.status(200).json({
        data: productMocks[0],
        message: 'product deleted'
    })
}

router.get('/', getProducts)
router.get('/:productId', getProduct)
router.post('/', postProducts)
router.put('/:productId', putProducts)
router.delete('/:productId', deleteProducts)


module.exports = router