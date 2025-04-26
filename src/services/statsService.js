import dataTest from '@/data/dataTest.json'
const USE_TEST_DATA = true // 🔁 Set to true to display test data
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


/**
* Returns the total number of breathing sessions
* @returns {number} - Total number of breathing sessions
*/
export function getTotalCalmTime() {
    initStats()
    
    const source = USE_TEST_DATA ? dataTest : JSON.parse(localStorage.getItem(STORAGE_KEY))
    
    const calmSessions = source.history.filter(entry => entry.type === 'calm')
    const totalMinutes = calmSessions.length // 1 min = 1 session
    
    return totalMinutes
}

/**
 * Displays the number of breathing sessions by period of the day
 * @param {string} type - 'calm' or 'breathing'
 * @returns {Object} - Example : { Matin: 2, Midi: 0, AprèsMidi: 0, Soir: 0, Nuit: 0 }
 */
export function getBreathStatsByPeriod() {
    initStats()
    
    const source = USE_TEST_DATA ? dataTest : JSON.parse(localStorage.getItem(STORAGE_KEY))
    
    const periods = {
        Matin: 0, // 5h - 11h
        Midi: 0, // 11h - 14h
        AprèsMidi: 0, // 14h - 18h
        Soir: 0, // 18h - 23h
        Nuit: 0, // 23h - 5h
    }
    
    source.history.forEach(entry => {
        if (entry.type !== 'breathing') return
        
        const hour = new Date(entry.timestamp).getHours()
        
        if (hour >= 5 && hour < 11) periods.Matin++
        else if (hour >= 11 && hour < 14) periods.Midi++
        else if (hour >= 14 && hour < 18) periods.AprèsMidi++
        else if (hour >= 18 && hour < 23) periods.Soir++
        else periods.Nuit++
    })
    
    return periods
}