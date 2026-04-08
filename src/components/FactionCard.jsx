import { useState, useRef } from 'react'
import '../styles/faction-card.css'

function FactionCard({ faction, isActive, isFaded, isCompareSelected, onMouseEnter, onMouseLeave, onClick }) {
  const [swiping, setSwiping] = useState(null) // 'left' | 'right' | null
  const [swipeX, setSwipeX] = useState(0)
  const startX = useRef(0)
  const dragging = useRef(false)

  const classes = [
    'faction-card',
    isActive ? 'faction-card--active' : '',
    isFaded ? 'faction-card--faded' : '',
    isCompareSelected ? 'faction-card--compare-selected' : '',
    swiping === 'left' ? 'faction-card--swipe-left' : '',
    swiping === 'right' ? 'faction-card--swipe-right' : '',
  ]
    .filter(Boolean)
    .join(' ')

  function handlePointerDown(e) {
    startX.current = e.clientX
    dragging.current = true
    setSwipeX(0)
    setSwiping(null)
  }

  function handlePointerMove(e) {
    if (!dragging.current) return
    const dx = e.clientX - startX.current
    setSwipeX(dx)
    if (dx > 40) setSwiping('right')
    else if (dx < -40) setSwiping('left')
    else setSwiping(null)
  }

  function handlePointerUp() {
    if (!dragging.current) return
    dragging.current = false

    if (swiping === 'right') {
      // "I can fix them" — open detail
      onClick()
    }
    // left swipe = reject, just snap back with animation
    setSwiping(null)
    setSwipeX(0)
  }

  const swipeStyle = dragging.current && swipeX !== 0
    ? { transform: `translateX(${swipeX * 0.3}px) rotate(${swipeX * 0.02}deg)` }
    : {}

  return (
    <div
      className={classes}
      style={{ '--card-accent': faction.accentColor, ...swipeStyle }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Warning label on hover */}
      {faction.warning && (
        <div className="faction-card__warning">
          {faction.warning}
        </div>
      )}

      {/* Swipe indicators */}
      {swiping === 'right' && <div className="faction-card__swipe-label faction-card__swipe-label--right">I CAN FIX HIM</div>}
      {swiping === 'left' && <div className="faction-card__swipe-label faction-card__swipe-label--left">NOPE</div>}

      <div className="faction-card__visual">
        {faction.image ? (
          <img src={faction.image} alt={faction.name} />
        ) : (
          <div className="faction-card__placeholder">
            {faction.emblem && (
              <svg
                className="faction-card__emblem"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                dangerouslySetInnerHTML={{ __html: faction.emblem }}
              />
            )}
          </div>
        )}
      </div>
      <h2 className="faction-card__name">{faction.name}</h2>
      <p className="faction-card__tagline">{faction.tagline}</p>
    </div>
  )
}

export default FactionCard
