import { useState } from 'react'
import HeroScreen from './components/HeroScreen'
import factions from './data/factions'

function App() {
  const [activeFaction, setActiveFaction] = useState(null)

  return (
    <HeroScreen
      factions={factions}
      activeFaction={activeFaction}
      onHover={setActiveFaction}
    />
  )
}

export default App
