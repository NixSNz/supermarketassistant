import { Router } from 'express'
import { PrismaClient } from '@prisma/client'

const router = Router()
const prisma = new PrismaClient()

router.get('/', async (req, res) => {
  const categoria = req.query.categoria as string | undefined
  const products = await prisma.product.findMany({
    where: categoria ? { categoria } : undefined,
  })
  res.json(products)
})

export default router
