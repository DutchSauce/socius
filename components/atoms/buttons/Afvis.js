import { X } from "react-feather"

export default function Afvis(props){
    const {titel, className} = props
    return(
        <div className={`flex flex-col justify-center items-center w-24 h-24 bg-red-500 text-white text-center rounded-xl cursor-pointer bg-opacity-30 ${className}`}>
           
           <div className="rounded-full border-white border-2">
           <X /> 
              </div>     
            {titel}
            </div>
    
    )
}