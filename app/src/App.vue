<template>
  <div id="app">
  
    <common-header :bg="bgColor" :title="title" ></common-header>
        <router-view/>
    <common-footer :bg="bgColor" @change="fn"></common-footer>

  </div>
</template>

<script>
import CommonHeader from "@/components/common/Header";
import CommonFooter from "@/components/common/Footer";

export default {
  name: "App",
  data() {
    return {
      bgColor: "red",
      title: "movie"
    };
  },
  components: {
    CommonHeader,
    CommonFooter
  },
  methods: {
    fn(color, title) {
      this.bgColor = color;
      this.title = title;
    }
  },
  created() {
    //进来就显示（methods需要调用）
    let url = this.$route.path; //    /music/musicList
    let str = url.split("/")[1]; // ['','music','musicList'] => 'music'
    switch (str) {
      case "music":
        this.bgColor = "green";
        this.title = 'music';
        break;
      case "movie":
        this.bgColor = "red";
        this.title = 'movie';
        break;
      case "book":
        this.bgColor = "blue";
        this.title = 'book';
        break;
      case "photo":
        this.bgColor = "orange";
        this.title = 'photo';
        break;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;

  -webkit-font-smoothing: antialiased;

  -moz-osx-font-smoothing: grayscale;
  margin: 1rem 0;
}

body {
  font-size: 0.32rem;
}
</style>
