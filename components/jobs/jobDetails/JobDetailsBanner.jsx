import Image from 'next/image';
import { baseUrl } from '../../../api/api';
const JobDetailsBanner = ({logo,companyName,category,website}) => {
  return (
    <div className='flex p-5 bg-white '>
        <Image src={`${baseUrl}/Companies/thumb/${logo}`} width={80} height={80}/>
        <div className='flex flex-col mr-3'>
            <p className='text-lg font-bold'>{companyName}</p>
            <p  className='text-sm my-2'>{category}</p>
            <a href={website} target='_blank' className='text-sm opacity-60'>{website}</a>
        </div>
    </div>
  )
}

export default JobDetailsBanner