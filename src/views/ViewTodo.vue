<template>
    <el-dialog v-model="visible" :show-close="false" width="500">
        <template #header="{ close, titleId, titleClass }">
            <div class="my-header">
                <h4 :id="titleId" :class="titleClass">
                    Thông tin chi tiết của công việc {{ dataEdit.id }}
                </h4>
                <el-button type="danger" @click="closeModal">
                    <el-icon class="el-icon--left"
                        ><CircleCloseFilled
                    /></el-icon>
                    Close
                </el-button>
            </div>
        </template>
        <h1>ID:{{ dataEdit.id }}</h1>
        <p>Tên:{{ dataEdit.name }}</p>
        <p>Trạng thái: {{ dataEdit.completed ? 'Hoàn thành': 'Chưa hoàn thành' }}</p>
    </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElButton, ElDialog } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import type { Todo } from "@/store";

const { show, dataEdit } = defineProps({
    show: {
        type: Boolean,
    },
    dataEdit: {
        type: Object,
        required: true,
    },
});

const emit = defineEmits(["update-show"]);

const closeModal = () => {
    emit("update-show");
};

const visible = ref(show);
</script>

<style scoped>
.my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 16px;
}
</style>
