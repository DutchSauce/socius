
import Afslut from "../../atoms/icons/Afslut";
import Deltager from "../../atoms/icons/Deltager";
import Lobbyknap from "../../atoms/icons/Lobbyknap";
import Mute from "../../atoms/icons/Mute";
import Pause from "../../atoms/icons/Pause";
import Video from "../../atoms/icons/Video";
import Forstaarikke from "../../molecyles/reactions/forstaarikke";
import Givermening from "../../molecyles/reactions/givermening";
import Slowdown from "../../molecyles/reactions/slowdown";
import Vildmeddet from "../../molecyles/reactions/vildmeddet";


export default function ReactionBar() {
    return (
        <div className="flex justify-between px-16 text-white font-semibold py-2.5">
            <div className="flex mt-3">
                <Slowdown />
                <Forstaarikke />
                <div className="border-r-2 border-white rounded-md h-24">
                </div>
                <Givermening />
                <Vildmeddet />
            </div> 
            <div className="grid grid-flow-col grid-cols-3 grid-rows-2 gap-2 cursor-pointer py-1">
                <Pause titel="PAUSE" />
                <Lobbyknap titel="LOBBY" />
                <Video titel="STOP VIDEO" />
                <Mute titel="UNMUTE" />
                <Deltager titel="DELGAGER" />
                <Afslut titel="AFSLUT" />  
            </div>
        </div>
    )
}