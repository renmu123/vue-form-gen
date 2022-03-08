<template>
  <div class=""></div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {
      element: {
        input: {
          type: {
            type: "string",
            default: "text",
          },
          maxlength: {
            type: "number",
          },
          minlength: {
            type: "number",
          },
          "show-word-limit": {
            type: "boolean",
            default: false,
          },
          placeholder: {
            type: "string",
            default: "请输入",
          },
          clearable: {
            type: "boolean",
            default: false,
          },
          "show-password": {
            type: "boolean",
            default: false,
          },
          disabled: {
            type: "bolean",
            default: false,
          },
          size: {
            type: "string",
            msg: "只在 type!='textarea' 时有效",
          },
          "prefix-icon": {
            type: "string",
          },
          "suffix-icon": {
            type: "string",
          },
          rows: {
            type: "number",
            default: 2,
          },
          autosize: {
            type: "boolean",
            default: false,
          },
          autocomplete: {
            type: "string",
            default: "off",
            select: ["on", "off"],
          },
          name: {
            type: "string",
          },
          readonly: {
            type: "boolean",
            default: false,
          },
          max: {
            type: "number",
          },
          min: {
            type: "number",
          },
          step: {
            type: "number",
          },
          resize: {
            type: "string",
          },
          autofocus: {
            type: "boolean",
          },
          form: {
            type: "string",
          },
          label: {
            type: "string",
          },
          tabindex: {
            type: "string",
          },
          "validate-event": {
            type: "boolean",
            default: true,
          },
        },
      },
      data: {
        "hide-required-asterisk": false,
        "show-message": true,
        "label-width": "100px",
        /**
         * medium,small,mini
         */
        size: "",
        modal: "form",
        item: [
          {
            type: "input",
            required: false,
            label: "年龄",
            prop: "name",
            sub: { type: "text", placeholder: "hello" },
          },
          {
            type: "input",
            required: false,
            label: "年龄1",
            prop: "name1",
            sub: { type: "text", placeholder: "hello" },
          },
          {
            type: "input",
            required: false,
            label: "年龄2",
            prop: "name2",
            sub: { type: "text", placeholder: "hello" },
          },
          {
            type: "input",
            required: true,
            label: "年龄3",
            prop: "name3",
            sub: { type: "text", placeholder: "hello" },
          },
        ],
      },
    };
  },
  created() {},
  mounted() {
    this.genForm(this.data);
  },
  computed: {},
  watch: {},
  methods: {
    genTemplate(data) {
      let formItem = data.item.map((item) => {
        let subItem = "";
        let props = [];
        if (item.type === "input") {
          let newItem = {};
          for (const [key, value] of Object.entries(item.sub)) {
            if (this.element.input[key].default !== value) {
              newItem[key] = value;
              props.push(`${key}="${value}"`);
            }
          }

          subItem = `<el-input ${props.join(" ")}></el-input>`;
        }
        return `<el-form-item label="${item.label}" prop="${item.prop}" v-model="${data.modal}.${item.prop}">${subItem}</el-form-item>`;
      });
      let result = `
      <el-form v-model="${data.modal}" class="${
        data.class || ""
      }" label-width="${data["label-width"]}">${formItem.join("")}</el-form>
      `;
      console.log(result);
    },
    genData() {},
    genForm(data) {
      const template = this.genTemplate(data);
      // let example = `
      // <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
      //   <el-form-item
      //     label="年龄"
      //     prop="age"
      //     :rules="[
      //       { required: true, message: '年龄不能为空'},
      //       { type: 'number', message: '年龄必须为数字值'}
      //     ]"
      //   >
      //     <el-input type="age" v-model="numberValidateForm.age" autocomplete="off"></el-input>
      //   </el-form-item>
      //   <el-form-item>
      //     <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      //     <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      //   </el-form-item>
      // </el-form>
      // `;
      // console.log(example);
    },
  },
};
</script>
<style scoped></style>
