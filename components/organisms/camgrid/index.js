import Image from "next/image";
import Cam from "../../molecyles/cam";

export default function CamGrid(props) {
    const { deltagere } = props;
    return (
        <div className="flex flex-row bg-white bg-opacity-60">
            <div className="grid grid-flow-row grid-cols-6 gap-1  px-12">
                {deltagere.map((deltager, i) => {
                    return (
                        <div className={deltager.role == "vært" ? "col-span-2 row-span-4" : null}>
                            <Cam key={i} name={deltager.name} image={deltager.image} />
                        </div>
                    )
                })}
            </div>
            <div className=" my-auto py-auto h-32 bg-white rounded-tl-xl rounded-bl-xl cursor-pointer">
                <Image 
                    src="/images/icons/chat_closed_icon.png"
                    width={40}
                    height={40}
                />
            </div>

        </div>
    )
}