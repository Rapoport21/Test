import { useState } from 'react'
import '../styles/character-detail.css'

function StatBar({ label, value, max = 5, accentColor }) {
  return (
    <div className="stat-row">
      <span className="stat-label">{label}</span>
      <div className="stat-bar">
        {Array.from({ length: max }, (_, i) => (
          <div
            key={i}
            className={`stat-pip ${i < value ? 'stat-pip--filled' : ''}`}
            style={i < value ? { background: accentColor, boxShadow: `0 0 8px ${accentColor}` } : {}}
          />
        ))}
      </div>
      <span className="stat-value">{value}/{max}</span>
    </div>
  )
}

const failMessages = [
  'You could not fix him.',
  'He got worse, actually.',
  'Narrator: She could not, in fact, fix him.',
  'Your therapist just quit.',
  'He changed... his Netflix password.',
  'Plot twist: he fixed you. Into a worse person.',
  'Congratulations. You played yourself.',
]

function CharacterDetail({ faction, onClose }) {
  const [fixState, setFixState] = useState('idle') // idle | shaking | failed
  const [failMsg, setFailMsg] = useState('')

  function handleFix() {
    setFixState('shaking')
    setTimeout(() => {
      setFixState('failed')
      setFailMsg(failMessages[Math.floor(Math.random() * failMessages.length)])
    }, 1500)
  }

  function handleReset() {
    setFixState('idle')
    setFailMsg('')
  }

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div
        className={`detail-panel ${fixState === 'shaking' ? 'detail-panel--shaking' : ''} ${fixState === 'failed' ? 'detail-panel--failed' : ''}`}
        style={{ '--accent': faction.accentColor }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="detail-close" onClick={onClose}>X</button>

        <div className="detail-hero">
          <img src={faction.image} alt={faction.name} className="detail-image" />
        </div>

        <div className="detail-info">
          <h2 className="detail-name">{faction.name}</h2>
          <p className="detail-tagline">{faction.tagline}</p>

          <div className="detail-stats">
            {faction.stats.map((stat) => (
              <StatBar
                key={stat.label}
                label={stat.label}
                value={stat.value}
                accentColor={faction.accentColor}
              />
            ))}
          </div>

          {fixState === 'failed' ? (
            <div className="fix-result">
              <p className="fix-fail-msg">{failMsg}</p>
              <button className="fix-btn fix-btn--retry" onClick={handleReset}>
                Try Again (You Won't Learn)
              </button>
            </div>
          ) : (
            <button
              className={`fix-btn ${fixState === 'shaking' ? 'fix-btn--loading' : ''}`}
              onClick={handleFix}
              disabled={fixState === 'shaking'}
            >
              {fixState === 'shaking' ? 'Fixing...' : 'I Can Fix Him'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default CharacterDetail
