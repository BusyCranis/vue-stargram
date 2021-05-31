<template>
  <!-- <div :v-for="(a, i) in postData.length" :key="a"> -->
  <div>
    <Post :postData="postData[i]" v-for="(a, i) in postData" :key="i" />
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Container",
  props: {
    postData: Array,
  },
  components: {
    Post,
  },
};
</script>

<style></style>
