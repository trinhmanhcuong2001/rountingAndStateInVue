<script setup lang="ts">
import { RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
</script>

<template>
    <header>
        <Menu />

        <!-- <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div> -->
    </header>

    <RouterView />
</template>

<style scoped>
header {
    line-height: 1.5;
    max-height: 100vh;
    margin-bottom: 30px;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

.wrapper {
    width: 100%;
}
</style>
