import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const products = [
    { nome: 'Arroz', preco: 5.5, urlImagem: 'arroz.jpg', categoria: 'carboidratos', estoque: 100 },
    { nome: 'Feijao', preco: 7, urlImagem: 'feijao.jpg', categoria: 'carboidratos', estoque: 100 },
    { nome: 'Carne Bovina', preco: 30, urlImagem: 'carne.jpg', categoria: 'carnes', estoque: 50 },
    { nome: 'Frango', preco: 20, urlImagem: 'frango.jpg', categoria: 'carnes', estoque: 70 },
    { nome: 'Sabonete', preco: 3, urlImagem: 'sabonete.jpg', categoria: 'higiene', estoque: 200 },
    { nome: 'Detergente', preco: 4, urlImagem: 'detergente.jpg', categoria: 'limpeza', estoque: 150 },
    { nome: 'Papel Higiênico', preco: 15, urlImagem: 'papel.jpg', categoria: 'higiene', estoque: 100 },
    { nome: 'Alvejante', preco: 8, urlImagem: 'alvejante.jpg', categoria: 'limpeza', estoque: 80 },
  ]

  for (const p of products) {
    await prisma.product.create({ data: p })
  }
}

main().catch(e => console.error(e)).finally(() => prisma.$disconnect())
