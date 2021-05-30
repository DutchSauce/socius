import Image from 'next/image'

export default function Bar(props){
    const {color, activeBars} = props;

   return <Image
        src={`/images/bar-${color}-${activeBars}.png`}
        alt="Picture of the author"
        width={65}
        height={65}
      />
}