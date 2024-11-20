<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";
import { View, Edit, Delete } from "@element-plus/icons-vue";
import ViewTodo from "./ViewTodo.vue";
import type { Todo } from "@/store";

const store = useStore();

const tableData = computed(() => store.state.todo_list);

const data = reactive({ show: false });

const dataEdit = reactive<Todo>({
    id: 0,
    name: "",
    completed: false,
});

const showActive = (dataSent: Todo) => {
    data.show = !data.show;
    if (data.show) {
        dataEdit.id = dataSent.id;
        dataEdit.name = dataSent.name;
        dataEdit.completed = dataSent.completed;
    }
};
const deleteTodo = (id: number) => {
    store.dispatch("deleteTodo", id);
};
</script>
<template>
    <h1>Danh sách công việc</h1>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="completed" label="Trạng thái">
            <template #default="{ row }">
                {{ row.completed ? "Hoàn thành" : "Chưa hoàn thành" }}
            </template>
        </el-table-column>
        <el-table-column label="Tính năng">
            <template #default="{ row }">
                <el-icon
                    :size="20"
                    style="margin-right: 8px"
                    @click="showActive(row)"
                    ><View
                /></el-icon>
                <RouterLink :to="'/edit-todo/' + row.id">
                    <el-icon :size="20" style="margin-right: 8px" color="blue">
                        <Edit /> </el-icon
                ></RouterLink>
                <el-icon :size="20" color="red" @click="deleteTodo(row.id)">
                    <Delete />
                </el-icon>
            </template>
        </el-table-column>
    </el-table>
    <ViewTodo
        v-model="data.show"
        :show="data.show"
        @update-show="showActive"
        :dataEdit="dataEdit"
    />
</template>
