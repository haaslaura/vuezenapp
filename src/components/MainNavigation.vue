<script setup>
import BurgerMenu from './BurgerMenu.vue';
import { useDarkMode } from '@/stores/darkMode';

const { isDark, toggleDark } = useDarkMode();
</script> 

<template>
  <header class="flex items-center justify-between px-6 py-4 shadow bg-white/70 dark:bg-zinc-900/80 backdrop-blur-sm z-20">
    
    <h1 class="text-2xl font-display text-zen-green-400 dark:text-green-300">VueZen <span aria-hidden="true">🌿</span></h1>
    
    <!-- Nav desktop -->
    <nav class="hidden lg:flex gap-4 text-sm font-semibold ">
      <RouterLink class="hover:text-green-700 dark:hover:text-zen-green-300" to="/" exact-active-class="text-zen-green-600 dark:text-green-300">Accueil</RouterLink>
      <RouterLink class="hover:text-green-700 dark:hover:text-zen-green-300" to="/breathing" active-class="text-zen-green-600 dark:text-green-300">Respiration guidée</RouterLink>
      <RouterLink class="hover:text-green-700 dark:hover:text-zen-green-300" to="/quote" active-class="text-zen-green-600 dark:text-green-300">Citations</RouterLink>
      <RouterLink class="hover:text-green-700 dark:hover:text-zen-green-300" to="/calm" active-class="text-zen-green-600 dark:text-green-300">Minute de calme</RouterLink>
      <RouterLink class="hover:text-green-700 dark:hover:text-zen-green-300" to="/stats" active-class="text-zen-green-600 dark:text-green-300">Statistiques</RouterLink>
    </nav>
    
    <!-- Menu burger mobile -->
    <BurgerMenu />

    <button
      aria-label="Changer le thème"
      @click="toggleDark"
      class="ml-4 px-3 py-2 text-sm rounded bg-zen-green-600 text-white hover:bg-green-700 transition"
    >
      {{ isDark ? "☀️ Clair" : "🌙 Sombre" }}
    </button>
  
    </header>
</template>