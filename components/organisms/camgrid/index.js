import Image from "next/image";
import { useState } from "react";
import Cam from "../../molecyles/cam";
import ChatSidebar from "../chat-sidebar";

export default function CamGrid(props) {
    const { deltagere } = props;
    const [isChatOpen, setIsChatOpen] = useState(false);
    return (
        <div className="flex flex-row bg-white bg-opacity-60">
            <div className="grid grid-flow-row grid-cols-6 gap-1 w-full pl-12 pr-2 py-1">
                {deltagere.map((deltager, i) => {
                    return (
                        <div>
                            <Cam key={i} name={deltager.name} image={deltager.image} />
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center my-auto h-32 bg-white rounded-tl-xl rounded-bl-xl cursor-pointer">

                <Image
                    src="/images/icons/chat_closed_icon.png"
                    width={40}
                    height={40}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                />

            </div>

            <ChatSidebar
                open={isChatOpen}
            />

        </div>
    )
}