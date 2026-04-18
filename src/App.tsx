import './App.css'
import DownloadButton from './components/atoms/DownloadButton/DownloadButton'

function App() {
  return (
    <main>
      <h1>Emotion Design System — Demo</h1>
      <p>Example download button using design tokens.</p>
      <DownloadButton href="/assets/hero.png" filename="hero.png">
        Download Hero
      </DownloadButton>
    </main>
  )
}

export default App
