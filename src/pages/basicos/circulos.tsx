import Circulo from "@/components/basicos/Circulo";

export default function PaginaCirculos() {
    return (
        <div className="flex justify-around items-center h-screen bg-black">
            <Circulo text="text #1" quasePerfeito />
            <Circulo text="text #2" quasePerfeito={false} />
            <Circulo text="text #3" quasePerfeito={true} />
        </div>
    )
}