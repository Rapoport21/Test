import './css/style.css'

// TEMP TEST — REMOVE BEFORE DESIGN PHASE
const btn = document.getElementById('plumbing-btn')
const status = document.getElementById('plumbing-status')

btn.addEventListener('click', () => {
  console.log('[PLUMBING TEST] JS → DOM → CSS pipeline confirmed.')
  status.textContent = 'Plumbing test: PASSED — JS, DOM, and CSS are connected.'
  status.classList.toggle('plumbing-active')
})
// END TEMP TEST
