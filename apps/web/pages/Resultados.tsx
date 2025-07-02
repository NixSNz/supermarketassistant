import useSWR from 'swr'
import { useBudget } from '../store'
import CartItem from '../components/CartItem'
import CartSummary from '../components/CartSummary'
import CouponBadge from '../components/CouponBadge'

const fetcher = (url:string, body:any)=>fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)}).then(r=>r.json())

export default function Resultados(){
  const {budget,categorias} = useBudget()
  const {data} = useSWR(['/api/optimize-list',{budget,categorias}],([url,body])=>fetcher(url,body))
  const items = data?.items || []
  const subtotal = items.reduce((s:any,i:any)=>s+i.precoUnit*i.quantidade,0)
  return (
    <div className="max-w-sm mx-auto p-4 pb-24">
      {items.map((i:any)=>(<CartItem key={i.id} {...i}/>))}
      <div className="my-4 flex justify-end"><CouponBadge/></div>
      <CartSummary subtotal={subtotal} />
      <button className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4">Escolher forma de pagamento</button>
    </div>
  )
}
