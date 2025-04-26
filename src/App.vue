<script setup>
import Navigation from './components/Navigation.vue'
import { ref, onMounted } from 'vue'

const isDark = ref(false)
const currentYear = new Date().getFullYear()

onMounted(() => {
  isDark.value = localStorage.getItem('theme') === 'dark'
  toggleClass()
})

function toggleDark() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  toggleClass()
}

function toggleClass() {
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gradient-to-b from-zen-cream to-white dark:from-zinc-800 dark:to-zinc-900 text-zen-gray dark:text-white transition-colors duration-300">

    <!-- Header -->
    <Navigation @toggle-dark="toggleDark" :isDark="isDark" />

    <!-- Main content -->
    <main class="flex-1 px-6 py-10">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-100 dark:bg-zinc-800 text-center py-4 text-sm text-gray-600 dark:text-gray-300">
      &copy; {{ currentYear }} VueZen by
        <a
          aria-label="Portfolio de Laura Haas"
          class="text-zen-green dark:text-green-300"
          href="https://laura-haas.dev/"
          target="_blank"
        >
          Laura Haas
        </a>.
        Prenez soin de vous <span aria-hidden="true">🌿</span>
    </footer>
  </div>
</template>