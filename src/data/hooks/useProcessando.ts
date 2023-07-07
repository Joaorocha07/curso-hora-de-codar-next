import { useState } from "react"

export default function useProcessando() {
    const [processando, setProcessadno] = useState<boolean>(false)

    function iniciarProcessamento() {
        setProcessadno(true)
    }
    
    function finalizarProcessamento() {
        setProcessadno(false)
    }

    return {
        processando,
        iniciarProcessamento,
        finalizarProcessamento
    }
}