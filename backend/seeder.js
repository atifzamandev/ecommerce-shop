import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import User from './Models/userModel.js'
import products from './data/products.js'
import Product from './Models/productModel.js'
import Order from './Models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

await connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)
    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log(`DATA IMPORTED!`.green)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red)
    process.exit(1)
  }
}


const destoryData = async ()=>{
try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log(`DATA DESTROYED!`.red)
    process.exit()
    
} catch (error) {
    console.log(`${error}`.red)
    process.exit(1)
}

}

if (process.argv[2] === '-d') {
    destoryData()
} else{
    importData()
}