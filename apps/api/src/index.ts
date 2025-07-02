import express from 'express'
import dotenv from 'dotenv'
import productsRouter from './routes/products'
import optimizeRouter from './routes/optimize'

dotenv.config()
const app = express()
app.use(express.json())

app.use('/api/products', productsRouter)
app.use('/api/optimize-list', optimizeRouter)

const port = 3000
app.listen(port, () => {
  console.log(`API running on :${port}`)
})
