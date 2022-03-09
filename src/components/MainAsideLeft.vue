<!--  -->
<template>
  <aside class="container">
    <div class="wrapper">
      <div class="item" @click="add('input')">输入框</div>
      <div class="item" @click="add('select')">选择框</div>
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
    this.add("select");

    this.$store.commit("setCurrentIndex", 1);
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    element() {
      return this.$store.state.element;
    },
  },
  watch: {},
  methods: {
    add(type) {
      let item = "";
      if (type === "input") {
        item = {
          type: "input",
          required: false,
          label: "输入",
          sub: { type: "text", placeholder: "请输入", clearable: false },
        };
      } else if (type === "select") {
        item = {
          type: "select",
          required: false,
          label: "选择",
          sub: {
            placeholder: "请选",
            disabled: true,
            options: [
              { value: "选项3", label: "选项3" },
              { value: "选项2", label: "选项2" },
            ],
          },
        };
      }

      for (const [key, value] of Object.entries(this.element.itemOptions)) {
        if (!(key in item) && value.default) {
          item[key] = value.default;
        }
        for (const [key2, value2] of Object.entries(this.element[type])) {
          if (!(key2 in item.sub) && value2.default) {
            // console.log(type, key2, value2);
            item.sub[key2] = value2.default;
          }
        }
      }
      console.log(item);
      this.$store.commit("pushItem", item);
      // console.log(item);
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
