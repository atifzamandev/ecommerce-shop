import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Connect: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Database connection failed! ${error.message}`)
    process.exit(1)
  }
}

export default connectDB