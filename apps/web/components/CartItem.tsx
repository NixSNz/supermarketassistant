interface Props {
  nome: string
  quantidade: number
  precoUnit: number
  urlImagem: string
}
export default function CartItem({nome,quantidade,precoUnit,urlImagem}:Props){
  return (
    <div className="flex justify-between items-center py-2 border-b">
      <div className="flex items-center">
        <img src={urlImagem} alt={nome} className="w-12 h-12 mr-2 object-cover" />
        <span>{nome} <span className="text-sm text-gray-500">{quantidade}x</span></span>
      </div>
      <span>R$ {(precoUnit*quantidade).toFixed(2)}</span>
    </div>
  )
}
