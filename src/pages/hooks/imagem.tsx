import ImagemAleatoria from "@/components/hooks/imagemAleatoria";
 
export default function PaginaImagens() {
    return (
        <div className={`
            flex justify-center items-center h-screen
            gap-5
        `}>
            <ImagemAleatoria></ImagemAleatoria>
            <ImagemAleatoria></ImagemAleatoria>
            <ImagemAleatoria></ImagemAleatoria>
        </div>
    )
}