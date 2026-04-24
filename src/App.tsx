import './App.css'
import { PrimaryButton, SecondaryButton, GhostButton } from './components/atoms/DownloadButton'

function App() {
  return (
    <main>
      <h1>Emotion Design System — Demo</h1>
      <p>Example download button using design tokens.</p>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <PrimaryButton href="/assets/hero.png" filename="hero.png">Primary</PrimaryButton>
        <SecondaryButton href="/assets/hero.png" filename="hero.png">Secondary</SecondaryButton>
        <GhostButton href="/assets/hero.png" filename="hero.png">Ghost</GhostButton>
      </div>
    </main>
  )
}

export default App
