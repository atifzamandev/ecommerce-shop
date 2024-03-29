import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../backend/config/db.js'
dotenv.config()
import products from './data/products.js'
const port = process.env.PORT ||5000

connectDB()
const app = express()

app.get('/', (req, res)=>{
    res.send("Api is runing")
})

app.get('/api/products', (req,res)=> {
    res.json(products)
})

app.get('/api/products/:id', (req, res)=>{
    const product = products.find(p=>p._id===req.params.id)
    res.json(product)
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))