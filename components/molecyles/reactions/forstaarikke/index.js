import Bar from "../../../atoms/bar";
import { IconForstaarikke } from "../../../atoms/icons";
import { Text } from "../../../atoms/text";

export default function Forstaarikke(){
    return(
        <div className="text-center w-44">
            <IconForstaarikke />
            <Bar color="yellow" activeBars="1" />
            <br />
            <Text className="uppercase text-sm">Forstår ikke</Text>
        </div>
    )
}