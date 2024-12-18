<template>
  <div>
    <h1>PrincingView</h1>
    <nav>
      <router-link :to="{ name: 'men', }">
        men
      </router-link>
      <span> | </span>
      <router-link :to="{ name: 'woman', }">
        woman
      </router-link>
    </nav>
    <section class="section">

      <router-view v-slot="{ Component, route }">
        <!-- Use a custom transition or fallback to `fade` -->
        <transition :name="route?.meta?.transition">
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </div>
</template>

<style lang="css" scoped>
.section {
  width: calc(100% - 80px);
  ;
  min-height: 100vh;
}


.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.75s ease;
}

.slide-left-enter-to {
  position: absolute;
  right: 0;
}

.slide-left-enter-from {
  position: absolute;
  right: -100%;
}

.slide-left-leave-to {
  position: absolute;
  left: -100%;
}

.slide-left-leave-from {
  position: absolute;
  left: 0;
}


.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.75s ease;
}

.slide-right-enter-to {
  position: absolute;
  right: 0;
}

.slide-right-enter-from {
  position: absolute;
  right: 100%;
}

.slide-right-leave-to {
  position: absolute;
  left: 100%;
}

.slide-right-leave-from {
  position: absolute;
  left: 0;
}
</style>
