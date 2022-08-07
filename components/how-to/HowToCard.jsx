import Link from "next/link";

const HowToCard = ({text,title,buttonText,buttonLink,number}) => {
  return (
    <div className="border p-5 my-8 bg-white">
        <div className="flex text-teal-500 items-center">
            <p className="border rounded-full px-3 py-1.5">{number}</p>
            <p className='text-lg mr-3'>{title}</p>
        </div>
        <p className={'text-xs opacity-80 leading-6 text-right p-3'}>{text}</p>
        <div className={'text-left '}>
           <span className={'bg-teal-500 inline-block p-2 text-white rounded-xl text-sm'}>
                <Link href={buttonLink}>{buttonText}</Link>
           </span>
        </div>
    </div>
  )
}

export default HowToCard