<!--  -->
<template>
  <aside class="container">
    <!-- <div>组件</div> -->
    <div class="wrapper">
      <div class="item" @click="add('input')">输入框</div>
    </div>
  </aside>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.add("input");
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
  },
  watch: {},
  methods: {
    add(type) {
      let data = "";
      if (type === "input") {
        data = {
          type: "input",
          required: false,
          label: "输入",
          sub: { type: "text", placeholder: "请输入" },
        };
      }
      this.$store.commit("pushItem", data);
    },
  },
};
</script>
<style scoped>
.container {
  width: 200px;
  border-right: 1px solid;
}
.item {
  height: 40px;
  width: 40px;
  border: 1px solid;
  cursor: pointer;
}
</style>
