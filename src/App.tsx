import './App.css'
import { PrimaryButton, SecondaryButton, GhostButton } from './components/atoms/DownloadButton'
import Card, { PrimaryCard, CompactCard, SubtleCard } from './components/molecules/Card'

function App() {
  return (
    <main>
      <h1>Emotion Design System — Demo</h1>
      <p>Example download button using design tokens.</p>
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
  )
}

export default App
