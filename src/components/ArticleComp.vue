<script setup lang="ts">
defineProps<{
  title: string
}>()

</script>


<template>
  <article class="article">
    <h2 :id="title">{{ title }}</h2>
  </article>
</template>

<style lang="css" scoped>
.article {
  height: 100vh;
  background-color: rgb(51, 109, 90);
  margin: 20px;
}
</style>
