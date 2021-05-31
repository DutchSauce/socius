import Cam from "../../molecyles/cam";

export default function CamGrid(props) {
    const {deltagere} = props;
    return(
        <div className="grid grid-flow-row grid-cols-6 gap-1 bg-white bg-opacity-60 px-12">
            {deltagere.map((deltager, i) => {
                return (
                    <div className={deltager.role == "vært" ? "col-span-2 row-span-4":null}>
                    <Cam key={i} name={deltager.name} image={deltager.image} />
                    </div>
                )
            })}
        </div>
    )
}