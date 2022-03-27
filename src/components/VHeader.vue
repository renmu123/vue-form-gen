<template>
  <div class="">
    <el-button @click="genForm(form)">生成</el-button>
    <!-- <el-input type="textarea" v-model="template" autosize></el-input> -->
  </div>
</template>

<script>
import { defaultRender, selectRender } from "@/components/render/render";

export default {
  components: {},
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
        console.log("item", item);
        const render = this.$store.getters.componentsObj[item.type].render;
        console.log("pp", render);

        let subItem = render(item, data).template;

        return `<el-form-item label="${item.label}" prop="${item.prop}">${subItem}</el-form-item>`;
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
