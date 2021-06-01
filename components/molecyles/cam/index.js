import Image from "next/image";

export default function Cam(props) {
    const {
        name, image, extraguest
    } = props;

    return (
        <div className="h-32 bg-red-600 relative w-full">
            {/* {<Image src={image}  objectFit="cover" layout="fill" />} */}
            <div className="bg-white bg-opacity-50 absolute bottom-0 left-0 block w-full px-1">
                <div className="flex justify-between">
                    <span className="text-xs my-auto">
                        {name}
                    </span>
                    <span className="my-auto">
                        <Image
                            src="/images/icons/deltagericon.png"
                            alt="Picture of the author"
                            width={21}
                            height={13}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}