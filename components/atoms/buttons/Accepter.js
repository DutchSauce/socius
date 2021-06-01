import { Check } from "react-feather"

export default function Accepter(props){
    const {titel, className} = props
    return(
        <div className={`flex flex-col justify-center items-center w-24 h-24 bg-green-600 text-white text-center rounded-xl cursor-pointer bg-opacity-30 ${className}`}>
           
           
           <Check/> 
          
            {titel}
            </div>
    
    )
}