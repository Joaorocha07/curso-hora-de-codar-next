import { useState } from "react"
import useProcessando from "./useProcessando"

export default function useStarWars() {
    const { processando, iniciarProcessamento, finalizarProcessamento } = useProcessando()
    const [personages, setPersonagens] = useState<any>([])

    async function obterPersonagens() {
        try {
            iniciarProcessamento()
            const response = await fetch('https://swapi.dev/api/people')
            const dados = await response.json()
            setPersonagens(dados.results)
        } finally {
            finalizarProcessamento()   
        }
    }

    return {
        personages,
        obterPersonagens,
        processando
    }
}