export default function Skills({ skill, progress }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4 mb-2">
        <span className="text-sm font-medium text-gray-700 flex-shrink-0 min-w-[200px]">
          {skill}
        </span>
        <div className="flex-1 bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-600 w-12 text-right">
          {progress}%
        </span>
      </div>
    </div>
  )
}

