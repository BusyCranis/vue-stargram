<template>
  <div style="padding:10px">
    <div style="padding : 10px">
      <h4>팔로워</h4>
      <input placeholder="🔍" @input="search($event.target.value)" />
      <div class="post-header" v-for="(a, i) in follower" :key="i">
        <div class="profile" :style="`background-image: url(${a.image})`"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import axios from "axios";
export default {
  name: "mypage",
  //   props: {
  //       one: Number,
  //   }
  setup() {
    let follower = ref([]);
    let followerOrg = ref([]);
    // let test = reactive() : array, object 만 가능하지만, 기능적으로는 거기서거기
    //let mprops = ref(props)

    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOrg.value = [...a.data];
      });
    });

    function search(data) {
      let newFollower = followerOrg.value.filter((a) => {
        return a.name.indexOf(data) != -1;
      });
      follower.value = [...newFollower];
    }

    return { follower, search };
  },
  data() {
    return {};
  },
};
</script>

<style></style>
