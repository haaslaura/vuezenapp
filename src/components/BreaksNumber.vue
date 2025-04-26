<script setup>
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { ref } from 'vue'
import { getBreaksPerDay } from '@/services/statsService'


// Registering Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

// Data
const rawData = getBreaksPerDay()
const chartData = ref({
    labels: Object.keys(rawData),
    datasets: [
        {
            label: 'Pauses',
            backgroundColor: '#3B7C57',
            data: Object.values(rawData),
            borderRadius: 4,
            barThickness: 30,
        },
    ],
})

const chartOptions = ref({
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: (ctx) => `${ctx.parsed.y} pause${ctx.parsed.y > 1 ? 's' : ''}`,
            },
        },
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                stepSize: 1,
                precision: 0,
            },
        },
    },
})
</script>

<template>
    <div class="bg-white dark:bg-zinc-800 rounded-xl shadow p-6 mb-6">
        <h3 class="text-lg font-semibold text-zen-green-600 dark:text-green-300 mb-4">
            Pauses réalisées par jour
        </h3>
        <Bar
            aria-label="Graphique des pauses réalisées par jour"
            :data="chartData" :options="chartOptions"
        >
            Le schéma n'a pas pu être chargé.
        </Bar>
    </div>
</template>