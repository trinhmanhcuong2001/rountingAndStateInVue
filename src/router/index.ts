import { createRouter, createWebHistory } from "vue-router";
import AddTodo from "@/views/AddTodo.vue";
import Home from "@/views/Home.vue";
import ListTodo from "@/views/ListTodo.vue";
import EditTodo from "@/views/EditTodo.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/add-todo",
            name: "add-todo",
            component: AddTodo,
        },
        {
            path: "/list-todo",
            name: "list-todo",
            component: ListTodo,
        },
        {
            path: "/edit-todo/:id",
            name: "edit-todo",
            component: EditTodo,
        },
    ],
});

export default router;
