<script setup>
import { ref, computed, onBeforeUnmount } from 'vue'
import { logBreak } from '@/services/statsService'


const duration = 60
const timeLeft = ref(duration)
const isRunning = ref(false)
const hasStarted = ref(false)
let intervalId

const audioRef = ref(null)

const formattedTime = computed(() => {
  const min = Math.floor(timeLeft.value / 60)
  const sec = timeLeft.value % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
})

function startSession() {
  timeLeft.value = duration
  hasStarted.value = true
  isRunning.value = true
  startTimer()
  audioRef.value?.play()
}

function startTimer() {
  intervalId = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
    } else {
      stopSession()
    }
  }, 1000)
}

function toggleTimer() {
  if (isRunning.value) {
    clearInterval(intervalId)
    audioRef.value?.pause()
  } else {
    startTimer()
    audioRef.value?.play()
  }
  isRunning.value = !isRunning.value
}

function stopSession() {
  clearInterval(intervalId)
  isRunning.value = false
  audioRef.value?.pause()
  timeLeft.value = duration
  hasStarted.value = false

  // ajout
  logBreak('calm')
}

onBeforeUnmount(() => {
  clearInterval(intervalId)
  audioRef.value?.pause()
})
</script>  

<template>
    <section class="flex flex-col items-center justify-center text-center gap-6">
        <h2 class="text-3xl font-display">La minute de calme <span aria-hidden="true">🌊</span></h2>
        
        <p class="text-xl text-zen-gray dark:text-white">
            Respirez, détendez-vous, profitez de ce moment…
        </p>
        
        <!-- Timer -->
        <div class="text-6xl font-mono text-zen-green dark:text-green-300">
            {{ formattedTime }}
        </div>

        <!-- Controls -->
        <div>
            <button
                aria-label="Session de calme lancée"
                v-if="!hasStarted"
                @click="startSession"
                class="px-6 py-2 bg-zen-green text-white rounded hover:bg-green-700 transition"
            >
                Démarrer ▶️
            </button>

            <button
                v-else
                @click="toggleTimer"
                :disabled="timeLeft === 0"
                class="px-6 py-2 bg-zen-green text-white rounded hover:bg-green-700 transition"
            >
                {{ isRunning ? "Pause ⏸️" : "Reprendre ▶️" }}
            </button>
        </div>

        <!-- Sound -->
        <audio ref="audioRef" src="/sounds/waves-and-seagulls.wav" loop></audio>
    
    </section>
</template>