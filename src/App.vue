<script setup>
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

<template>
  <div class="min-h-screen flex flex-col font-sans bg-gradient-to-b from-zen-cream to-white dark:from-zinc-800 dark:to-zinc-900 text-zen-gray dark:text-white">
    
    <!-- Bouton dark mode -->
    <button
      @click="toggleDark"
      class="absolute top-4 right-4 px-3 py-1 text-sm rounded bg-zen-green text-white hover:bg-green-700 transition"
    >
      {{ isDark ? "☀️ Mode clair" : "🌙 Mode sombre" }}
    </button>

    <!-- En-tête -->
    <header class="flex items-center justify-between px-6 py-4 shadow bg-white/70 dark:bg-zinc-900/80 backdrop-blur-sm">
      <h1 class="text-2xl font-display text-zen-green dark:text-green-300">VueZen 🌿</h1>
      <nav class="flex gap-4 text-sm font-semibold">
        <RouterLink to="/" class="hover:underline" exact-active-class="text-zen-green dark:text-green-300">Accueil</RouterLink>
        <RouterLink to="/menu" class="hover:underline" active-class="text-zen-green dark:text-green-300">Menu</RouterLink>
        <RouterLink to="/stats" class="hover:underline" active-class="text-zen-green dark:text-green-300">Statistiques</RouterLink>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main class="flex-1 px-6 py-10">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>

    <!-- Pied de page -->
    <footer class="bg-gray-100 dark:bg-zinc-800 text-center py-4 text-sm text-gray-600 dark:text-gray-300">
      &copy; {{ currentYear }} VueZen. Prenez soin de vous 🌙
    </footer>
  </div>
</template>

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