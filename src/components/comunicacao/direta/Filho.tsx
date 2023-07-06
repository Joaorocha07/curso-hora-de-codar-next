interface IFilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props : IFilhoProps) {
    return (
        <div className={`
            flex justify-center items-center
            bg-green-500 rounded-md p-5 border border-white
        `}>
            <div className="flex justify-center gap-2 text-2xl">
                <span className="font-black">Filho</span>
                <span>{props.nome}</span>
                <span>{props.sobrenome}</span>
            </div>
        </div>
    )
}