import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'

export default function Contact() {
  const { contact, links, content } = globalPageData

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-6">{contact.name}</h2>
            <Image
              src="/images/Md_Zaman_Picture.png"
              alt="Md Zaman"
              width={200}
              height={200}
              className="rounded-full mx-auto border border-gray-300 mb-6"
            />
            <p className="text-gray-700 leading-relaxed text-left font-serif">
              Hi there! You&apos;re an open-source tech enthusiast who spends most of your time coding and diving into tutorials on YouTube and Udemy. 
              Your dedication to continuous learning and hands-on practice shapes your expertise, making you both knowledgeable and adaptable in the fast-evolving tech world. 
              During the weekend I have been coaching and mentoring three (3) programs <br /> - CodeForKids <br /> - Full Stack SQA Engineering <br /> - Frontend Web Development. <br />
              A motivated and dynamic individual with in-depth knowledge of programming languages, software quality assurance (SQA) engineering, 
              and a range of development tools and APIs. Skilled in automation frameworks, coding standards, and API automation, 
              they possess expertise in full-stack QA practices and are passionate about enhancing end-to-end software testing processes.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">{contact.contactMe}</h2>
            <hr className="border-t-2 border-gray-300 mb-6" />

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <FaPhone className="text-4xl text-purple-600" />
                <span className="text-xl font-semibold">{contact.phoneNumber}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-4xl text-purple-600" />
                <a href={`mailto:${contact.email}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {contact.email}
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <FaGlobe className="text-4xl text-purple-600" />
                <Link href={links.personalWebsite} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {content.educationalWebSite}
                </Link>
              </div>
              
              <div className="flex items-center gap-4">
                <FaGlobe className="text-4xl text-purple-600" />
                <Link href={links.protfolio} className="text-xl font-semibold text-blue-600 hover:text-blue-800">
                  {content.mdPortfolio}
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center gap-6 flex-wrap pt-6 border-t border-gray-300">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-5xl text-purple-600 hover:text-purple-800 transition-colors"
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
    </div>
  )
}

