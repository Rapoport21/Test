import { useMemo } from 'react'
import '../styles/compare-screen.css'

function CompareBar({ label, leftVal, rightVal, leftColor, rightColor, max = 5 }) {
  return (
    <div className="compare-stat">
      <span className="compare-stat__val" style={{ color: leftColor }}>{leftVal}</span>
      <div className="compare-stat__bar">
        <div
          className="compare-stat__fill compare-stat__fill--left"
          style={{ width: `${(leftVal / max) * 100}%`, background: leftColor }}
        />
        <span className="compare-stat__label">{label}</span>
        <div
          className="compare-stat__fill compare-stat__fill--right"
          style={{ width: `${(rightVal / max) * 100}%`, background: rightColor }}
        />
      </div>
      <span className="compare-stat__val" style={{ color: rightColor }}>{rightVal}</span>
    </div>
  )
}

const verdicts = [
  { min: 90, text: 'MAXIMUM TOXICITY. RUN.', icon: '☠️' },
  { min: 70, text: 'A match made in hell.', icon: '🔥' },
  { min: 50, text: 'Codependent at best.', icon: '⚠️' },
  { min: 0, text: 'Surprisingly boring together.', icon: '😴' },
]

function CompareScreen({ left, right, onClose }) {
  const compatibility = useMemo(() => {
    const leftAvg = left.stats.reduce((s, st) => s + st.value, 0) / left.stats.length
    const rightAvg = right.stats.reduce((s, st) => s + st.value, 0) / right.stats.length
    return Math.round(((leftAvg + rightAvg) / 10) * 100)
  }, [left, right])

  const verdict = verdicts.find((v) => compatibility >= v.min)

  // Merge stat labels from both sides
  const allLabels = [...new Set([...left.stats.map(s => s.label), ...right.stats.map(s => s.label)])]

  return (
    <div className="compare-overlay" onClick={onClose}>
      <div className="compare-panel" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>X</button>

        {/* Header with both characters */}
        <div className="compare-header">
          <div className="compare-fighter">
            <img src={left.image} alt={left.name} className="compare-img" />
            <h3 className="compare-name" style={{ color: left.accentColor }}>{left.name}</h3>
          </div>

          <div className="compare-vs">
            <span className="compare-vs__text">VS</span>
            <div className="compare-compat">
              <span className="compare-compat__num">{compatibility}%</span>
              <span className="compare-compat__label">Toxic Synergy</span>
            </div>
          </div>

          <div className="compare-fighter">
            <img src={right.image} alt={right.name} className="compare-img" />
            <h3 className="compare-name" style={{ color: right.accentColor }}>{right.name}</h3>
          </div>
        </div>

        {/* Stat comparison bars */}
        <div className="compare-stats">
          {allLabels.map((label) => {
            const lStat = left.stats.find(s => s.label === label)
            const rStat = right.stats.find(s => s.label === label)
            return (
              <CompareBar
                key={label}
                label={label}
                leftVal={lStat ? lStat.value : 0}
                rightVal={rStat ? rStat.value : 0}
                leftColor={left.accentColor}
                rightColor={right.accentColor}
              />
            )
          })}
        </div>

        {/* Verdict */}
        <div className="compare-verdict">
          <span className="compare-verdict__icon">{verdict.icon}</span>
          <p className="compare-verdict__text">{verdict.text}</p>
        </div>
      </div>
    </div>
  )
}

export default CompareScreen
