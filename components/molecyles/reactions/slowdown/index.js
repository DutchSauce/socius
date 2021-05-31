import Bar from "../../../atoms/bar";
import { IconSlowdown } from "../../../atoms/icons";
import { Text } from "../../../atoms/text";

export default function Slowdown(){
    return(
        <div className="text-center w-44">
            <IconSlowdown />
            <Bar color="yellow" activeBars="2" />
            <br />
            <Text className="uppercase">Det går for stærkt</Text>
        </div>
    )
}
