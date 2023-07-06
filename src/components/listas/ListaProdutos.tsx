import Produto from "@/model/Produto"
import ProdutoItem from "./ProdutoItem"

interface ListasProdutosProps {
    produtos: Produto[]
    comprar: (produto : Produto) => void
}

export default function ListasProdutos(props : ListasProdutosProps) {
    return (
        <div className="flex flex-wrap gap-5">
            {props.produtos.map(produto => {
                return <ProdutoItem 
                            key={produto.id} 
                            produto={produto} 
                            comprar={props.comprar} 
                        />
            })}
        </div>
    )
}