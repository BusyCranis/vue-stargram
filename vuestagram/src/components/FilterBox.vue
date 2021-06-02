<template>
  <div
    @click="pushFilterBox"
    :class="`${filteri} filter-item`"
    :style="`background-image : url(${imageUrl})`"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    filteri: String,
  },
  methods: {
    pushFilterBox() {
      this.emitter.emit("sendFilterBox", this.filteri);
      //console.log("filter ==>", this.filteri);
    },
  },
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
  cursor: pointer;
}
</style>
