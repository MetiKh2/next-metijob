
const CompanyDetailsImage = ({image,description}) => {
  return (
    <div className='relative flex-1'>
    <img src={image} className='h-full w-full'/>
    <div
style={{ backgroundColor: "rgba(0,0,0,0.35)", zIndex: 2 }}
className="absolute right-0 bottom-0 left-0 h-16"
>
<p className="text-white text-lg pt-4 px-2">{description}</p>
</div>
</div>
  )
}

export default CompanyDetailsImage