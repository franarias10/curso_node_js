const express = require('express')
const app = express()
const path = require('path')
const productsRouter = require('./routes/products')
const productsApiRouter = require('./router/api/products')


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use('/products', productsRouter)
app.use('/api/products',productsApiRouter)



const server = app.listen(8000, function(){
    console.log(`listening http://localhost:${server.address().port}`)
})