<template>
    <section class="text-center space-y-6">
        <h2 class="text-3xl font-display">Bienvenue sur VueZen</h2>
        <p class="text-lg">Prenez un moment pour respirer, vous recentrer, et vous détendre.</p>
        <RouterLink
            role="button"
            aria-label="Commencer une pause de respiration guidée"
            to="/breathing"
            class="inline-block px-5 py-3 rounded bg-zen-green text-white hover:bg-green-700 transition"
        >
            Commencer une pause
        </RouterLink>
    </section>
</template>