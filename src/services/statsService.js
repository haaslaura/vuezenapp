import dataTest from '@/data/dataTest.json'
const USE_TEST_DATA = false // 🔁 Set to true to display test data


const STORAGE_KEY = 'vuezen_stats'

/**
 * Initialise stats in localStorage if they don't exist
 */
function initStats() {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const baseStats = {
      history: [], // every pause recorded here
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(baseStats))
  }
}

/**
 * Adds a new pause (calm or breathing)
 * @param {string} type - 'calm' or 'breathing'
 */
export function logBreak(type) {
  initStats()

  const stats = JSON.parse(localStorage.getItem(STORAGE_KEY))
  const now = new Date()

  stats.history.push({
    type,
    timestamp: now.toISOString(),
  })

  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats))
}

/**
 * Returns statistics grouped by day
 * @returns {Object} - Example : { Monday: 2, Tuesday: 0, ... }
 */
export function getBreaksPerDay() {
  initStats()

  const source = USE_TEST_DATA ? dataTest : JSON.parse(localStorage.getItem(STORAGE_KEY))

  const counts = {
    Lun: 0,
    Mar: 0,
    Mer: 0,
    Jeu: 0,
    Ven: 0,
    Sam: 0,
    Dim: 0,
  }

  const weekdays = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']

  source.history.forEach(({ timestamp }) => {
    const date = new Date(timestamp)
    const dayName = weekdays[date.getDay()]
    counts[dayName]++
  })

  return counts
}

/**
 * Clears all data (for tests or reset)
 */
export function resetStats() {
  localStorage.removeItem(STORAGE_KEY)
}