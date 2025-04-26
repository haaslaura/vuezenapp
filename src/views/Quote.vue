<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const quote = ref(null)
const translatedQuote = ref('')

const PORT = import.meta.env.VUE_APP_PORT || 3000

async function fetchAndTranslateQuote() {
    try {
        const res = await axios.get('https://api.quotable.io/quotes/random?tags=inspirational|gratitude|happiness|motivational|tolerance|wisdom')
        
        quote.value = { q: res.data[0].content, a: res.data[0].author }       

        // Call DeepL for translations
        const deeplRes = await axios.post(`http://localhost:${PORT}/api/translate`, {
            text: quote.value.q,
        })     

        translatedQuote.value = deeplRes.data.translation        

    } catch (err) {
        console.error('Erreur lors du chargement de la citation', err)
        translatedQuote.value = "Prenez soin de vous, même lorsque le monde va trop vite."
        quote.value = { a: 'VueZen' }
    }
}

onMounted(() => {
    fetchAndTranslateQuote()
})
</script>  

<template>
    <section class="flex flex-col items-center justify-center text-center gap-6 px-4">
        <h2 class="text-3xl font-display">Citations inspirantes <span aria-hidden="true">✨</span></h2>
        
        <!-- Citation -->
        <blockquote class="max-w-xl text-xl italic text-zen-gray dark:text-white leading-relaxed min-h-[100px]">
            “{{ translatedQuote || 'Chargement en cours...' }}”
            <footer v-if="quote?.a" class="mt-4 text-sm text-gray-500 dark:text-gray-400">
                — {{ quote?.a }}
            </footer>
        </blockquote>
        
        <!-- Bouton -->
        <button
            aria-label="Chargement d'une nouvelle citation"
            @click="fetchAndTranslateQuote"
            class="px-6 py-2 bg-zen-green text-white rounded hover:bg-green-700 transition"
        >
            Nouvelle citation 🔄
        </button>
        
    </section>
</template>