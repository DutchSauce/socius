import Bar from "../../../atoms/bar";
import { IconVildmeddet } from "../../../atoms/icons";
import { Text } from "../../../atoms/text";

export default function Vildmeddet(){
    return(
        <div className="text-center w-72">
            <IconVildmeddet />
            <Bar color="green" activeBars="4" />
            <br />
            <Text>Er vild med det</Text>
        </div>
    )
}