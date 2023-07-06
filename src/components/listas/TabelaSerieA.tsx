interface TabelaSerieAProps {
    times: string[]
}

export default function tabelaSerieA(props : TabelaSerieAProps) {
    
    // Transformar uma string -> <li>
    // const itens: any[] = []
    // for (let i = 0; i < props.times.length; i++) {
    //     itens.push((
    //         <li className="text-xl list-decimal" key={props.times[i]}>{props.times[i]}</li>
    //     ))
    // }

    const itens2 = props.times.map((time, i) => {
        return (
            <li key={time} 
                className={
                    `text-2xl list-decimal 
                    ${i % 2 === 0 ? 'text-blue-500' : 'text-yellow-500'}`
            }>
                {time}
            </li>
        )
    })
    return (
        <ol>
            {itens2}
        </ol>
    )
}