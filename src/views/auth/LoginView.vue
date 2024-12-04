<template>
    <div>
        <h1>login</h1>
        <button @click="login">
            iniciar
        </button>
    </div>
</template>


<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()

const login = () => {
    router?.replace({
        name: 'home'
    })
}



</script>