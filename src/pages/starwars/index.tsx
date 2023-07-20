import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personages } = useStarWars()

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen relative text-white">
            <Background />

            {processando ? (
                <div>Processando...</div>
            ) : personages.length > 0 ? (
                <Personagens personagens={personages} />
            ) : (
                <h1>Nenhum personagem encontrado!</h1>
            )}
        </div>
    )
}