import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useBudget } from '../store'

const CATS = ['higiene','limpeza','carnes','carboidratos']

export default function BudgetForm(){
  const [budget,setBudget] = useState(0)
  const [cats,setCats] = useState<string[]>([])
  const nav = useNavigate()
  const actions = useBudget()

  function toggle(cat:string){
    setCats(prev=> prev.includes(cat)? prev.filter(c=>c!==cat): [...prev,cat])
  }
  function submit(e:React.FormEvent){
    e.preventDefault()
    actions.setBudget(budget)
    actions.setCategorias(cats)
    nav('/resultados')
  }
  return (
    <form className="p-4" onSubmit={submit}>
      <div className="mb-4">
        <label className="block mb-2">Orçamento (R$)</label>
        <input type="number" value={budget} onChange={e=>setBudget(Number(e.target.value))} className="border p-2 w-full" />
      </div>
      <div className="mb-4">
        {CATS.map(cat=> (
          <label key={cat} className="block">
            <input type="checkbox" checked={cats.includes(cat)} onChange={()=>toggle(cat)} className="mr-2" />{cat}
          </label>
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Buscar</button>
    </form>
  )
}
