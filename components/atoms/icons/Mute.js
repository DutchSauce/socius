import Image from 'next/image'

export default function Mute(props) {
  const {titel, className} = props
  return (
    <div className="bg-white bg-opacity-50 rounded-lg text-center text-purple-dark text-xs shadow-md py-2 px-1">
      
      <Image
        src="/images/icons/unmuteicon.png"
        alt="Picture of the author"
        width={21}
        height={13}
      />
      <br />
      {titel}

    </div>
  )
}