import Image from 'next/image'

export default function Lobbyknap(props) {
  const {titel, className} = props
  return (
    <div className="bg-purple-dark bg-opacity-50 rounded-lg text-center text-xs shadow-md py-2 px-1">
      
      <Image
        src="/images/icons/lobbyicon.png"
        alt="Picture of the author"
        width={21}
        height={13}
      />
      <br />
      {titel}

    </div>
  )
}