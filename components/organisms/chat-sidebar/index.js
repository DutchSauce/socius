import Image from "next/image";

export default function ChatSidebar(props) {
    const { open } = props;



    return (
        <div className={`h-auto w-96 p-3 ${open ? null : "hidden"} bg-white transition duration-300 transform ease-in-out rounded-tl-xl rounded-bl-xl`}>

            <h2 className="uppercase text-purple-dark text-center text-3xl font-bold">Fælles chat</h2>
            <div className="uppercase text-center text-xs">Opdateret netop nu</div>
            <div className="flex flex-row">
                <input className="border-2 rounded-xl border-purple-dark p-3 bottom-0" placeholder="Skriv en besked..." />
                <div className="flex flex-col">
                    <div className="border-2 rounded-lg border-purple-dark p-1">
                        <Image 
                            src="/images/icons/chat_send_icon.png"
                            width="20"
                            height="15"
                        />
                    </div>
                    <div>
                    <Image 
                            src="/images/icons/chat_send_icon.png"
                            width="20"
                            height="15"
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}