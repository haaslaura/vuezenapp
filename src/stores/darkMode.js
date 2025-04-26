import { ref, onMounted } from 'vue'

const isDark = ref(false)

function toggleDark() {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    updateHtmlClass()
}

function updateHtmlClass() {
    document.documentElement.classList.toggle('dark', isDark.value)
}

// During loading, we retrieve the preference
onMounted(() => {
    isDark.value = localStorage.getItem('theme') === 'dark'
    updateHtmlClass()
})

export function useDarkMode() {
    return { isDark, toggleDark }
}