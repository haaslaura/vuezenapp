🎯 Objectif
Créer une mini-app pour prendre des pauses relaxantes dans la journée : respiration guidée, citations inspirantes, minute de calme avec minuteur, etc.

🧱 Stack conseillée
Vue.js 3 (avec Vite ou Vue CLI)

Tailwind CSS ou SCSS (optionnel)

LocalStorage pour mémoriser les stats

Bonus : transitions Vue, animations CSS, dark mode 🌙

🧩 Fonctionnalités proposées

Fonctionnalité	Description	Vue utilisée
Accueil	Page d’intro avec logo, bouton "Commencer"	RouterView, <router-link>
Menu des activités	Liste de types de pauses : respiration, citation, silence	v-for, props, router
Exercice respiration guidée	Animation d’un cercle qui gonfle/rétracte selon un rythme "Inspire 4s / Expire 6s"	ref, setInterval, CSS animation
Citation du jour	Affichage d’une citation aléatoire avec animation d’apparition	computed, methods, transition
Minute de calme	Timer avec fond apaisant et son optionnel (cloche, vague…)	watch, setTimeout, audio, ref
Statistiques	"Nombre de pauses cette semaine", stockées localement	localStorage, watch, computed
Dark mode	Light / Dark switch + animation	ref, classe CSS conditionnelle
🗂️ Structure de fichiers conseillée
bash
Copier
Modifier
/src
  /components
    Menu.vue
    Timer.vue
    BreathingCircle.vue
    QuoteCard.vue
    StatCard.vue
  /views
    Home.vue
    Activity.vue
    Stats.vue
  /data
    quotes.json
  App.vue
  main.js
  router.js
📸 Idées de rendu
Design doux, couleurs pastel 🌸

Cercle qui respire : animation simple en CSS (scale + opacité)

Typo agréable à lire (ex. Inter, Quicksand, Raleway…)

Citation en transition “fade in”

Minuteur avec gros chiffres et option “recommencer”

💡 Bonus pour ton GitHub
Bon README.md avec captures d’écran

Démo en ligne (sur Netlify ou Vercel)

Liste de compétences clés (Vue 3, composants, gestion du temps, localStorage…)