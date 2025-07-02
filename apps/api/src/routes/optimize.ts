import { Router } from 'express'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'
import { greedyOptimize } from '../services/optimizer'

const router = Router()
const prisma = new PrismaClient()

const schema = z.object({
  budget: z.number(),
  categorias: z.array(z.string())
})

router.post('/', async (req, res) => {
  const parse = schema.safeParse(req.body)
  if (!parse.success) return res.status(400).json(parse.error)

  const { budget, categorias } = parse.data
  const products = await prisma.product.findMany()
  const selection = greedyOptimize({ budget, categorias, products })

  const response = selection.map(s => ({
    id: s.product.id,
    nome: s.product.nome,
    categoria: s.product.categoria,
    precoUnit: s.product.preco,
    quantidade: s.quantidade,
    urlImagem: s.product.urlImagem
  }))
  res.json({ items: response })
})

export default router
