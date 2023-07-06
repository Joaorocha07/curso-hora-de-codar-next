interface IBotoesProps {
    inc: (valor : number) => void
    dec: (valor : number) => void
}

export default function Botoes(props : IBotoesProps) {
    return (
        <div className="flex justify-between pt-2 gap-2">
            <button onClick={() => props.inc(10)} className="botao flex-1">+10</button>
            <button onClick={() => props.dec(13)} className="botao flex-1">-13</button>
        </div>
    )
}