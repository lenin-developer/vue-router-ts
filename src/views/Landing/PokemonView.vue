<template>
    <div>
        <h1>pokemon</h1>
        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${$route.params.id}.svg`"
            alt="">
    </div>
</template>
