import Cam from "../../molecyles/cam";

export default function CamGrid(props) {
    const {deltagere} = props;
    return(
        <div className="grid grid-flow grid-cols-6 grid-rows-4 gap-1 bg-white bg-opacity-60 py-1 px-12">
            {deltagere.map((deltager, i) => {
                return (
                    <Cam key={i} name={deltager.name} image={deltager.image} />
                )
            })}
        </div>
    )
}