import { useMemo } from 'react'
import '../styles/compare-screen.css'

function StatColumn({ faction }) {
  return (
    <div className="compare-col">
      {faction.stats.map((stat) => (
        <div key={stat.label} className="compare-col__stat">
          <div className="compare-col__stat-header">
            <span className="compare-col__stat-label">{stat.label}</span>
            <span className="compare-col__stat-val">{stat.value}/5</span>
          </div>
          <div className="compare-col__bar-track">
            <div
              className="compare-col__bar-fill"
              style={{
                width: `${(stat.value / 5) * 100}%`,
                background: faction.accentColor,
                boxShadow: `0 0 8px ${faction.accentColor}`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function CompareScreen({ left, right, onClose }) {
  const { winner, loser, leftTotal, rightTotal } = useMemo(() => {
    const lTotal = left.stats.reduce((s, st) => s + st.value, 0)
    const rTotal = right.stats.reduce((s, st) => s + st.value, 0)
    // Higher total = bigger red flag = worse
    if (lTotal >= rTotal) {
      return { winner: left, loser: right, leftTotal: lTotal, rightTotal: rTotal }
    }
    return { winner: right, loser: left, leftTotal: lTotal, rightTotal: rTotal }
  }, [left, right])

  const diff = Math.abs(leftTotal - rightTotal)

  return (
    <div className="compare-overlay" onClick={onClose}>
      <div className="compare-panel" onClick={(e) => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>X</button>

        {/* Side-by-side layout */}
        <div className="compare-sides">
          {/* Left character */}
          <div className="compare-side">
            <img src={left.image} alt={left.name} className="compare-img" />
            <h3 className="compare-name" style={{ color: left.accentColor }}>{left.name}</h3>
            <StatColumn faction={left} />
          </div>

          {/* Center divider with VS */}
          <div className="compare-center">
            <span className="compare-vs__text">VS</span>
            <div className="compare-scores">
              <span className="compare-score" style={{ color: left.accentColor }}>{leftTotal}</span>
              <span className="compare-score-divider">—</span>
              <span className="compare-score" style={{ color: right.accentColor }}>{rightTotal}</span>
            </div>
            <div className="compare-verdict">
              {diff === 0 ? (
                <p className="compare-verdict__text">Equally terrible.</p>
              ) : (
                <>
                  <p className="compare-verdict__winner" style={{ color: winner.accentColor }}>{winner.name}</p>
                  <p className="compare-verdict__text">
                    {diff >= 8 ? 'is way worse.' : diff >= 4 ? 'is the bigger red flag.' : 'is slightly worse.'}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Right character */}
          <div className="compare-side">
            <img src={right.image} alt={right.name} className="compare-img" />
            <h3 className="compare-name" style={{ color: right.accentColor }}>{right.name}</h3>
            <StatColumn faction={right} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareScreen
