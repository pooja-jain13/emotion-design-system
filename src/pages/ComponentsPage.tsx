import { useState } from 'react'
import './ComponentsPage.css'
import Button from '../components/atoms/Button/Button'
import Card from '../components/molecules/Card'
import Pill from '../components/atoms/Pill/Pill'
import Slider from '../components/atoms/Slider/Slider'
import Notification from '../components/atoms/Notification/Notification'

const NAV_ITEMS = [
  { id: 'buttons', label: 'Buttons' },
  { id: 'pills', label: 'Pills' },
  { id: 'notifications', label: 'Notifications' },
  { id: 'slider', label: 'Slider' },
  { id: 'cards', label: 'Cards' },
]

function SideNav({ active, onSelect }: { active: string; onSelect: (id: string) => void }) {
  return (
    <nav className="comp-page__sidenav" aria-label="Component sections">
      <ul className="comp-page__sidenav-list">
        {NAV_ITEMS.map(item => (
          <li key={item.id}>
            <button
              className={`comp-page__sidenav-link${active === item.id ? ' comp-page__sidenav-link--active' : ''}`}
              onClick={() => onSelect(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default function ComponentsPage() {
  const [active, setActive] = useState('buttons')
  const [sliderVals, setSliderVals] = useState([10, 60, 100])

  return (
    <div className="comp-page__layout">
      <SideNav active={active} onSelect={setActive} />

      <div className="comp-page__root">

        {active === 'buttons' && (
          <section className="comp-page__section">
            <h2 className="comp-page__section-title">Buttons</h2>
            <div className="comp-page__section-body">
              <div className="comp-page__row">
                <Card className="card--fixed">
                  <h3>Variants</h3>
                  <div className="button-examples">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                  </div>
                </Card>
                <Card className="card--fixed">
                  <h3>With Icons</h3>
                  <div className="button-examples--icons">
                    <Button variant="primary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 10l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 21h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}>Primary</Button>
                    <Button variant="secondary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2"/></svg>}>Secondary</Button>
                    <Button variant="tertiary" startIcon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="17" r="1" fill="currentColor"/></svg>}>Tertiary</Button>
                  </div>
                </Card>
                <Card className="card--fixed">
                  <h3>Hover</h3>
                  <div className="button-examples--hover">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                  </div>
                </Card>
                <Card className="card--fixed">
                  <h3>Disabled</h3>
                  <div className="button-examples" style={{ opacity: 0.5 }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="tertiary">Tertiary</Button>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {active === 'pills' && (
          <section className="comp-page__section">
            <h2 className="comp-page__section-title">Pills</h2>
            <div className="comp-page__section-body">
              <div className="comp-page__row comp-page__row--wrap">
                <div className="comp-page__pill-item">
                  <span className="comp-page__label">Unselected</span>
                  <Pill variant="primary">Primary Pill</Pill>
                </div>
                <div className="comp-page__pill-item">
                  <span className="comp-page__label">Selected</span>
                  <Pill variant="secondary">Secondary Pill</Pill>
                </div>
                <div className="comp-page__pill-item">
                  <span className="comp-page__label">Hover</span>
                  <Pill variant="hover">Hover Pill</Pill>
                </div>
                <div className="comp-page__pill-item">
                  <span className="comp-page__label">Disabled</span>
                  <Pill variant="disabled">Disabled Pill</Pill>
                </div>
              </div>
            </div>
          </section>
        )}

        {active === 'notifications' && (
          <section className="comp-page__section">
            <h2 className="comp-page__section-title">Notifications</h2>
            <div className="comp-page__section-body">
              <div className="comp-page__col">
                <Notification variant="success" title="Success" message="Lorem ipsum dolor sit amet, consectetur adipiscing" onClose={() => {}} />
                <Notification variant="error" title="Error" message="Lorem ipsum dolor sit amet, consectetur adipiscing" onClose={() => {}} />
                <Notification variant="warning" title="Warning" message="Lorem ipsum dolor sit amet, consectetur adipiscing" onClose={() => {}} />
              </div>
            </div>
          </section>
        )}

        {active === 'slider' && (
          <section className="comp-page__section">
            <h2 className="comp-page__section-title">Slider</h2>
            <div className="comp-page__section-body">
              <div className="slider-demo">
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Enabled</span>
                  {sliderVals.map((v, i) => (
                    <Slider key={i} value={v} onChange={nv => setSliderVals(vs => vs.map((x, j) => j === i ? nv : x))} />
                  ))}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Hover</span>
                  {sliderVals.map((v, i) => <Slider key={i} value={v} forceHover />)}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Focused</span>
                  {sliderVals.map((v, i) => <Slider key={i} value={v} forceFocus />)}
                </div>
                <div className="slider-demo__row">
                  <span className="slider-demo__label">Disabled</span>
                  {sliderVals.map((v, i) => <Slider key={i} value={v} disabled />)}
                </div>
              </div>
            </div>
          </section>
        )}

        {active === 'cards' && (
          <section className="comp-page__section">
            <h2 className="comp-page__section-title">Cards</h2>
            <div className="comp-page__section-body">
              <div className="cards-demo">
                <div className="cards-demo__row">
                  <div className="card-stack">
                    <span className="comp-page__label">Primary Card</span>
                    <Card className="card--primary" title="Primary Card Heading">
                      <p className="card__subtitle">This is the secondary text inside the primary card.</p>
                    </Card>
                  </div>
                  <div className="card-stack">
                    <span className="comp-page__label">Card with Image</span>
                    <Card className="card--secondary">
                      <div className="card__media"><img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image" /></div>
                      <div className="card__content"><h3>Card with Image</h3><p className="card__subtitle">Intermediate Skill Level</p></div>
                    </Card>
                  </div>
                  <div className="card-stack">
                    <span className="comp-page__label">Card with Image Above</span>
                    <Card className="card--secondary-vertical">
                      <div className="card__media"><img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image Above" /></div>
                      <div className="card__content"><h3>Card with Image Above</h3><p className="card__subtitle">Intermediate Skill Level</p></div>
                    </Card>
                  </div>
                </div>
                <div className="cards-demo__row">
                  <div className="card-stack">
                    <span className="comp-page__label">Primary Card with Button</span>
                    <Card className="card--primary-lg" title="Primary Card Heading">
                      <p className="card__subtitle">This is the secondary text inside the primary card.</p>
                      <Button variant="primary">Primary Action</Button>
                    </Card>
                  </div>
                  <div className="card-stack">
                    <span className="comp-page__label">Card with Image + Button</span>
                    <Card className="card--secondary-lg" footer={<Button variant="primary">Primary Action</Button>}>
                      <div className="card__media"><img src="https://i.imgur.com/YSjGUsX.jpeg" alt="Card with Image + Button" /></div>
                      <div className="card__content"><h3>Card with Image + Button</h3><p className="card__subtitle">Intermediate Skill Level</p></div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  )
}
