import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: 30,
      liked: 0,
    };
  },

  mutations: {
    ageUp(state, payload) {
      state.age += payload;
    },
    nameChange(state) {
      state.name = "Park";
    },
    btnLikes(state) {
      if (state.liked == 0) {
        state.likes++;
        state.liked = 1;
      } else {
        state.likes--;
        state.liked = 0;
      }
    },
  },
});

export default store;
