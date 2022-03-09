<template>
  <div class="" style="height: 300px">
    <el-button @click="genTemplate">生成</el-button>
    <el-input type="textarea" v-model="template" autosize></el-input>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {
      template: "",
    };
  },
  created() {},
  mounted() {
    this.template = this.genTemplate(this.form);
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
    genTemplate(data) {
      let formItem = data.items.map((item) => {
        let subItem = "";
        let props = [];
        if (item.type === "input") {
          for (const [key, value] of Object.entries(item.sub)) {
            const c = this.element.input[key];
            if (c.default !== value) {
              if (c.type === "string") {
                props.push(`${key}="${value}"`);
              } else {
                props.push(`:${key}="${value}"`);
              }
            }
          }
          subItem = `<el-input ${props.join(" ")}></el-input>`;
        } else if (item.type === "select") {
          // 生成属性
          for (const [key, value] of Object.entries(item.sub)) {
            const c = this.element.select[key];
            if (c.default !== value) {
              if (c.use === false) {
                continue;
              }
              if (c.type === "string") {
                props.push(`${key}="${value}"`);
              } else {
                props.push(`:${key}="${value}"`);
              }
            }
          }

          // 生成options 元素
          const subSubItem = `<el-option
                        v-for="item in ${data.model}.options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>`;
          // Object.entries(item.sub.options).map((item) => {});
          subItem = `<el-select ${props.join(" ")}>${subSubItem}</el-select>`;
        }
        return `<el-form-item label="${item.label}" prop="${item.prop}" v-model="${data.model}.${item.prop}">${subItem}</el-form-item>`;
      });
      let result = `
      <el-form v-model="${data.model}" class="${
        data.class || ""
      }" label-width="${data["label-width"] || ""}">${formItem.join(
        ""
      )}</el-form>
      `;

      return result;
    },
    genData() {},

    genForm(data) {
      const template = this.genTemplate(data);
      console.log(template);
    },
  },
};
</script>
<style scoped></style>
