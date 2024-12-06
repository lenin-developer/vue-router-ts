<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


const exits = () => {
    localStorage.removeItem('isLogin');
}

</script>


<template>
    <div class="content_site">
        <!-- Header -->
        <header class="content_site__header">
            <div>
                <a class="" href=" #">
                    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
                </a>
            </div>
            <nav class="menu">
                <RouterLink :to="{ name: 'home' }"> Home </RouterLink>
                <RouterLink :to="{ name: 'feature' }"> Features </RouterLink>
                <RouterLink :to="{ name: 'pricin' }"> Pricing </RouterLink>
                <RouterLink :to="{ name: 'pokemon', params: { id: 1 } }"> Pokemons </RouterLink>
                <RouterLink :to="{ name: 'login' }" @click="exits"> salir </RouterLink>
            </nav>
        </header>
        <!-- Fin Header -->

        <!-- Main -->
        <main class="">
            <router-view></router-view>
        </main>
        <!-- Fin Main -->

        <!-- Footer -->
        <footer class="">
            <p class="">
                © 20xx Acme Corporation. Derechos reservados
            </p>
        </footer>
        <!-- Fin Footer -->
    </div>
</template>

<style scoped>
.content_site {
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 40px;
}

.content_site__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.menu {
    &>a {
        color: aliceblue;
        padding-right: 10px;
        padding-left: 10px;
        text-decoration: none;
    }
}
</style>
