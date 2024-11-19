<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const id = Number(route.params.id);

const store = useStore();

const todo = computed(() => store.getters["getTodo"](id));

const formInline = reactive({
    id,
    name: todo.value.name,
    completed: todo.value.completed,
});

const onSubmit = () => {
    store.dispatch("updateTodo", formInline);
    router.push({ name: "list-todo" });
};
</script>

<template>
    <h1>Chỉnh sửa công việc</h1>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="Tên công việc">
            <el-input
                v-model="formInline.name"
                placeholder="Nhập tên công việc"
                clearable
            />
        </el-form-item>
        <el-form-item label="Trạng thái">
            <el-select
                v-model="formInline.completed"
                placeholder="Trạng thái công việc"
                clearable
            >
                <el-option label="Chưa hoàn thành" value="false" />
                <el-option label="Hoàn thành" value="true" />
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" @click="onSubmit">Cập nhật</el-button>
        </el-form-item>
    </el-form>
</template>

<style>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>
