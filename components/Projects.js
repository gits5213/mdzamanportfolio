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
import styles from '@/styles/pages/projects.module.css'

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
    <div className={styles.projectsContainer}>
      <div className={styles.projectsContent}>
        <h1 className={styles.pageTitle}>My Projects</h1>
        
        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsWrapper}>
            {projectTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${styles.tabButton} ${
                  activeTab === tab.id
                    ? styles.tabButtonActive
                    : styles.tabButtonInactive
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className={styles.contentSection}>
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}

