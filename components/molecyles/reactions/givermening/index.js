import Bar from "../../../atoms/bar";
import { IconGivermening } from "../../../atoms/icons";
import { Text } from "../../../atoms/text";

export default function Givermening(){
    return(
        <div className="text-center w-44">
            <IconGivermening />
            <Bar color="blue" activeBars="3" />
            <br />
            <Text className="uppercase">Giver mening</Text>
        </div>
    )
}