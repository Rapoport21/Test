import { useState, useEffect, useRef } from 'react'
import '../styles/randomizer.css'

function Randomizer({ factions, onClose, onSelect }) {
  const [spinning, setSpinning] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [result, setResult] = useState(null)
  const intervalRef = useRef(null)

  function spin() {
    setSpinning(true)
    setResult(null)

    let speed = 60
    let ticks = 0
    const totalTicks = 20 + Math.floor(Math.random() * 10)
    const finalIndex = Math.floor(Math.random() * factions.length)

    function tick() {
      ticks++
      setCurrentIndex((prev) => (prev + 1) % factions.length)

      if (ticks >= totalTicks) {
        setCurrentIndex(finalIndex)
        setSpinning(false)
        setResult(factions[finalIndex])
        return
      }

      // Slow down progressively
      speed = 60 + (ticks / totalTicks) * 300
      intervalRef.current = setTimeout(tick, speed)
    }

    intervalRef.current = setTimeout(tick, speed)
  }

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current)
    }
  }, [])

  const current = factions[currentIndex]

  return (
    <div className="randomizer-overlay" onClick={onClose}>
      <div className="randomizer-panel" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>X</button>

        <h2 className="randomizer-title">Wheel of Bad Decisions</h2>
        <p className="randomizer-subtitle">Let fate choose your red flag</p>

        <div
          className={`randomizer-display ${spinning ? 'randomizer-display--spinning' : ''} ${result ? 'randomizer-display--result' : ''}`}
          style={{ '--slot-accent': current.accentColor }}
        >
          <div className="randomizer-slot">
            <img src={current.image} alt={current.name} className="randomizer-img" />
            <div className="randomizer-slot__info">
              <h3 className="randomizer-slot__name">{current.name}</h3>
              <p className="randomizer-slot__tagline">{current.tagline}</p>
            </div>
          </div>
        </div>

        {result ? (
          <div className="randomizer-result">
            <p className="randomizer-result__text">Your fate is sealed.</p>
            <div className="randomizer-actions">
              <button className="hero-btn" onClick={() => onSelect(result.id)}>
                View Stats
              </button>
              <button className="hero-btn" onClick={spin}>
                Spin Again (Denial)
              </button>
            </div>
          </div>
        ) : (
          <button
            className={`randomizer-spin-btn ${spinning ? 'randomizer-spin-btn--disabled' : ''}`}
            onClick={spin}
            disabled={spinning}
          >
            {spinning ? 'Deciding your fate...' : 'SPIN'}
          </button>
        )}
      </div>
    </div>
  )
}

export default Randomizer
