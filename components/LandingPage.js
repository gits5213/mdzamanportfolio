import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'
import { getImagePath } from '@/app/utils/imagePath'

export default function LandingPage() {
  const { links, content } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  return (
    <div className="gradient-landing min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-8">
          <Image
            src={getImagePath("/images/Md_Zaman_Picture.png")}
            alt="Md Zaman"
            width={200}
            height={200}
            className="rounded-full mx-auto border-4 border-white shadow-xl"
            priority
          />
        </div>
        
        <div className="bg-black bg-opacity-80 rounded-lg p-8 md:p-12 shadow-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {content.fullStackQaEngineer}
          </h1>
          
          <div className="text-white text-lg md:text-xl space-y-4 mb-8">
            <p>{content.aboutMe}</p>
            
            <div className="mt-6">
              <p className="font-semibold text-yellow-300 mb-3">Key Highlights:</p>
              <ul className="list-none space-y-2 text-left">
                <li className="flex items-start">
                  <span className="mr-2">☞</span>
                  <span>Proven track record in mentoring QA Analysts and Technical Support Engineers.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☞</span>
                  <span>Extensive experience with Agile/Scrum, SAFe methodologies, Shift-left, & SDLC/STLC processes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☞</span>
                  <span>Expert in full-stack automation, technical documentation, and hands-on coding.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☞</span>
                  <span>Adept at delivering presentations, ensuring compliance with public law, and maintaining relevance to business needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">☞</span>
                  <span>Strong analytical, communication, problem-solving skills, and ensuring attention to detail & delivering exceptional customer service.</span>
                </li>
              </ul>
            </div>
            
            <p className="mt-6 text-yellow-300">
              Let&apos;s connect and discuss how my expertise can contribute to the success of your projects! 🚀
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 flex-wrap mt-8">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link text-5xl"
                  aria-label={social.label}
                >
                  <Icon />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

