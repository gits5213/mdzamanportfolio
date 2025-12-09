import Section from '@/components/ui/Section'
import PageHeader from '@/components/ui/PageHeader'
import Card from '@/components/ui/Card'

export default function CommunityPage() {
  const communityActivities = [
    {
      title: 'Auxiliary NYPD',
      description: 'Serving the community through auxiliary police services',
      type: 'Volunteering'
    },
    {
      title: 'Community Organizations',
      description: 'Active involvement in local community foundations and organizations',
      type: 'Community Service'
    },
    {
      title: 'Tech Meetups & Panels',
      description: 'Speaking at QA and automation meetups, sharing knowledge and best practices',
      type: 'Speaking'
    },
    {
      title: 'Open Source Contributions',
      description: 'Contributing to testing frameworks and tools',
      type: 'Open Source'
    }
  ]

  return (
    <div className="min-h-screen">
      <Section>
        <PageHeader 
          title="Community & Leadership"
          subtitle="Giving back to the community and leading by example"
        />

        {/* Community & Volunteering */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
            Community & Volunteering
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communityActivities.map((activity, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-sky-400" style={{ fontFamily: 'var(--font-heading)' }}>
                    {activity.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {activity.type}
                  </span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Values & Philosophy */}
        <Section className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-3xl">
          <Card className="p-8 md:p-12 border-sky-500/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-100" style={{ fontFamily: 'var(--font-heading)' }}>
              Values & Philosophy
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                Quality is not just about finding bugs—it&apos;s about building trust, ensuring accessibility, 
                and delivering value. My approach combines technical excellence with mentorship, community engagement, 
                and continuous learning.
              </p>
              <p className="text-base text-slate-400 leading-relaxed">
                I believe in empowering teams through knowledge sharing, establishing best practices that scale, 
                and always keeping the end user in mind. Whether it&apos;s mentoring the next generation of QA engineers, 
                contributing to open source, or serving the community, leadership means making a positive impact 
                beyond just the code.
              </p>
            </div>
          </Card>
        </Section>
      </Section>
    </div>
  )
}

