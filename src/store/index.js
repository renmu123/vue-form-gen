import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      modal: "form",
      "label-width": "80px",
      items: [],
    },
    element: {
      input: {
        type: {
          type: "string",
          default: "text",
          name: "类型",
        },
        maxlength: {
          type: "number",
          name: "最大输入长度",
        },
        minlength: {
          type: "number",
          name: "最小输入长度",
        },
        "show-word-limit": {
          type: "boolean",
          default: false,
          name: "是否显示输入字数统计",
        },
        placeholder: {
          type: "string",
          default: "请输入",
          name: "占位文本",
        },
        clearable: {
          type: "boolean",
          default: false,
          name: "是否可清空",
        },
        "show-password": {
          type: "boolean",
          default: false,
          name: "是否显示切换密码图标",
        },
        disabled: {
          type: "boolean",
          default: false,
          name: "禁用",
        },
        size: {
          type: "string",
          name: "输入框尺寸",
          msg: "只在 type!='textarea' 时有效",
        },
        "prefix-icon": {
          type: "string",
          name: "输入框头部图标",
        },
        "suffix-icon": {
          type: "string",
          name: "输入框尾部图标",
        },
        rows: {
          type: "number",
          default: 2,
          name: "输入框行数",
        },
        autosize: {
          type: "boolean",
          default: false,
          name: "自适应内容高度",
        },
        autocomplete: {
          type: "string",
          default: "off",
          select: ["on", "off"],
          name: "自动补全",
        },
        name: {
          type: "string",
          name: "原生属性 name",
        },
        readonly: {
          type: "boolean",
          default: false,
          name: "原生属性，是否只读",
        },
        max: {
          type: "number",
          name: "	原生属性，设置最大值",
        },
        min: {
          type: "number",
          name: "原生属性，设置最小值",
        },
        step: {
          type: "number",
          name: "原生属性，设置输入字段的合法数字间隔",
        },
        resize: {
          type: "string",
          name: "控制是否能被用户缩放",
        },
        autofocus: {
          type: "boolean",
          name: "原生属性，自动获取焦点",
        },
        form: {
          type: "string",
          name: "原生属性 form",
        },
        label: {
          type: "string",
          name: "输入框关联的label文字",
        },
        tabindex: {
          type: "string",
          name: "输入框的tabindex",
        },
        "validate-event": {
          type: "boolean",
          default: true,
          name: "输入时是否触发表单的校验",
        },
      },
      common: {
        prop: {
          type: "string",
          default: "text",
          name: "表单域 model 字段",
        },
        label: {
          type: "string",
          name: "	标签文本",
        },
        "label-width": {
          type: "string",
          name: "表单域标签的的宽度",
        },
        required: {
          type: "boolean",
          default: false,
          name: "是否必填",
        },
        "show-message": {
          type: "boolean",
          default: true,
          name: "是否显示校验错误信息",
        },
        "inline-message": {
          type: "boolean",
          default: false,
          name: "以行内形式展示校验信息",
        },
        size: {
          type: "string",
          name: "用于控制该表单域下组件的尺寸",
          select: ["medium", "small", "mini"],
        },
      },
    },
    currentIndex: -1,
  },
  getters: {
    currentItem(state) {
      if (state.currentIndex === -1) {
        return [];
      }
      console.log(typeof state.currentIndex, state.form.items);
      return state.form.items[state.currentIndex];
    },
  },
  mutations: {
    updateForm(state, data) {
      state.form = data;
    },
    updateItem(state, newItems) {
      state.form.items = newItems;
    },
    pushItem(state, item) {
      state.form.items.push(item);
    },
    setCurrentIndex(state, index) {
      state.currentIndex = Number(index);
    },
  },
  actions: {},
  modules: {},
});
