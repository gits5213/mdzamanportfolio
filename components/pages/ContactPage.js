'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaTwitter, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa'
import globalPageData from '@/data/globalPageData.json'

export default function ContactPage() {
  const { contact, links } = globalPageData
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: 'Job Opportunity'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:${contact.email}?subject=${encodeURIComponent(`Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nReason: ${formData.reason}\n\nMessage: [Your message here]`)}`
    window.location.href = mailtoLink
  }

  const socialLinks = [
    { href: links.linkedIn, icon: FaLinkedin, label: 'LinkedIn' },
    { href: links.gitHub, icon: FaGithub, label: 'GitHub' },
    { href: links.twitter, icon: FaTwitter, label: 'Twitter' },
    { href: links.youtubePlaywright, icon: FaYoutube, label: 'YouTube Playwright' },
    { href: links.youtubeCypressIO, icon: FaYoutube, label: 'YouTube CypressIO' },
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Contact / Hire Me"
          subtitle="Let's discuss how I can contribute to your team's success"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-8">
            <h2 className="text-2xl font-semibold mb-6 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-sky-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-sky-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-slate-300 mb-2">
                  Reason
                </label>
                <select
                  id="reason"
                  value={formData.reason}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 focus:border-sky-500 focus:outline-none transition-colors"
                >
                  <option value="Job Opportunity">Job Opportunity</option>
                  <option value="Training">Training</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send Message
              </button>
            </form>
          </Card>

          {/* Contact Info & Availability */}
          <div className="space-y-6">
            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Direct Contact
              </h2>
              <div className="space-y-4">
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors">
                  <FaEnvelope className="text-2xl text-sky-400" />
                  <span>{contact.email}</span>
                </a>
                <a href={`tel:${contact.phoneNumber}`} className="flex items-center gap-4 text-slate-300 hover:text-sky-400 transition-colors">
                  <FaPhone className="text-2xl text-sky-400" />
                  <span>{contact.phoneNumber}</span>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-800">
                <h3 className="text-lg font-semibold mb-4 text-slate-200" style={{ fontFamily: 'var(--font-heading)' }}>
                  Availability
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-300">Open to Full-Time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-300">Open to Contract</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-slate-300">Remote Work Available</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                Connect on Social Media
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:border-sky-500 hover:text-sky-400 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  )
                })}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

