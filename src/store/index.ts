import { createStore } from "vuex";

interface User {
    name: string;
    age: number;
}
interface State {
    user: User;
}
const store = createStore<State>({
    state() {
        return {
            user: {
                name: "Cường",
                age: 23,
            },
        };
    },
    mutations: {
        aYearLater(state) {
            alert("Già thêm một tuổi!");
            state.user.age++;
        },
    },
});

export default store;
