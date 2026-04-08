import FactionCard from './FactionCard'
import '../styles/hero-screen.css'

function HeroScreen({ factions, activeFaction, onHover, onSelect, compareMode, compareSlots, onToggleCompare, onShowRandomizer }) {
  const activeData = factions.find((f) => f.id === activeFaction)
  const bgColor = activeData ? activeData.bgColor : '#111'
  const accentColor = activeData ? activeData.accentColor : '#fff'

  return (
    <div
      className="hero-screen"
      style={{
        '--bg-color': bgColor,
        '--accent-color': accentColor,
      }}
    >
      <header className="hero-header">
        <h1 className="hero-title">Choose Your Red Flag</h1>
        <p className="hero-subtitle">
          {compareMode
            ? `Pick 2 to compare (${compareSlots.filter(Boolean).length}/2)`
            : activeData ? activeData.tagline : 'Swipe at your own risk'}
        </p>
      </header>

      <div className="faction-grid">
        {factions.map((faction) => (
          <FactionCard
            key={faction.id}
            faction={faction}
            isActive={activeFaction === faction.id}
            isFaded={activeFaction !== null && activeFaction !== faction.id}
            isCompareSelected={compareSlots.includes(faction.id)}
            onMouseEnter={() => onHover(faction.id)}
            onMouseLeave={() => onHover(null)}
            onClick={() => onSelect(faction.id)}
          />
        ))}
      </div>

      <div className="hero-actions">
        <button
          className={`hero-btn ${compareMode ? 'hero-btn--active' : ''}`}
          onClick={onToggleCompare}
        >
          {compareMode ? 'Cancel Compare' : 'Toxic Matchup'}
        </button>
        <button className="hero-btn" onClick={onShowRandomizer}>
          Spin the Wheel
        </button>
      </div>
    </div>
  )
}

export default HeroScreen
