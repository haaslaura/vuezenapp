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
import { reactive } from 'vue'
import { getBreathStatsByPeriod } from '@/services/statsService'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const data = getBreathStatsByPeriod()

const chartData = reactive({
    labels: Object.keys(data),
    datasets: [
    {
        label: 'Sessions de respiration',
        backgroundColor: '#3B7C57',
        data: Object.values(data),
        borderRadius: 4,
        barThickness: 30,
    }
    ],

})

const chartOptions = reactive({
    responsive: true,
    plugins: {
        legend: { display: false },
        tooltip: {
            callbacks: {
                label: ctx => `${ctx.parsed.y} session${ctx.parsed.y > 1 ? 's' : ''}`
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
        <h3 class="text-lg font-semibold text-zen-green-600 dark:text-gray-200 mb-4">
            Moments de respiration dans la journée
        </h3>
        <Bar
            aria-label="Graphique des moments de respiration dans la journée"
            :data="chartData" :options="chartOptions"
        >
            Le schéma n'a pas pu être chargé.
        </Bar>
    </div>
</template>