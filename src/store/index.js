import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    form: {
      model: "form",
      "label-width": "80px",
      items: [],
    },
    element: {
      input: {
        type: {
          type: "select",
          default: "text",
          name: "类型",
          select: ["text", "textarea", "number", "password", "file", "color"],
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
          type: "select",
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
      select: {
        options: {
          type: "select-options",
          name: "选项",
          default: [
            { value: "选项1", label: "选项1" },
            { value: "选项2", label: "选项2" },
          ],
          use: false,
        },
        multiple: {
          type: "boolean",
          default: false,
          name: "是否多选",
        },
        placeholder: {
          type: "string",
          default: "请选择",
          name: "占位文本",
        },
        disabled: {
          type: "boolean",
          default: false,
          name: "是否禁用",
        },
        size: {
          type: "select",
          name: "输入框尺寸",
          select: ["medium", "small", "mini"],
        },
        clearable: {
          type: "boolean",
          name: "是否可以清空选项",
          default: true,
        },
        "collapse-tags": {
          type: "boolean",
          name: "多选时是否将选中值按文字的形式展示",
          default: false,
        },
        "multiple-limit": {
          type: "number",
          name: "多选时用户最多可以选择的项目数，为 0 则不限制",
          default: 0,
        },
        name: {
          type: "string",
          name: "select input 的 name 属性",
        },
        autocomplete: {
          type: "select",
          name: "select input 的 autocomplete 属性",
          select: ["on", "off"],
          default: "off",
        },
        filterable: {
          type: "boolean",
          default: false,
          name: "是否可搜索",
        },
        "allow-create": {
          type: "boolean",
          name: "是否允许用户创建新条目，需配合 filterable 使用",
          default: false,
        },
        "filter-method": {
          type: "string",
          name: "自定义搜索方法",
        },
        remote: {
          type: "boolean",
          name: "是否为远程搜索",
          default: false,
        },
        "remote-method": {
          type: "string",
          name: "远程搜索方法",
        },
        loading: {
          type: "boolean",
          name: "是否正在从远程获取数据",
          default: false,
        },
        "loading-text": {
          type: "string",
          name: "远程加载时显示的文字",
          default: "加载中",
        },
        "no-match-text": {
          type: "string",
          name: '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
          default: "无匹配数据",
        },
        "no-data-text": {
          type: "string",
          name: '选项为空时显示的文字，也可以使用slot="empty"设置',
          default: "无数据",
        },
        "popper-class": {
          type: "string",
          name: "Select 下拉框的类名",
        },
        "reserve-keyword": {
          type: "boolean",
          name: "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
          default: false,
        },
        "default-first-option": {
          type: "boolean",
          name: "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
          default: false,
        },
        "popper-append-to-body": {
          type: "boolean",
          name: "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
          default: true,
        },
        "automatic-dropdown": {
          type: "boolean",
          name: "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
          default: false,
        },
      },
      itemOptions: {
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
          type: "select",
          name: "用于控制该表单域下组件的尺寸",
          select: ["medium", "small", "mini"],
        },
      },
      formOptions: {
        model: {
          type: "string",
          name: "表单数据对象",
        },
        inline: {
          type: "boolean",
          default: false,
          name: "行内表单模式",
        },
        "label-position": {
          type: "string",
          default: "right",
          select: ["right", "left", "top"],
          name: "表单域标签的位置",
        },
        "label-width": {
          type: "string",
          name: "表单域标签的宽度",
        },
        "label-suffix": {
          type: "string",
          name: "表单域标签的后缀",
        },
        "hide-required-asterisk": {
          type: "boolean",
          default: false,
          name: "是否显示必填字段的标签旁边的红色星号",
        },
        "show-message": {
          type: "boolean",
          default: true,
          name: "是否显示校验错误信息",
        },
        "inline-message": {
          type: "boolean",
          default: false,
          name: "是否以行内形式展示校验信息",
        },
        "status-icon": {
          type: "boolean",
          default: false,
          name: "是否在输入框中显示校验结果反馈图标",
        },
        "validate-on-rule-change": {
          type: "boolean",
          default: true,
          name: "是否在 rules 属性改变后立即触发一次验证",
        },
        size: {
          type: "string",
          select: ["medium", "small", "mini"],
          name: "用于控制该表单内组件的尺寸",
        },
        disabled: {
          type: "boolean",
          default: true,
          name: "是否禁用该表单内的所有组件",
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
      // console.log(typeof state.currentIndex, state.form.items);
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
