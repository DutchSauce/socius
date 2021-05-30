import Bar from "../../../atoms/bar";
import { IconGivermening } from "../../../atoms/icons";
import { Text } from "../../../atoms/text";

export default function Givermening(){
    return(
        <div className="text-center w-96">
            <IconGivermening />
            <Bar color="yellow" activeBars="1" />
            <br />
            <Text>Giver mening</Text>
        </div>
    )
}