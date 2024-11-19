<script lang="ts" setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { RouterLink } from "vue-router";
// import type { Todo } from "@/store";
import { Edit, Delete } from "@element-plus/icons-vue";
// import UpdateTodo from "@/components/UpdateTodo.vue";

const store = useStore();

const tableData = computed(() => store.state.todo_list);

// const dataEdit = ref<Todo>();
// const handleSentDataEdit = (data: Todo) => {
//     dataEdit.value = data;
//     console.log(dataEdit.value);
// };

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
    <!-- <update-todo :dataEdit="dataEdit" /> -->
</template>
