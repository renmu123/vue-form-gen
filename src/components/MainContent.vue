<!--  -->
<template>
  <div class="aside">
    <el-form class="" :label-width="form['label-width'] || ''"
      ><el-form-item
        :label="item.label"
        prop="name"
        v-for="(item, index) in form.items"
        :key="index"
      >
        <el-input
          v-if="item.type === 'input'"
          :placeholder="item.sub.placeholder"
          :type="item.sub.type"
        ></el-input
        ><el-button @click="config(index)">设置</el-button>
      </el-form-item></el-form
    >
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {
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
  mounted() {},
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
      }" label-width="${data["label-width"] || ""}">${formItem.join(
        ""
      )}</el-form>
      `;
      console.log(result);
    },
    genData() {},
    config(index) {
      // console.log("aaa", index);
      this.$store.commit("setCurrentIndex", index);
    },
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
<style scoped>
.aside {
  width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
