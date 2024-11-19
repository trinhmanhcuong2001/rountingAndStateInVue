import { createStore } from "vuex";

export interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

interface State {
    todo_list: Todo[];
}

const store = createStore({
    state(): State {
        return {
            todo_list: [],
        };
    },
    mutations: {
        addTodo(state, todo) {
            state.todo_list.push(todo);
        },
        updateTodo(state: State, todo: Todo) {
            const index = state.todo_list.findIndex((t) => todo.id === t.id);
            state.todo_list[index] = todo;
        },
        deleteTodo(state, id) {
            const index = state.todo_list.findIndex((todo) => todo.id === id);
            if (index !== -1) {
                state.todo_list.splice(index, 1);
            }
        },
    },
    actions: {
        addTodo({ commit }, todo) {
            todo.id = Date.now();

            commit("addTodo", todo);
        },
        updateTodo({ commit }, todo) {
            commit("updateTodo", todo);
        },
        deleteTodo({ commit }, id: number) {
            commit("deleteTodo", id);
        },
    },
    getters: {
        getTodo: (state) => (id: Number) =>
            state.todo_list.find((t) => t.id === id),
    },
});

export default store;
