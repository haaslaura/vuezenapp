<script setup>
import { getTotalCalmTime } from '@/services/statsService'
import { ref } from 'vue'

const totalMinutes = ref(getTotalCalmTime())
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow p-6 text-center">
        <h2 class="text-lg font-semibold text-zen-green dark:text-green-300 mb-4">
            Temps total de calme
        </h2>
        
        <div class="w-36 h-36 rounded-full border-8 border-zen-green dark:border-green-300 flex items-center justify-center text-3xl font-bold text-zen-gray dark:text-white">
            {{ totalMinutes }}<span class="text-sm ml-1">min</span>
        </div>
        
        <p class="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Vous avez pris le temps de respirer 🌬️
        </p>
    </div>
</template>