import ItemCarrinho from "@/model/ItemCarrinho";


export default function CarrinhoItem(props : ItemCarrinho) {
    function exibirComoMoeda(valor : number) {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }
    return (
        <div className={`flex items-center gap-2 rounded-full bg-blue-500`}>
            <span className={`
                flex justify-center items-center
                w-7 h-7 rounded-full bg-blue-700 p-2
            `}>
                {props.quantidade}
            </span>
            <span className="">
                {props.produto.nome}
            </span>
            <span className="pr-5">
                {exibirComoMoeda(props.produto.preco * props.quantidade)}
            </span>
        </div>
    )
}