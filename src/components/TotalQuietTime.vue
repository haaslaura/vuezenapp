bg-zen-green-600<script setup>
import { getTotalCalmTime } from '@/services/statsService'
import { ref } from 'vue'

const totalMinutes = ref(getTotalCalmTime())
</script>

<template>
    <div class="flex flex-col items-center justify-center bg-white dark:bg-zinc-800 rounded-xl shadow p-6 text-center">
        <h3 aria-labelledby="ttc" class="text-lg font-semibold text-zen-green-600 dark:text-gray-200 mb-4">
            Temps total de calme
        </h3>
        
        <div id="ttc" class="w-36 h-36 rounded-full border-8 border-zen-green-600 dark:border-green-300 flex items-center justify-center text-3xl font-bold text-zen-green-600 dark:text-white">
            {{ totalMinutes }}<span class="text-sm ml-1">min</span>
        </div>
        
        <p aria-hidden="true" class="mt-4 text-sm text-zen-cream-900 dark:text-gray-300">
            Vous avez pris le temps de respirer 🌬️
        </p>
    </div>
</template>