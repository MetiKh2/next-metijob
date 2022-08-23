
const AppliedCardHeader = ({title,active,setStatus}) => {
  return (
    <div onClick={()=>setStatus(title)} className={`cursor-pointer flex-1 text-sm ${active&&'border-t-4 border-t-blue-500 text-blue-500 font-bold'} border px-5 py-3 opacity-75`}>
        {title}
    </div>
  )
}

export default AppliedCardHeader