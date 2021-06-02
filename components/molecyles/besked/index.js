import Image from "next/image";

export default function Besked(props){
    const { userImage, message, name } = props;
    return (
        <div className="flex flex-row my-2 items-center">
            
            <div className="p-2 bg-orange-light text-white w-full rounded-lg ml-2 mr-2 text-right shadow-md">
               <div className="opacity-60 text-xs">
                {name}
                </div>
                {message}
            </div>
            <div className="rounded-full h-8 w-8 relative flex-shrink-0 shadow-md">
                <Image
                    src={userImage}
                    objectFit="cover"
                    layout="fill"
                    className="rounded-full flex-shrink-0"

                />
            </div>
        </div>
    )
}