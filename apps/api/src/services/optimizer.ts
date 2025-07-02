import { Product } from '@prisma/client'

interface OptimizeInput {
  budget: number
  categorias: string[]
  products: Product[]
}

export function greedyOptimize({ budget, categorias, products }: OptimizeInput) {
  const selected: { product: Product; quantidade: number }[] = []
  let remaining = budget
  const byCategory: Record<string, Product[]> = {}
  for (const p of products) {
    if (!byCategory[p.categoria]) byCategory[p.categoria] = []
    byCategory[p.categoria].push(p)
  }
  for (const cat of categorias) {
    const itens = byCategory[cat]
    if (!itens || itens.length === 0) continue
    itens.sort((a, b) => a.preco - b.preco)
    const chosen = itens[0]
    if (chosen.preco <= remaining) {
      selected.push({ product: chosen, quantidade: 1 })
      remaining -= chosen.preco
    }
  }
  // fill remaining budget with cheapest items overall
  const sorted = products.sort((a, b) => a.preco - b.preco)
  for (const item of sorted) {
    if (item.preco <= remaining) {
      selected.push({ product: item, quantidade: 1 })
      remaining -= item.preco
    }
  }
  return selected
}
