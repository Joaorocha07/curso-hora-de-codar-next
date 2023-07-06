import { useState } from "react";
import Pergunta from "./Pergunta";

export default function Faq() {
    const [ativo, setAtivo] = useState<number>(0)

    function alternarVisibilidade(indice : number) {
        if (indice === ativo) {
            setAtivo(-1)
        } else {
            setAtivo(indice)
        }
    }

    return (
        <div className={`
            flex flex-col gap-2 w-[90%] md:w-3/4
        `}>
            <Pergunta
                indice={0} 
                aberta={ativo === 0}
                alternarVisibilidade={alternarVisibilidade} 
                pergunta="Quem descobriu o Brasil?"  
                resposta="O Brasil foi descoberto pelos portugueses, liderados por Pedro Álvares Cabral, em 22 de abril de 1500. Cabral chegou à costa brasileira durante uma expedição destinada a estabelecer relações comerciais com a Índia, que era o objetivo principal da viagem. No entanto, ao se deparar com a nova terra, Cabral a reivindicou para Portugal e deu-lhe o nome de Ilha de Vera Cruz. Posteriormente, o país passou a ser chamado de Terra de Santa Cruz e, eventualmente, Brasil." 
            />
            <Pergunta 
                indice={1}
                aberta={ativo === 1}
                alternarVisibilidade={alternarVisibilidade} 
                pergunta="O que é TypeScript?"  
                resposta="TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É uma linguagem de programação de alto nível e superset da linguagem JavaScript, o que significa que o TypeScript estende a sintaxe e os recursos do JavaScript, adicionando recursos adicionais e oferecendo um sistema de tipos estáticos opcional." 
            />
            <Pergunta 
                indice={2}
                aberta={ativo === 2}
                alternarVisibilidade={alternarVisibilidade} 
                pergunta="React é um framework?"  
                resposta="Na verdade, React não é um framework, mas sim uma biblioteca JavaScript de código aberto para criação de interfaces de usuário. Foi desenvolvido pelo Facebook e é amplamente utilizado para construir aplicativos web e móveis modernos." 
            />
            <Pergunta 
                indice={3}
                aberta={ativo === 3}
                alternarVisibilidade={alternarVisibilidade} 
                pergunta="Quais as principais funcionalidades do nextJS?"  
                resposta="O Next.js é um framework de desenvolvimento web para React que adiciona recursos e funcionalidades adicionais à biblioteca React. Ele simplifica a construção de aplicativos React escaláveis, oferecendo uma experiência de desenvolvimento otimizada." 
            />
        </div>
    )
}