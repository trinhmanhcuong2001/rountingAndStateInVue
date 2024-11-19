<script lang="ts" setup>
import { reactive, ref } from "vue";
import type { Todo } from "@/store";

const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const props = defineProps<{
    dataEdit: Todo;
}>();
const form = reactive({
    name: props.dataEdit.name,
    completed: "",
});

</script>
<template>
    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
        <el-form :model="form">
            <el-form-item label="Promotion name" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Zones" :label-width="formLabelWidth">
                <el-select
                    v-model="form.completed"
                    placeholder="Please select a zone"
                >
                    <el-option label="Zone No.1" value="shanghai" />
                    <el-option label="Zone No.2" value="beijing" />
                </el-select>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">
                    Confirm
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
