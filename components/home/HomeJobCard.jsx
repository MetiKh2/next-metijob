import Link from "next/link";

const HomeJobCard = ({title,companyName,location,date,id}) => {
    date=date.split('-');
  return (
    <div className="border p-3 ">
        <div className="flex justify-between">
            <p className="text-sm text-blue-500">
                <Link href={'/jobs/'+id}>{title}</Link>
            </p>
            <p className="text-xs text-white bg-red-500 p-1 rounded-3xl">فوری</p>
        </div>
        <div className="flex text-xs mt-1 opacity-80">
            <p className="ml-1">🏠 {companyName}</p>
            <p className="ml-1">🛰️ {location}</p>
            <p  className="mr-auto"> {`${date[0]}- ${date[1]}- ${date[2].slice(0,2)}`}</p>
        </div>
    </div>
  )
}

export default HomeJobCard