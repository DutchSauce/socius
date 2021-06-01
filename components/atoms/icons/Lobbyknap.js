import Image from 'next/image'

export default function Lobbyknap(props) {
  const {titel, className} = props
  return (
    <div className="bg-purple-dark bg-opacity-50 rounded-lg text-center text-xs shadow-md">
      
      <Image
        src="/images/icons/lobbyicon.png"
        alt="Picture of the author"
        width={32}
        height={21}
      />
      <br />
      {titel}

    </div>
  )
}