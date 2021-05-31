import { Clock } from "react-feather";
import { BtnAccepter, BtnAfvis } from "../../atoms/buttons";
import { Text } from "../../atoms/text";

export default function AnmodningBar() {
    return (
        <div className="flex flex-row">
            <div className="flex justify-between w-full max-w-3xl ml-16 bg-blue-200 rounded-xl p-4">
                <div className="flex flex-col justify-center items-center">
                    <Clock color="white" size="42" />
                    <Text className="text-white">3 min. <br /> siden</Text>
                </div>
                <div>
                    <span className="text-2xl">Nyt spøgsmål fra Gitte Frandsen:</span>
                    <br />
                    <span className="text-3xl font-bold text-orange-500">Hvilken gin bruger du?</span>
                </div>
                <div className="flex flex-row">
                    <BtnAccepter titel="Accepter" className="mx-2" />
                    <BtnAfvis titel="Afvis" className="mx-2" />
                </div>
            </div>
            <div>
                <Text className="text-7xl font-sans font-bold">+3</Text>
            </div>
        </div>
    )
}