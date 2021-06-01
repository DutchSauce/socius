import Image from "next/image";

export default function Cam(props) {
    const {
        name, image, extraguest
    } = props;

    return (
        <div className="h-32">
            {<Image src={image} width="300" height="180"  objectFit="cover" />}

        </div>
    )
}