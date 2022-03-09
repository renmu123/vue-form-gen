<!--  -->
<template>
  <div class="b-input">
    <el-input v-model="currentItem.sub[key]"></el-input>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    options() {
      return this.$store.state.element[this.currentItem.type];
    },
    inputsConfig() {
      return this.$store.state.element.input;
    },
    itemOptions() {
      return this.$store.state.element.itemOptions;
    },
    currentItem() {
      return this.$store.getters.currentItem;
    },
  },
  watch: {},
  methods: {},
};
</script>
<style scoped></style>
