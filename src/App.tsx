import './App.css'
import LeftNav from './components/organisms/LeftNav/LeftNav'
import { PrimaryButton, SecondaryButton, GhostButton } from './components/atoms/DownloadButton'
import Card, { PrimaryCard, CompactCard, SubtleCard } from './components/molecules/Card'
import Search from './components/molecules/Search'

function App() {
  return (
    <>
      <main className="layout__container">
        <h1>Emotion Design System — Demo</h1>
        <div className="layout__body">
          <aside className="layout__aside">
            {/* Left navigation organism */}
            <LeftNav />
          </aside>
          <section className="layout__content">
            <p>Example download button using design tokens.</p>
            <div className="search-wrap">
              <Search onSearch={(v) => console.log('search:', v)} />
            </div>
          </section>
        </div>
      {/* Carousel removed */}
      <PrimaryCard title="Primary Card">
        <p>This highlighted card uses the primary surface and border.</p>
        <div slot="footer">
          <PrimaryButton href="/assets/hero.png" filename="hero.png">Primary</PrimaryButton>
        </div>
      </PrimaryCard>

      <CompactCard title="Compact Card">
        <p>Compact cards use smaller padding and a subtle elevation.</p>
      </CompactCard>

      <SubtleCard title="Subtle Card">
        <p>This variant is low-contrast for supporting content.</p>
        <div slot="footer">
          <SecondaryButton href="/assets/hero.png" filename="hero.png">Secondary</SecondaryButton>
        </div>
      </SubtleCard>
    </main>
    </>
  )
}

export default App
