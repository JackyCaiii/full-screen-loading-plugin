<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Vue from "vue";
import FullScreenLoadingPlugin from "../lib/index";
Vue.use(FullScreenLoadingPlugin);

export default {
  name: "Home",

  created() {
    this.$fullScreenLoading.show("请求中...");
    setTimeout(() => {
      this.$fullScreenLoading.hide();
    }, 2000);
    setTimeout(() => {
      this.$fullScreenLoading.show();
    }, 3000);
  }
};
</script>
