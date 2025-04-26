import { ref } from 'vue'

const isDark = ref(false)

// Immediate initialisation when the file is loaded :
const savedTheme = localStorage.getItem('theme')
isDark.value = savedTheme === 'dark'
updateHtmlClass()

function toggleDark() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateHtmlClass()
}

function updateHtmlClass() {
    document.documentElement.classList.toggle('dark', isDark.value)
}

export function useDarkMode() {
    return { isDark, toggleDark }
}