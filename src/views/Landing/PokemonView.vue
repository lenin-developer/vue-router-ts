<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const nextPokemon = () => {
  router.replace({
    name: 'pokemon',
    params: { id: +route?.params?.id + 1 }
  })
}


</script>

<template>
  <div class="pokemon-conten">
    <h1>pokemon</h1>
    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${$route.params.id}.svg`"
      alt="">
    <button @click="nextPokemon">next</button>
    <router-link :to="{ name: 'pokemon', params: { id: +$route.params.id + 1 } }">
      next
    </router-link>
  </div>
</template>

<style lang="postcss" scoped>
.pokemon-conten {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &>img {
    height: 150px;
  }

  &>button {
    width: 100px;
  }
}
</style>
