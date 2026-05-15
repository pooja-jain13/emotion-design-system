import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/organisms/NavBar/NavBar'
import ComponentsPage from './pages/ComponentsPage'
import DocumentationPage from './pages/DocumentationPage'
import ReleasesPage from './pages/ReleasesPage'

function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="layout__container">
      <h1>Emotion Design System</h1>
      {children}
    </main>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PageLayout><ComponentsPage /></PageLayout>} />
        <Route path="/documentation" element={<PageLayout><DocumentationPage /></PageLayout>} />
        <Route path="/releases" element={<PageLayout><ReleasesPage /></PageLayout>} />
      </Routes>
    </>
  )
}

export default App
