import {JobResultItem} from '../';
const JobsResult = ({jobs}) => {
  return (
    <div className="flex-1">
      {jobs?.map((job,i)=>(
        <JobResultItem key={i} job={job}/>
      ))}
    </div>
  )
}

export default JobsResult