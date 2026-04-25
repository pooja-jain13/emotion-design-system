import './App.css'
import { PrimaryButton, SecondaryButton, GhostButton } from './components/atoms/DownloadButton'
import Card, { PrimaryCard, CompactCard, SubtleCard } from './components/molecules/Card'
import Search from './components/molecules/Search'
import Carousel from './components/molecules/Carousel'
import NavBar from './components/organisms/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <main>
      <h1>Emotion Design System — Demo</h1>
      <p>Example download button using design tokens.</p>
      <div style={{ margin: '16px 0' }}>
        <Search onSearch={(v) => console.log('search:', v)} />
      </div>

      <Carousel
        items={[
          {
            image: 'https://i.imgur.com/RkGx3O8.jpeg',
            title: 'Curious Robot',
            caption: 'A playful robot exploring its surroundings.',
          },
          {
            image: 'https://i.imgur.com/7PKPPMo.jpeg',
            title: 'Robo-Scout',
            caption: 'An autonomous scout navigating the wild.',
          },
          {
            image: 'https://i.imgur.com/JwWlREn.png',
            title: 'Service Bot',
            caption: 'A helpful service robot ready to assist.',
          },
        ]}
        autoPlay
        interval={4500}
      />
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
