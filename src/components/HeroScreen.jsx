import FactionCard from './FactionCard'
import '../styles/hero-screen.css'

function HeroScreen({ factions, activeFaction, onHover }) {
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
        <h1 className="hero-title">Choose Your Faction</h1>
        <p className="hero-subtitle">
          {activeData ? activeData.tagline : 'Hover to reveal your destiny'}
        </p>
      </header>

      <div className="faction-grid">
        {factions.map((faction) => (
          <FactionCard
            key={faction.id}
            faction={faction}
            isActive={activeFaction === faction.id}
            isFaded={activeFaction !== null && activeFaction !== faction.id}
            onMouseEnter={() => onHover(faction.id)}
            onMouseLeave={() => onHover(null)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroScreen
