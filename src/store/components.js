import {
  defaultRender,
  selectRender,
  radioRender,
  formRender,
} from "@/components/render/render";

const ElSelect = {
  doc: "https://element.eleme.cn/#/zh-CN/component/select",
  desc: "",
  author: "",
  title: "选择器",
  name: "el-select",
  category: "基础组件",
  icon: "form-select",
  tag: "el-select",
  _render: selectRender,

  config: {
    _defaultValue: {
      type: "string",
      default: "",
      name: "默认值",
      inProp: false,
    },
    options: {
      type: "select-options",
      name: "选项",
      default: [
        { value: "选项1", label: "选项1" },
        { value: "选项2", label: "选项2" },
      ],
      inProp: false,
    },
    placeholder: {
      type: "string",
      default: "请选择",
      name: "占位文本",
    },
    disabled: {
      type: "boolean",
      default: false,
      name: "禁用",
    },
    size: {
      type: "select",
      name: "输入框尺寸",
      select: ["medium", "small", "mini"],
    },
    clearable: {
      type: "boolean",
      name: "允许清空",
      default: true,
    },
    multiple: {
      type: "boolean",
      default: false,
      name: "多选",
    },
    "collapse-tags": {
      type: "boolean",
      name: "按文字的形式展示",
      tip: "多选时将选中值按文字的形式展示",
      default: false,
    },
    "multiple-limit": {
      type: "number",
      name: "多选最多项目数",
      tip: "多选时用户最多可以选择的项目数，为 0 则不限制",
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
      name: "可搜索",
    },
    "allow-create": {
      type: "boolean",
      name: "允许用户创建新条目，需配合 filterable 使用",
      default: false,
      show: false,
    },
    "filter-method": {
      type: "string",
      name: "自定义搜索方法",
      show: false,
    },
    remote: {
      type: "boolean",
      name: "为远程搜索",
      default: false,
      show: false,
    },
    "remote-method": {
      type: "string",
      name: "远程搜索方法",
      show: false,
    },
    loading: {
      type: "boolean",
      name: "正在从远程获取数据",
      default: false,
      show: false,
    },
    "loading-text": {
      type: "string",
      name: "远程加载时显示的文字",
      default: "加载中",
      show: false,
    },
    "no-match-text": {
      type: "string",
      name: "搜索条件无匹配时显示的文字",
      default: "无匹配数据",
      tip: "也可以使用slot='empty'设置",
      show: false,
    },
    "no-data-text": {
      type: "string",
      name: "选项为空时显示的文字",
      default: "无数据",
      tip: "也可以使用slot='empty'设置",
    },
    "popper-class": {
      type: "string",
      name: "Select 下拉框的类名",
    },
    "reserve-keyword": {
      type: "boolean",
      name: "多选且可搜索时，在选中一个选项后保留当前的搜索关键词",
      default: false,
    },
    "default-first-option": {
      type: "boolean",
      name: "回车后选择第一个匹配项",
      default: false,
      tip: "需配合 filterable 或 remote 使用",
    },
    "popper-append-to-body": {
      type: "boolean",
      name: "将弹出框插入至 body 元素",
      tip: "在弹出框的定位出现问题时，可将该属性设置为 false",
      default: true,
    },
    "automatic-dropdown": {
      type: "boolean",
      name: "对于不可搜索的 Select，在输入框获得焦点后自动弹出选项菜单",
      default: false,
      show: false,
    },
  },
  defaultConfig: {
    _defaultValue: "",
    placeholder: "请选择",
    disabled: false,
    options: [
      { value: "选项3", label: "选项3" },
      { value: "选项2", label: "选项2" },
    ],
  },
};

const ElInput = {
  doc: "https://element.eleme.cn/#/zh-CN/component/input",
  desc: "",
  author: "",
  category: "基础组件",
  title: "输入框",
  name: "el-input",
  icon: "form-input",
  tag: "el-input",
  _render: defaultRender,

  config: {
    _defaultValue: {
      type: "string",
      default: "",
      name: "默认值",
      inProp: false,
    },
    type: {
      type: "select",
      default: "text",
      name: "类型",
      select: ["text", "textarea", "number", "password", "file", "color"],
    },
    placeholder: {
      type: "string",
      default: "",
      name: "占位文本",
    },
    clearable: {
      type: "boolean",
      default: false,
      name: "可清空",
    },
    disabled: {
      type: "boolean",
      default: false,
      name: "禁用",
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
      name: "显示字数统计",
    },
    "show-password": {
      type: "boolean",
      default: false,
      name: "显示密码图标",
    },
    size: {
      type: "select",
      name: "输入框尺寸",
      tip: "只在 type!='textarea' 时有效",
      select: ["medium ", "small", "mini"],
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
      name: "name",
      tip: "原生属性",
    },
    readonly: {
      type: "boolean",
      default: false,
      name: "只读",
      tip: "原生属性",
    },
    max: {
      type: "number",
      name: "最大值",
      tip: "原生属性",
    },
    min: {
      type: "number",
      name: "最小值",
    },
    step: {
      type: "number",
      name: "合法数字间隔",
      tip: "原生属性",
    },
    resize: {
      type: "string",
      name: "控制能被用户缩放",
    },
    autofocus: {
      type: "boolean",
      name: "自动获取焦点",
      tip: "原生属性",
    },
    form: {
      type: "string",
      name: "form",
      tip: "原生属性",
    },
    label: {
      type: "string",
      name: "关联label文字",
    },
    tabindex: {
      type: "string",
      name: "tabindex",
    },
    "validate-event": {
      type: "boolean",
      default: true,
      name: "输入触发校验",
    },
  },
  defaultConfig: {
    _defaultValue: "",
    type: "text",
    placeholder: "请输入",
    clearable: false,
  },
};

const elRadioGroup = {
  doc: "https://element.eleme.cn/#/zh-CN/component/radio",
  desc: "",
  author: "",
  category: "基础组件",
  title: "单选框",
  name: "el-radio-group",
  icon: "el-radio-group",
  tag: "el-radio-group",
  _render: radioRender,

  config: {
    _defaultValue: {
      type: "string",
      default: "",
      name: "默认值",
      inProp: false,
    },
    options: {
      type: "select-options",
      name: "选项",
      default: [
        { value: "选项1", label: "1" },
        { value: "选项2", label: "2" },
      ],
      inProp: false,
    },
    disabled: {
      type: "boolean",
      default: false,
      name: "禁用",
      inProp: false,
    },
    border: {
      type: "boolean",
      default: false,
      name: "显示边框",
      inProp: false,
    },
    size: {
      type: "select",
      default: "",
      name: "大小",
      select: ["medium", "small", "mini"],
      inProp: false,
    },
  },
  defaultConfig: {},
};

export const itemOptions = {
  doc: "https://element.eleme.cn/#/zh-CN/component/form",
  desc: "表单组件",
  author: "",
  name: "el-form",
  tag: "el-form",
  // _render: formRender,
  config: {
    prop: {
      type: "string",
      default: "field",
      name: "字段名",
    },
    label: {
      type: "string",
      name: "标签文本",
    },
    "label-width": {
      type: "string",
      name: "标签宽度",
    },
    required: {
      type: "boolean",
      default: false,
      name: "必填",
    },
    "show-message": {
      type: "boolean",
      default: true,
      name: "显示校验错误信息",
    },
    "inline-message": {
      type: "boolean",
      default: false,
      name: "以行内形式展示校验信息",
    },
    size: {
      type: "select",
      name: "尺寸",
      select: ["medium", "small", "mini"],
    },
  },
};

export const formOptions = {
  doc: "https://element.eleme.cn/#/zh-CN/component/form",
  desc: "表单组件",
  author: "",
  name: "el-form",
  tag: "el-form",
  _render: formRender,

  config: {
    model: {
      type: "string",
      name: "表单数据对象",
      inProp: false,
    },
    inline: {
      type: "boolean",
      default: false,
      name: "行内表单模式",
    },
    "label-position": {
      type: "select",
      default: "right",
      select: ["right", "left", "top"],
      name: "位置",
    },
    "label-width": {
      type: "string",
      name: "宽度",
    },
    disabled: {
      type: "boolean",
      default: true,
      name: "禁用表单",
    },
    "hide-required-asterisk": {
      type: "boolean",
      default: false,
      name: "隐藏必填字段的标签旁边的红色星号",
    },
    size: {
      type: "select",
      name: "尺寸",
      select: ["medium", "small", "mini"],
    },
    "show-message": {
      type: "boolean",
      default: true,
      name: "显示校验错误信息",
    },
    "inline-message": {
      type: "boolean",
      default: false,
      name: "行内展示校验信息",
    },
    "status-icon": {
      type: "boolean",
      default: false,
      name: "输入框中显示校验结果反馈图标",
    },
    "validate-on-rule-change": {
      type: "boolean",
      default: true,
      name: "在 rules 属性改变后立即触发一次验证",
    },
    "label-suffix": {
      type: "string",
      name: "后缀",
    },
  },
};

export const componentsData = [ElInput, ElSelect, elRadioGroup];
