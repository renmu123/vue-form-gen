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
    componentsObj() {
      return this.$store.getters.componentsObj;
    },
  },
  watch: {},
  methods: {
    genTemplate(data) {
      let formItem = data.items.map((item) => {
        let subItem = "";
        let props = [];
        if (item.type === "b-input") {
          for (const [key, value] of Object.entries(item.sub)) {
            const c = this.componentsObj[item.type].config[key];
            if (c.default !== value) {
              if (c.type === "string") {
                props.push(`${key}="${value}"`);
              } else {
                props.push(`:${key}="${value}"`);
              }
            }
          }
          subItem = `<el-input ${props.join(" ")}></el-input>`;
        } else if (item.type === "b-select") {
          // 生成属性
          for (const [key, value] of Object.entries(item.sub)) {
            const c = this.componentsObj[item.type].config[key];
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
                        v-for="item in ${data.form.model}.options"
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
      <el-form v-model="${data.form.model}" class="${
        data.class || ""
      }" label-width="${data.form["label-width"] || ""}">${formItem.join(
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
