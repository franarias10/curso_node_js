const express = require('express')
const router = express.Router()


const products = [
    {
        name: 'zapatilla vans',
        price:  35000
    },
    {
        name: 'zapatilla nike',
        price:  34000
    }
]


router.get('/', function(req, res) {
    res.render('products', {products})
})


module.exports = router