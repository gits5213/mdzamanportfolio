export default function Experience({ startYear, endYear, jobName, jobDescription }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="col-span-1">
        <p className="text-gray-300 font-medium">
          {startYear}-{endYear}
        </p>
      </div>
      <div className="col-span-3">
        <h4 className="font-semibold text-lg mb-1 text-white">{jobName}</h4>
        <p className="text-gray-300 text-justify pr-4">{jobDescription}</p>
      </div>
    </div>
  )
}

