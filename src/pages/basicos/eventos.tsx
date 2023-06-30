import Evento from "@/components/basicos/Evento";

export default function PaginaEventos() {
    return (
        <div className="
            flex justify-center items-center flex-wrap 
            gap-5 h-screen
            bg-black">
            <Evento />
            <Evento />
            <Evento />
        </div>
    )
}