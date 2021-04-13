import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      username: {},
      isLoginOpen: false,
    };
  },
  mutations: {
    setIsLoggedIn(state, data) {
      state.isLoggedIn = data;
    },
    setUsername(state, data) {
      state.username = data;
    },
    setLoginModal(state, data) {
      state.isLoginOpen = data;
    },
  },
});

// Install the store instance as a plugin
export default store;
