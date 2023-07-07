import useStarWars from "@/data/hooks/useStarWars"

interface PersonagensProps {
    personagens: any[]
}

export default function Personagens(props : PersonagensProps) {
    function renderizarPesonagens() {
        return (
            <ul>
                {props.personagens.map((p: any) => (
                    <li key={p.name}>{p.name}</li>
                ))}
            </ul>
        )
    }

    return (
        <div>{renderizarPesonagens()}</div>
    )
}