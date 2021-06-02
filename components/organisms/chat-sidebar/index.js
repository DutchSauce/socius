import Image from "next/image";
import Message from "../../molecyles/message";

export default function ChatSidebar(props) {
    const { open } = props;

    const messages = [
        {
            userImage: "/images/profiles/1.jpg",
            message: "Hej med jer!"
        },
        {
            userImage: "/images/profiles/17.jpg",
            message: "Hej"
        },
        {
            userImage: "/images/profiles/6.jpg",
            message: "Jooo!"
        }
    ]

    return (
        <div className={`flex flex-col justify-between h-auto w-96 p-3 ${open ? null : "hidden"} bg-white transition duration-300 transform ease-in-out rounded-tl-xl rounded-bl-xl`}>
            <div>
                <h2 className="uppercase text-purple-dark text-center text-3xl font-bold">Fælles chat</h2>
                <div className="uppercase text-center text-xs">Opdateret netop nu</div>
                <div className="mt-5">
                    {messages.map((msg,i)=>{
                        return <Message 
                        key={i}
                        userImage={msg.userImage}
                        message={msg.message}
                        />
                    })}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-1">
                <input className="border-2 rounded-xl border-purple-dark p-3 bottom-0" placeholder="Skriv en besked..." />
                <div className="flex flex-col gap-1">
                    <div className="border-2 rounded-lg border-purple-dark p-1">
                        <Image
                            src="/images/icons/chat_send_icon.png"
                            width="20"
                            height="15"
                        />
                    </div>
                    <div className="border-2 rounded-lg border-purple-dark p-1">
                        <Image
                            src="/images/icons/chat_reactions_icon.png"
                            width="20"
                            height="15"
                        />
                    </div>
                </div>

            </div>


        </div>
    )
}