const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const port = process.env.PORT || 5000

const category = require(`./data/category.json`)
const products = require(`./data/products.json`)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/category', (req, res) => {
    res.send(category)
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productPerCategory = products.filter(perProduct => perProduct._id === id) || {}
    res.send(productPerCategory)
})

app.get('/all-products', (req, res) => {
    res.send(products)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})