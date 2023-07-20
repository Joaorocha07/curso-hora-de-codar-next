import { useCallback, useEffect, useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personages, setPersonagens] = useState<any>([])

    const obterPergsonagens = useCallback(async function () {
        try {
            console.log('Obter personages')
            // iniciarProcessamento()
            // const response = await fetch('https://swapi.dev/api/people')
            // const dados = await response.json()
            // setPersonagens(dados.results)
        } finally {
            finalizarProcessamento()   
        }
    }, [iniciarProcessamento, finalizarProcessamento])

    useEffect(() => {
        obterPergsonagens()
    }, [obterPergsonagens])

    return {
        personages,
        processando
    }
}