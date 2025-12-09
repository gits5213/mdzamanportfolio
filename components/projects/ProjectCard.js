import Image from 'next/image'
import Link from 'next/link'
import projectData from '@/data/projectGlobalPage.json'

export default function ProjectCard({ title, imageUrl, children }) {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-2xl md:text-3xl font-bold text-center px-4">
              {title}
            </h3>
          </div>
        </div>
        
        <div className="p-6">
          <div className="font-mono text-gray-800 space-y-2">
            {children}
          </div>
          
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-200">
            <Link
              href={projectData.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={projectData.bitBucket}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              BitBucket
            </Link>
            <Link
              href={projectData.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Live Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

