<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 0" @click="step = 3">MyPage</li>
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish()">Upload</li>
      <li v-if="step == 3" @click="step = 0">Back</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <!-- Vuex 예제 -->
  <!-- <h4>안녕 {{ $store.state.name }}</h4>
  <h5>내 나이는 {{ $store.state.age }} 살 이야</h5>
  <button @click="$store.commit('ageUp', 10)">버튼</button> -->
  <!-- actions 예제 -->
  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button> -->

  <!-- computed 예제 -->
  <!-- <p>{{ now() }} {{ 카운터 }}</p>
  <p>{{ now2 }} {{ 카운터 }}</p>
  <button @click="카운터++">버튼</button> -->

  <!-- mapState 예제 -->

  <Container
    @write="addContent = $event"
    :postData="postData"
    :step="step"
    :imageUrl="imageUrl"
    :pushFilterData="pushFilterData"
  />

  <button class="btn-more" v-if="step == 0" @click="more()">More</button>

  <!-- <div class="sample-box">임시</div> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label v-if="step == 0" for="file" class="input-plus">+</label>
    </ul>
  </div>

  <!-- 뷰 - 탭 로직 -->
  <!-- <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
  <button @click="step = 0">버튼0</button>
  <button @click="step = 1">버튼1</button>
  <button @click="step = 2">버튼2</button> -->
</template>

<script>
import Container from './components/Container';
import postData from './assets/postData.js';
import axios from 'axios';
import { mapState, mapMutations } from 'vuex';

axios.post();

export default {
  name: 'App',
  data() {
    return {
      step: 0,
      postData: postData,
      moreNum: 0,
      imageUrl: '',
      pushFilterData: '',
      카운터: 0,
    };
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
    ...mapState(['name', 'age', 'likes']),
  },

  methods: {
    ...mapMutations(['setMore', 'btnLikes']),

    now() {
      return new Date();
    },
    more() {
      axios
        .get('https://codingapple1.github.io/vue/more' + this.moreNum + '.json')
        .then((result) => {
          // console.log(result.data);
          this.postData.push(result.data);
          this.moreNum++;
        })
        .catch((err) => {
          err.alert('네트워크 상태를 확인하세요.');
        });
    },
    upload(e) {
      let imageFile = e.target.files;
      // console.log(imageFile[0]);
      let url = URL.createObjectURL(imageFile[0]);
      console.log(url);
      this.imageUrl = url;
      this.step++;
    },
    publish() {
      var postNewText = {
        name: 'Kim Hyun',
        userImage: 'https://placeimg.com/100/100/arch',
        postImage: this.imageUrl,
        likes: 36,
        date: 'May 15',
        liked: false,
        content: this.addContent,
        filter: this.pushFilterData,
      };
      this.postData.unshift(postNewText);
      this.step = 0;
    },
  },
  components: {
    Container,
  },
  mounted() {
    this.emitter.on('sendFilterBox', (a) => {
      this.pushFilterData = a;
      console.log('app==> ', this.pushFilterData);
    });
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
.btn-more {
  background-color: white;
}
button {
  margin-top: 50px;
  margin-bottom: 30px;
  background: skyblue;
  width: 100%;
  color: #fff;
  border: none;
  position: relative;
  height: 60px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
}
button:hover {
  background: #fff;
  color: skyblue;
}
button:before,
button:after {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: skyblue;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}

#app {
  box-sizing: border-box;
  font-family: 'consolas';
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
