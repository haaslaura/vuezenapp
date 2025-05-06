<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const vueZenQuote = ref({});
const rateLimitMessage = ref('');
const clickTimestamps = ref([]);


async function fetchAndTranslateQuote() {

    // The free api is limited to 5 clicks for 30s
    // If the number of clicks is greater than 5, a message is displayed to users
    const now = Date.now()
    clickTimestamps.value = clickTimestamps.value.filter(ts => now - ts < 30000)

    if (clickTimestamps.value.length >= 4) {
        rateLimitMessage.value = "Prenez le temps de profiter de cette citation inspirante 🌿"
        setTimeout(() => {
            rateLimitMessage.value = '' // Message reset after 30 seconds
        }, 30000)
        return
    }

    clickTimestamps.value.push(now)

    try {
        rateLimitMessage.value = '' // Reset message if all is well

        const apiRes = await axios.get(`https://api.vuezenapp.laura-haas.dev/api/translate`)
        // const apiRes = await axios.get(`http://localhost:4002/api/translate`);
        vueZenQuote.value = { q: apiRes.data.translatedQuote, a: apiRes.data.author }        
        
    } catch (err) {
        console.error('Erreur lors du chargement de la citation', err)
        vueZenQuote.value = {
            q: "Prenez soin de vous, même lorsque le monde va trop vite.",
            a: "VueZen"
        }
    }
}

onMounted(() => {
    fetchAndTranslateQuote()
})
</script>  

<template>
    <section class="flex flex-col items-center justify-center text-center gap-6 px-4">
        <h2 class="text-3xl font-display text-zen-cream-900 dark:text-gray-200">Citations inspirantes <span aria-hidden="true">✨</span></h2>
        
        <!-- Citation -->
        <blockquote class="max-w-xl text-xl italic text-zen-cream-950 dark:text-gray-200 leading-relaxed min-h-[100px]">
            “{{ vueZenQuote.q || 'Chargement en cours...' }}”
            <footer v-if="vueZenQuote?.a" class="mt-4 text-sm text-zen-cream-800 dark:text-gray-400">
                — {{ vueZenQuote?.a }}
            </footer>
        </blockquote>
        
        <!-- Bouton -->
        <button
            aria-label="Chargement d'une nouvelle citation"
            @click="fetchAndTranslateQuote"
            class="px-6 py-2 rounded bg-zen-green-600 text-white hover:bg-green-700 transition"
        >
            Nouvelle citation 🔄
        </button>

        <!-- Limitation message -->
        <p role="status" v-if="rateLimitMessage" class="text-red-600 mt-2 text-sm">
            {{ rateLimitMessage }}
        </p>

    </section>
</template>