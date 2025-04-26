<script setup>
import BreaksNumber from '../components/BreaksNumber.vue'
import TotalQuietTime from '../components/TotalQuietTime.vue'
import BreathsNumber from '../components/BreathsNumber.vue'
</script>

<template>
    <section class="px-4 py-8 flex flex-col gap-8 max-w-5xl mx-auto">
        
        <h2 class="text-3xl font-display text-center text-zen-cream-950">Statistiques de vos pauses zen <span aria-hidden="true">🧘‍♀️</span></h2>
    
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TotalQuietTime />
            <BreathsNumber />
        </div>

        <BreaksNumber />

    </section>
</template>