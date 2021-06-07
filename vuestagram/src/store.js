import axios from 'axios';
import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: 'kim',
      age: 20,
      likes: 10,
      liked: false,
      more: {},
    };
  },

  mutations: {
    // 함수 만드는 곳 (methods)
    setMore(state, data) {
      state.more = data;
    },
    ageUp(state, payload) {
      state.age += payload;
    },
    nameChange(state) {
      state.name = 'Park';
    },
    btnLikes(state) {
      if (state.liked == false) {
        state.likes++;
        state.liked = true;
      } else {
        state.likes--;
        state.liked = false;
      }
    },
  },
  actions: {
    // ajax 요청하는곳
    getData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
        console.log(a.data);
        context.commit('setMore', a.data);


  actions: {
    // ajax 요청하는곳
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);

      });
    },
  },
});

export default store;
