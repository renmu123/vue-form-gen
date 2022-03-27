<template>
  <div class="">
    <el-button @click="dialogVisible = true">生成</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="80%">
      <el-button @click="genText(form)">生成</el-button>
      <p style="white-space: pre-wrap">{{ template }}</p>
      <p style="white-space: pre-wrap">{{ script }}</p>
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
import { merge } from "lodash-es";

export default {
  components: {},
  data() {
    return {
      template: "",
      script: "",
      style: "",
      dialogVisible: false,
    };
  },
  created() {},
  mounted() {
    setTimeout(() => {
      console.log(this.genText(this.form));
    }, 500);
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
    genItemData(data) {
      let formItem = data.items.map((item) => {
        const render = this.$store.getters.componentsObj[item.type]._render;

        let subItem = render(item, data);

        subItem.template = `<el-col :span="${item.span}"><el-form-item label="${item.label}" prop="${item.prop}">${subItem}</el-form-item></el-col>`;
        return subItem;
      });

      return formItem;
    },
    genHtml(items, form) {
      let html = `
      <el-row :gutter="15">
        <el-form v-model="${form.form.model}" label-width="${
        form.form["label-width"] || ""
      }" ref="elForm">${items.map((item) => item.template).join("")}
        </el-form>
      </el-row>
      `;

      return this.genVueTemplate(html);
    },
    genJS(items, form) {
      let importContent = [];
      let components = {};
      let props = [];
      let computed = {};
      let watch = {};
      let created = [];
      let mounted = [];
      let methods = [];

      let data = {};
      items.forEach((item) => {
        merge(data, item.data);
      });
      return this.genVueScript(`
      export default {
        components:{},
        props:[],
        data(){return ${JSON.stringify(data)}},
        computed:{},
        watch:{},
        created(){},
        mounted(){},
        methods:{},
      }`);
    },

    genVueTemplate(val) {
      return htmlFormat(`
      <template>
        <div>
          ${val}
        </div>
      </template>`);
    },
    genVueScript(val) {
      const formatVal = jsFormat(val);

      return `<script>\n${formatVal}\n<script>`;
    },
    genVueStyle(val) {
      return `<style scoped>\n${val}\n<style>`;
    },

    genText(form) {
      const formItems = this.genItemData(form);
      this.template = this.genHtml(formItems, form);

      this.script = this.genJS(formItems);

      this.style = this.genVueStyle("");
    },
  },
};
</script>
<style scoped></style>
