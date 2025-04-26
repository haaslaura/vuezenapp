<script setup>
import { ref, watchEffect } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)

function toggleMenu() {
    isOpen.value = !isOpen.value
}

// Close the menu automatically when changing route
watchEffect(() => {
    if (window.innerWidth < 900) {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 900) {
                isOpen.value = false
            }
        })
    }
})
</script>

<template>
    <div class="lg:hidden relative z-50">
        <!-- Burger button -->
        <button
            class="text-3xl text-zen-green-600 dark:text-green-300"
            @click="toggleMenu"
        >
            ☰
        </button>
    
        <!-- Full screen menu -->
        <transition name="fade">
            <div
                v-if="isOpen"
                class="fixed h-screen inset-0 bg-zen-green-400 dark:bg-zinc-900 text-zen-gray dark:text-white flex flex-col items-center justify-center space-y-10 text-xl font-semibold transition-all duration-300"
            >
                <button
                    class="absolute top-6 right-6 text-2xl"
                    @click="toggleMenu"
                >
                    ✖
                </button>

                <RouterLink to="/" @click="toggleMenu">Accueil</RouterLink>
                <RouterLink to="/breathing" @click="toggleMenu">Respiration</RouterLink>
                <RouterLink to="/quote" @click="toggleMenu">Citations</RouterLink>
                <RouterLink to="/calm" @click="toggleMenu">Minute de calme</RouterLink>
                <RouterLink to="/stats" @click="toggleMenu">Statistiques</RouterLink>
            </div>
        </transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>