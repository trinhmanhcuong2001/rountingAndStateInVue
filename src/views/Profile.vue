<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const user = computed(() => store.state.user);

const aYearLater = () => {
    store.commit("aYearLater");
};
</script>
<template lang="">
    <div>
        <h1>Thông tin người dùng</h1>
        <p>Tên: {{ user.name }}</p>
        <p>Tuổi: {{ user.age }}</p>
        <button @click="aYearLater">Một năm trôi qua</button>
    </div>
</template>
<style lang=""></style>
