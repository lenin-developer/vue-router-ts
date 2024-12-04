<template>
    <div class="wrapper">
        <h1>404</h1>
        <router-link :to="{ name: 'home' }" replace>
            home
        </router-link>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>