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
    currentItem() {
      return this.$store.getters.currentItem;
    },
  },
  watch: {},
  methods: {},
};
</script>
<style scoped></style>
