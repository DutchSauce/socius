import Forstaarikke from "../../molecyles/reactions/forstaarikke";
import Givermening from "../../molecyles/reactions/givermening";
import Slowdown from "../../molecyles/reactions/slowdown";
import Vildmeddet from "../../molecyles/reactions/vildmeddet";


export default function ReactionBar(){
    return (
        <div className="flex">
            <Slowdown />
            <Forstaarikke />
            <Givermening />
            <Vildmeddet />
        </div>
    )
}