import Image from "next/image";

export default function Background() {
    const url = "https://www.pixelstalk.net/wp-content/uploads/2016/06/Star-Wars-Backgrounds.jpg"
    return (
        <Image 
            src={url}
            fill
            alt="background"
            className=""
        />
    )
}