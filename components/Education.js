export default function Education({ startYear, endYear, schoolName, schoolDescription }) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      <div className="col-span-1">
        <p className="text-gray-600 font-medium">
          {startYear}-{endYear}
        </p>
      </div>
      <div className="col-span-3">
        <h4 className="font-semibold text-lg mb-1">{schoolName}</h4>
        <p className="text-gray-700">{schoolDescription}</p>
      </div>
    </div>
  )
}

