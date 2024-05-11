import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import PlayerDetails from './pages/PlayerDetails'
import Header from './components/common/Header'

function App() {
  return (
    <>
      <Header />
      <main className="mt-24">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PlayerDetails />} />
        </Routes>
      </main>
    </>
  )
}

export default App
