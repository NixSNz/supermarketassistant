import { greedyOptimize } from '../src/services/optimizer'
import { Product } from '@prisma/client'
import { describe, it, expect } from 'vitest'

describe('greedyOptimize', () => {
  const products: Product[] = [
    { id:1,nome:'A',preco:10,urlImagem:'',categoria:'cat1',estoque:10 },
    { id:2,nome:'B',preco:20,urlImagem:'',categoria:'cat2',estoque:10 },
    { id:3,nome:'C',preco:5,urlImagem:'',categoria:'cat1',estoque:10 },
  ]

  it('respects budget', () => {
    const res = greedyOptimize({ budget:15, categorias:['cat1','cat2'], products })
    const total = res.reduce((s,r)=>s+r.product.preco,0)
    expect(total).toBeLessThanOrEqual(15)
  })

  it('handles missing categories', () => {
    const res = greedyOptimize({ budget:50, categorias:['unknown'], products })
    expect(res.length).toBeGreaterThan(0)
  })
})
