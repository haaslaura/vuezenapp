<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const quote = ref(null)

async function fetchQuote() {
    try {
        const res = await axios.get('https://zenquotes.io/api/random')
        quote.value = res.data[0]
    } catch (err) {
        console.error('Erreur lors du chargement de la citation', err)
        quote.value = {
            q: 'Prenez soin de vous, même lorsque le monde va trop vite.',
            a: 'VueZen',
        }
    }
}

onMounted(() => {
    fetchQuote()
})
</script>  

<template>
    <section class="flex flex-col items-center justify-center text-center gap-6 px-4">
        <h2 class="text-3xl font-display">Citations inspirantes ✨</h2>
        
        <!-- Citation -->
        <blockquote class="max-w-xl text-xl italic text-zen-gray dark:text-white leading-relaxed">
            “{{ quote?.q }}”
            <footer class="mt-4 text-sm text-gray-500 dark:text-gray-400">— {{ quote?.a }}</footer>
        </blockquote>
        
        <!-- Bouton -->
        <button
        @click="fetchQuote"
        class="px-6 py-2 bg-zen-green text-white rounded hover:bg-green-700 transition"
        >
        Nouvelle citation 🔄
        </button>
        
    </section>
</template>