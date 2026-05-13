import './App.css'
import { useState } from 'react'
import LeftNav from './components/organisms/LeftNav/LeftNav'
import Button from './components/atoms/Button/Button'
import { PrimaryButton, SecondaryButton, GhostButton } from './components/atoms/DownloadButton'
import Card from './components/molecules/Card'

function App() {
  const [activeTab, setActiveTab] = useState('buttons')

  return (
    <>
      <main className="layout__container">
        <h1>Emotion Design System — Demo</h1>
        <div className="layout__nav">
          <LeftNav active={activeTab} onSelect={setActiveTab} />
        </div>
        <div className="layout__body">
          <section className="layout__content">
            {activeTab === 'buttons' && (
              <>
                <Card className="card--fixed">
                  <h2>Button Component</h2>
                  <div className="button-examples">
                    <Button variant="primary">Primary (white / green)</Button>
                    <Button variant="secondary">Secondary (green / white)</Button>
                    <Button variant="tertiary">Tertiary (dark / white)</Button>
                  </div>
                </Card>

                <Card className="card--fixed">
                  <h2>With Icons</h2>
                  <div className="button-examples--icons">
                    <Button variant="primary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>Primary (icon)</Button>
                    <Button variant="secondary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/></svg>}>Secondary (icon)</Button>
                    <Button variant="tertiary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>}>Tertiary (icon)</Button>
                  </div>
                </Card>
              </>
            )}
              {activeTab === 'cards' && (
                <>
                  <div className="card-stack">
                    <h2 className="cards__label">Primary Card</h2>
                    <Card className="card--primary" title="Primary Card Heading">
                      <p className="card__subtitle">This is the secondary text inside the primary card.</p>
                    </Card>
                  </div>

                  <div className="card-stack">
                    <h2 className="cards__label">Card with Image</h2>
                    <Card className="card--secondary">
                      <div className="card__media">
                        <img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Aloe Vera" />
                      </div>
                      <div className="card__content">
                        <h3>Aloe Vera</h3>
                        <p className="card__subtitle">Intermediate Skill Level</p>
                      </div>
                    </Card>
                  </div>

                  <div className="card-stack">
                    <h2 className="cards__label">Card with Image Above</h2>
                    <Card className="card--secondary-vertical">
                      <div className="card__media">
                        <img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Aloe Vera" />
                      </div>
                      <div className="card__content">
                        <h3>Aloe Vera</h3>
                        <p className="card__subtitle">Intermediate Skill Level</p>
                      </div>
                    </Card>
                  </div>
                </>
              )}
          </section>
        </div>
      {/* Primary, Compact, and Subtle card variants removed */}
    </main>
    </>
  )
}

export default App
