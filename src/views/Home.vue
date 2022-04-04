<template>
  <div>
    <v-header></v-header>
    <div class="home">
      <main-aside-left></main-aside-left>
      <main-content style="flex-grow: 1"></main-content>
      <main-aside-right></main-aside-right>
    </div>
  </div>
</template>

<script>
import VHeader from "@/components/VHeader.vue";
import MainAsideLeft from "@/components/MainAsideLeft.vue";
import MainAsideRight from "@/components/MainAsideRight.vue";
import MainContent from "@/components/MainContent.vue";
import { saveForm, setSpan, setGlobalId } from "@/api";

export default {
  name: "Home",
  components: {
    VHeader,
    MainAsideLeft,
    MainAsideRight,
    MainContent,
  },
  data() {
    return {
      value: "111",
    };
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
  },
  methods: {},
  watch: {
    form: {
      async handler(newVal) {
        await saveForm(newVal);
      },
      deep: true,
    },
    "$store.state.span": {
      async handler(newVal) {
        await setSpan(newVal);
      },
    },
    "$store.state.globalId": {
      async handler(newVal) {
        await setGlobalId(newVal);
      },
    },
  },
};
</script>
<style scoped>
.home {
  display: flex;
}
</style>
