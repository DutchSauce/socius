import { Clock } from "react-feather";
import { BtnAccepter, BtnAfvis } from "../../atoms/buttons";
import { Text } from "../../atoms/text";

export default function AnmodningBar() {
    return (
        <div className="flex flex-row text-white py-1">
            <div className="flex justify-between w-full max-w-3xl ml-16 bg-white bg-opacity-25 rounded-xl p-4">
                <div className="flex flex-col justify-center items-center">
                    <Clock color="white" size="42" />
                    <Text className="text-white uppercase">3 min. <br /> siden</Text>
                </div>
                <div>
                    <span className="text-1xl uppercase">Nyt spøgsmål fra Gitte Frandsen:</span>
                    <br />
                    <span className="text-3xl font-bold text-orange-light">Hvilken gin bruger du?</span>
                </div>
                <div className="flex flex-row">
                    <BtnAccepter titel="BESVARET" className="mx-2" />
                    <BtnAfvis titel="AFVIS" className="mx-2" />
                </div>
            </div>
            <div className="flex items-end">
                <Text className="text-6xl font-sans font-bold opacity-25">+3</Text>
            </div>
        </div>
    )
}