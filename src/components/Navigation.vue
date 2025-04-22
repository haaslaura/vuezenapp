<template>
    <header class="flex items-center justify-between px-6 py-4 shadow bg-white/70 dark:bg-zinc-900/80 backdrop-blur-sm">
      <h1 class="text-2xl font-display text-zen-green dark:text-green-300">VueZen 🌿</h1>
      <nav class="flex gap-4 text-sm font-semibold">
        <RouterLink to="/" exact-active-class="text-zen-green dark:text-green-300">Accueil</RouterLink>
        <RouterLink to="/breathing" active-class="text-zen-green dark:text-green-300">Respiration guidée</RouterLink>
        <RouterLink to="/quote" active-class="text-zen-green dark:text-green-300">Citations</RouterLink>
        <RouterLink to="/calm" active-class="text-zen-green dark:text-green-300">Minute de calme</RouterLink>
        <RouterLink to="/stats" active-class="text-zen-green dark:text-green-300">Statistiques</RouterLink>
      </nav>
      <button
        @click="$emit('toggle-dark')"
        class="ml-4 px-3 py-1 text-sm rounded bg-zen-green text-white hover:bg-green-700 transition"
      >
        {{ isDark ? "☀️ Clair" : "🌙 Sombre" }}
      </button>
    </header>
  </template>
  
  <script setup>
  defineProps({
    isDark: Boolean
  })
  </script> 