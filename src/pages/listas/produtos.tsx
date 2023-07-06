import Carrinho from "@/components/listas/Carrinho";
import ListasProdutos from "@/components/listas/ListaProdutos";
import produtos from "@/constants/produtos";
import ItemCarrinho from "@/model/ItemCarrinho";
import Produto from "@/model/Produto";
import { useState } from "react";

export default function PaginaProdutos() {
    const [itens, setItens] = useState<ItemCarrinho[]>([])

    function adicionarProduto(produto : Produto) {
        const itemAtual = itens.find((item) => item.produto.id === produto.id) ?? 
        { quantidade: 0, produto }
        const novoItem = {...itemAtual, quantidade: itemAtual.quantidade + 1}
        const outrosItens = itens.filter((item) => item.produto)
        setItens([...outrosItens, novoItem])
    }
    return (
        <div className={`
            flex flex-col justify-center items-center h-screen bg-black text-white
        `}>
            <Carrinho itens={itens} />
            <ListasProdutos produtos={produtos} comprar={adicionarProduto} />
        </div>
    )
}