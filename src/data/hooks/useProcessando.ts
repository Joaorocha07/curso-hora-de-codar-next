import { useCallback, useState } from "react"

export default function useProcessando() {
    const [processando, setProcessadno] = useState<boolean>(false)

    const iniciarProcessamento = useCallback(function () {
        setProcessadno(true)
    }, [])
    
    const finalizarProcessamento = useCallback(function () {
        setProcessadno(false)
    }, [])

    return {
        processando,
        iniciarProcessamento,
        finalizarProcessamento
    }
}