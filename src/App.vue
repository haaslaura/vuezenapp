<template>
  <div class="app-container">
    <header class="app-header">
      <h1 class="logo">VueZen 🌿</h1>
      <nav class="app-nav">
        <router-link to="/">Accueil</router-link>
        <router-link to="/menu">Menu</router-link>
        <router-link to="/stats">Statistiques</router-link>
      </nav>
    </header>
    
    <main class="app-main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
    
    <footer class="app-footer">
      <p>&copy; 2025 VueZen. Prenez soin de vous 🌙</p>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-header {
  padding: 1rem 2rem;
  background: #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.app-nav a {
  margin-left: 1rem;
  text-decoration: none;
  color: #333;
}

.app-nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}

.app-main {
  flex: 1;
  padding: 2rem;
  background-color: #fff;
}

.app-footer {
  text-align: center;
  padding: 1rem;
  background-color: #f5f5f5;
  font-size: 0.875rem;
  color: #777;
}

/* Animation simple entre les pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>