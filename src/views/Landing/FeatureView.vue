<script setup lang="ts">
import ArticleComp from '@/components/ArticleComp.vue';

</script>

<template>
  <h1>Feature</h1>
  <nav>
    <router-link :to="{ name: 'feature', hash: '#articulo_3' }">
      artuculo 3
    </router-link>
  </nav>
  <ArticleComp title="articulo_1" />
  <ArticleComp title="articulo_2" />
  <ArticleComp title="articulo_3" />
</template>

<style></style>
