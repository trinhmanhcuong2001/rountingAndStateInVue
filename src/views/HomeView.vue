<script setup lang="ts">
import { useStore } from "vuex";
import { computed, ref } from "vue";

const store = useStore();

const count = computed(() => store.state.count);

const increment = () => {
    store.commit("increment");
};
</script>

<template>
    <main>
        <h1>Đây là trang cộng</h1>
        <h4>Số: {{ count }}</h4>
        <button @click="increment">Cộng</button>
    </main>
</template>
