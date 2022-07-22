
const ResumePersonalInformationItem = ({name,value}) => {
  return (
    <div className='flex flex-col space-y-1'>
        <p className='font-semibold'>{name}</p>
        {value?<p className='opacity-70'>{value}</p>:<p className='text-blue-600'>وارد کنید . . .</p>}
    </div> 
    )
}

export default ResumePersonalInformationItem