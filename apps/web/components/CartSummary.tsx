interface Props {
  subtotal: number
  desconto?: number
  taxaEntrega?: number
}
export default function CartSummary({subtotal,desconto=0,taxaEntrega=0}:Props){
  const total = subtotal - desconto + taxaEntrega
  return (
    <div className="p-4 bg-gray-100 rounded">
      <div className="flex justify-between"><span>Subtotal</span><span>R$ {subtotal.toFixed(2)}</span></div>
      <div className="flex justify-between"><span>Desconto</span><span>- R$ {desconto.toFixed(2)}</span></div>
      <div className="flex justify-between"><span>Entrega</span><span>R$ {taxaEntrega.toFixed(2)}</span></div>
      <div className="flex justify-between font-bold border-t mt-2 pt-2"><span>Total</span><span>R$ {total.toFixed(2)}</span></div>
    </div>
  )
}
