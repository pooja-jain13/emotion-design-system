import './App.css'
import { useState } from 'react'
import LeftNav from './components/organisms/LeftNav/LeftNav'
import Button from './components/atoms/Button/Button'
import Card from './components/molecules/Card'
import Pill from './components/atoms/Pill/Pill'
import Slider from './components/atoms/Slider/Slider'
import Notification from './components/atoms/Notification/Notification'

function App() {
  const [activeTab, setActiveTab] = useState('buttons')
  const [sliderVals, setSliderVals] = useState([10, 60, 100])

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

                <Card className="card--fixed">
                  <h2>Hover</h2>
                  <div className="button-examples--hover">
                    <Button variant="primary">Primary (white / green)</Button>
                    <Button variant="secondary">Secondary (green / white)</Button>
                    <Button variant="tertiary">Tertiary (dark / white)</Button>
                  </div>
                </Card>

                <Card className="card--fixed">
                  <h2>Disabled</h2>
                  <div className="button-examples" style={{ opacity: 0.7 }}>
                    <Button variant="primary">Primary (white / green)</Button>
                    <Button variant="secondary">Secondary (green / white)</Button>
                    <Button variant="tertiary">Tertiary (dark / white)</Button>
                  </div>
                </Card>
              </>
            )}
            {activeTab === 'pills' && (
              <>
                <div>
                  <h2>Unselected</h2>
                  <Pill variant="primary">Primary Pill</Pill>
                </div>
                <div>
                  <h2>Selected</h2>
                  <Pill variant="secondary">Secondary Pill</Pill>
                </div>
                <div>
                  <h2>Hover</h2>
                  <Pill variant="hover">Hover Pill</Pill>
                </div>
                <div>
                  <h2>Disabled</h2>
                  <Pill variant="disabled">Disabled Pill</Pill>
                </div>
              </>
            )}
            {activeTab === 'notification' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <Notification
                  variant="success"
                  title="Success"
                  message="Lorem ipsum dolor sit amet, consectetur adipiscing"
                  onClose={() => {}}
                />
                <Notification
                  variant="error"
                  title="Error"
                  message="Lorem ipsum dolor sit amet, consectetur adipiscing"
                  onClose={() => {}}
                />
                <Notification
                  variant="warning"
                  title="Warning"
                  message="Lorem ipsum dolor sit amet, consectetur adipiscing"
                  onClose={() => {}}
                />
              </div>
            )}
            {activeTab === 'slider' && (
              <div className="slider-demo">
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Enabled</span>
                  {sliderVals.map((v, i) => (
                    <Slider
                      key={i}
                      value={v}
                      onChange={nv => setSliderVals(vs => vs.map((x, j) => j === i ? nv : x))}
                    />
                  ))}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Hover</span>
                  {sliderVals.map((v, i) => (
                    <Slider key={i} value={v} forceHover />
                  ))}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Focused</span>
                  {sliderVals.map((v, i) => (
                    <Slider key={i} value={v} forceFocus />
                  ))}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Disabled</span>
                  {sliderVals.map((v, i) => (
                    <Slider key={i} value={v} disabled />
                  ))}
                </div>
              </div>
            )}
              {activeTab === 'cards' && (
                <div className="cards-demo">
                  <div className="cards-demo__row">
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
                          <img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image" />
                        </div>
                        <div className="card__content">
                          <h3>Card with Image</h3>
                          <p className="card__subtitle">Intermediate Skill Level</p>
                        </div>
                      </Card>
                    </div>

                    <div className="card-stack">
                      <h2 className="cards__label">Card with Image Above</h2>
                      <Card className="card--secondary-vertical">
                        <div className="card__media">
                          <img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image Above" />
                        </div>
                        <div className="card__content">
                          <h3>Card with Image Above</h3>
                          <p className="card__subtitle">Intermediate Skill Level</p>
                        </div>
                      </Card>
                    </div>
                  </div>

                  <div className="cards-demo__row">
                    <div className="card-stack">
                      <h2 className="cards__label">Primary Card with Button</h2>
                      <Card className="card--primary-lg" title="Primary Card Heading">
                        <p className="card__subtitle">This is the secondary text inside the primary card.</p>
                        <Button variant="primary">Primary Action</Button>
                      </Card>
                    </div>

                    <div className="card-stack">
                      <h2 className="cards__label">Card with Image + Button</h2>
                      <Card className="card--secondary-lg" footer={<Button variant="primary">Primary Action</Button>}>
                        <div className="card__media">
                          <img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image + Button" />
                        </div>
                        <div className="card__content">
                          <h3>Card with Image + Button</h3>
                          <p className="card__subtitle">Intermediate Skill Level</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              )}
          </section>
        </div>
      {/* Primary, Compact, and Subtle card variants removed */}
    </main>
    </>
  )
}

export default App
