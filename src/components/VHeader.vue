<template>
  <div class="">
    <el-button @click="dialogVisible = true">生成</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <el-button @click="genText(form)">生成</el-button>
      <p style="white-space: pre-wrap">{{ template }}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { jsFormat, htmlFormat, cssFormat } from "@/utils";

export default {
  components: {},
  data() {
    return {
      template: "",
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {
    // console.log(this.genVueScript("export default{aa:'aa'}"));
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
    genData(data) {
      let formItem = data.items.map((item) => {
        console.log("item", item);
        const render = this.$store.getters.componentsObj[item.type]._render;

        let subItem = render(item, data).template;

        return `<el-col :span="${item.span}"><el-form-item label="${item.label}" prop="${item.prop}">${subItem}</el-form-item></el-col>`;
      });

      let html = `
      <el-row><el-form v-model="${data.form.model}" label-width="${
        data.form["label-width"] || ""
      }" ref="elForm">${formItem.join("")}</el-form></el-row>
      `;

      return this.genVueTemplate(html);
      return {
        template: "",
        data: "",
      };
    },
    genHtml(item, form) {},
    genJS(data) {},

    genVueTemplate(val) {
      const formatVal = htmlFormat(val);
      return `<template>
        <div>
          ${formatVal}
        </div>
      </template>`;
    },
    genVueScript(val) {
      const formatVal = jsFormat(val);

      return `<script>\n${formatVal}\n<script>`;
    },
    genVueStyle(val) {
      return `<style scoped>\n${val}\n<style>`;
    },

    genText(data) {
      const template = this.genData(data);
      this.template = template;
      console.log(this.template);
      // console.log(jsFormat("console.log('aa')"));
    },
  },
};
</script>
<style scoped></style>
