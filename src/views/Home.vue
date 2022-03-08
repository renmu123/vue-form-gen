<template>
  <div>
    <v-header></v-header>
    <div class="home">
      <main-aside-left></main-aside-left>
      <main-content></main-content>
      <main-aside-right></main-aside-right>
    </div>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader.vue";
import MainAsideLeft from "@/components/MainAsideLeft.vue";
import MainAsideRight from "@/components/MainAsideRight.vue";
import MainContent from "@/components/MainContent.vue";

export default {
  name: "Home",
  components: {
    VHeader,
    MainAsideLeft,
    MainAsideRight,
    MainContent,
  },
};
</script>
<style scoped>
.home {
  display: flex;
}
</style>
