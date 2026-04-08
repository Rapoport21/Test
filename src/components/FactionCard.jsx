import '../styles/faction-card.css'

function FactionCard({ faction, isActive, isFaded, isCompareSelected, onMouseEnter, onMouseLeave, onClick }) {
  const classes = [
    'faction-card',
    isActive ? 'faction-card--active' : '',
    isFaded ? 'faction-card--faded' : '',
    isCompareSelected ? 'faction-card--compare-selected' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classes}
      style={{ '--card-accent': faction.accentColor }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
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
