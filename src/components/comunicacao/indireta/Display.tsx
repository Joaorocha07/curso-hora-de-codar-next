interface IDisplayProps {
    valor: number
}

export default function Display(props : IDisplayProps) {
    return (
        <div className={`
            flex justify-center items-center flex-1
            bg-zinc-800 text-5xl font-black rounded-md p-6
        `}>
            {props.valor}
        </div>
    )
}