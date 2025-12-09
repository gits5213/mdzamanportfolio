'use client'

import { useState } from 'react'
import JavaSelenium from './projects/JavaSelenium'
import PythonSelenium from './projects/PythonSelenium'
import Protractor from './projects/Protractor'
import Cypress from './projects/Cypress'
import Webdriverio from './projects/Webdriverio'
import Restassured from './projects/Restassured'
import Supertest from './projects/Supertest'
import Appium from './projects/Appium'
import Performance from './projects/Performance'
import Playwright from './projects/Playwright'

const projectTabs = [
  { id: 0, label: 'JavaSelenium', component: JavaSelenium },
  { id: 1, label: 'PythonSelenium', component: PythonSelenium },
  { id: 2, label: 'Protractor', component: Protractor },
  { id: 3, label: 'WebDriverIO', component: Webdriverio },
  { id: 4, label: 'CypressIO', component: Cypress },
  { id: 5, label: 'Playwright', component: Playwright },
  { id: 6, label: 'RestAssured', component: Restassured },
  { id: 7, label: 'SuperTest', component: Supertest },
  { id: 8, label: 'Appium', component: Appium },
  { id: 9, label: 'Performance', component: Performance },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState(0)
  const ActiveComponent = projectTabs[activeTab].component

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        
        {/* Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center border-b border-gray-300">
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-purple-600 border-b-2 border-purple-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}

