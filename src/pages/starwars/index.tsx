import Background from "@/components/starwars/Background";
import Personagens from "@/components/starwars/Personagens";
import useStarWars from "@/data/hooks/useStarWars";

export default function PaginaStarWars() {
    const { processando, personages, obterPersonagens } = useStarWars()

    return (
        <div className="flex justify-center items-center h-screen text-white bg-black">
            <Background />
            {processando ? (
                <div>Processando...</div>
            ) : personages.length > 0 ? (
                <Personagens personagens={personages} />
            ) : (
                <h1>Nenhum personagem encontrado!</h1>
            )}
            <button className="botao" onClick={obterPersonagens}>Clique aqui</button>
        </div>
    )
}