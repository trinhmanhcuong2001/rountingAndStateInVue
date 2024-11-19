<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const activeIndex = ref("1");

watchEffect(() => {
    activeIndex.value = route.name?.toString() || "1";
});
</script>

<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        :router="true"
    >
        <el-menu-item index="0">
            <img
                style="width: 30px"
                src="@/assets/logo.svg"
                alt="Element logo"
            />
        </el-menu-item>
        <el-menu-item index="home" :route="{ name: 'home' }"
            >Trang chủ</el-menu-item
        >
        <el-menu-item index="add-todo" :route="{ name: 'add-todo' }"
            >Thêm công việc</el-menu-item
        >
        <el-menu-item index="list-todo" :route="{ name: 'list-todo' }"
            >Danh sách công việc</el-menu-item
        >
    </el-menu>
</template>

<style>
.el-menu--horizontal > .el-menu-item:nth-child(1) {
    margin-right: auto;
}
</style>
