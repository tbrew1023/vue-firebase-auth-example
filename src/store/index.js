import { createStore } from 'vuex'

export default createStore({
    state: {
        loggedIn: false
    },
    mutations: {
        success: state => {
            state.loggedIn = true;
        },
        fail: state => {
            state.loggedIn = false;
        }
    },
    actions: {},
    modules: {}
})