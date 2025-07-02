import { create } from 'zustand'

interface BudgetState {
  budget: number
  categorias: string[]
  setBudget: (budget:number) => void
  setCategorias: (c:string[]) => void
}

export const useBudget = create<BudgetState>(set => ({
  budget:0,
  categorias:[],
  setBudget: budget=> set({budget}),
  setCategorias: categorias=> set({categorias})
}))
