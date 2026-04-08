import { useState } from 'react'
import HeroScreen from './components/HeroScreen'
import CharacterDetail from './components/CharacterDetail'
import CompareScreen from './components/CompareScreen'
import Randomizer from './components/Randomizer'
import factions from './data/factions'

function App() {
  const [activeFaction, setActiveFaction] = useState(null)
  const [selectedFaction, setSelectedFaction] = useState(null)
  const [compareMode, setCompareMode] = useState(false)
  const [compareSlots, setCompareSlots] = useState([null, null])
  const [showRandomizer, setShowRandomizer] = useState(false)

  const selectedData = factions.find((f) => f.id === selectedFaction)

  function handleSelect(id) {
    if (compareMode) {
      setCompareSlots((prev) => {
        if (prev[0] === null) return [id, null]
        if (prev[0] === id) return [null, null]
        return [prev[0], id]
      })
    } else {
      setSelectedFaction(id)
    }
  }

  function resetCompare() {
    setCompareSlots([null, null])
    setCompareMode(false)
  }

  const compareFactions = compareSlots
    .map((id) => factions.find((f) => f.id === id))
    .filter(Boolean)

  return (
    <>
      <HeroScreen
        factions={factions}
        activeFaction={activeFaction}
        onHover={setActiveFaction}
        onSelect={handleSelect}
        compareMode={compareMode}
        compareSlots={compareSlots}
        onToggleCompare={() => { setCompareMode(!compareMode); setCompareSlots([null, null]) }}
        onShowRandomizer={() => setShowRandomizer(true)}
      />

      {selectedData && !compareMode && (
        <CharacterDetail
          faction={selectedData}
          onClose={() => setSelectedFaction(null)}
        />
      )}

      {compareMode && compareFactions.length === 2 && (
        <CompareScreen
          left={compareFactions[0]}
          right={compareFactions[1]}
          onClose={resetCompare}
        />
      )}

      {showRandomizer && (
        <Randomizer
          factions={factions}
          onClose={() => setShowRandomizer(false)}
          onSelect={(id) => { setShowRandomizer(false); setSelectedFaction(id) }}
        />
      )}
    </>
  )
}

export default App
