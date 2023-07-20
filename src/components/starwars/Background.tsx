import Image from "next/image";

export default function Background() {
    return (
        <Image 
            src="https://wallpaperaccess.com/full/11801.jpg"
            fill
            alt="background"
            className="object-cover"
        />
    )
}