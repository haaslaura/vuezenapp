<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { logBreak } from '@/services/statsService'

const phase = ref('inhale') // inhale, hold, exhale
const message = ref('Inspirez…')
let intervalId
let breathingDuration = 0

const cycle = [
{ phase: 'inhale', message: 'Inspirez…', duration: 4000 },
{ phase: 'hold', message: 'Retenez…', duration: 2000 },
{ phase: 'exhale', message: 'Expirez…', duration: 4000 },
{ phase: 'hold', message: 'Retenez…', duration: 2000 },
]

let index = 0

function startCycle() {
    const current = cycle[index]
    phase.value = current.phase
    message.value = current.message
    
    intervalId = setTimeout(() => {
        index = (index + 1) % cycle.length
        startCycle()
    }, current.duration)

    breathingDuration += current.duration
    if (breathingDuration >= 12000) { // one complete cycle (inhale + hold + exhale + hold)
        logBreak('calm')
        breathingDuration = 0 // reset the duration after logging
    }
}

onMounted(() => {
    startCycle()
})

onBeforeUnmount(() => {
    clearTimeout(intervalId)
})
</script>

<template>
    <div class="flex flex-col items-center justify-center gap-8 text-center">
        <!-- Cercle animé -->
        <div
            class="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-zen-green transition-all duration-4000 ease-in-out"
            :class="{
                'scale-125': phase === 'inhale',
                'scale-100': phase === 'hold',
                'scale-75': phase === 'exhale'
            }"
        >
        </div>
        
        <!-- Texte de respiration -->
        <p class="text-xl font-semibold text-zen-gray dark:text-white transition-all duration-500">
            {{ message }}
        </p>
    </div>
</template>