<template>
    <div class="div-menu">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :value="false">expand</el-radio-button>
            <el-radio-button :value="true">collapse</el-radio-button>
        </el-radio-group>
        <el-menu
            default-active="2"
            class="sidebar-menu"
            :collapse="isCollapse"
            @open="handleOpen"
            @close="handleClose"
            :router="true"
        >
            <el-menu-item index="2" :route="{ name: 'dashboard' }">
                <el-icon><icon-menu /></el-icon>
                <template #title> Dashboard </template>
            </el-menu-item>
            <el-menu-item index="3" :route="{ name: 'profile' }">
                <el-icon><document /></el-icon>
                <template #title>Profile</template>
            </el-menu-item>
            <el-menu-item index="4" :route="{ name: 'settings' }">
                <el-icon><setting /></el-icon>
                <template #title> Settings </template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { Document, Menu as IconMenu, Setting } from "@element-plus/icons-vue";

import { RouterView, RouterLink } from "vue-router";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath);
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}

.div-menu {
    height: 100vh;
    display: inline-block;
    margin-right: 40px;
}

.sidebar-menu {
    min-height: 500px;
}
</style>
