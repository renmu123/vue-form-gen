const BSelect = {
  doc: "https://element.eleme.cn/#/zh-CN/component/select",
  desc: "",
  author: "",
  title: "选择器",
  name: "b-select",
  category: "基础组件",
  icon: "form-select",
  replaceName: "el-select",
  config: {
    options: {
      type: "select-options",
      name: "选项",
      default: [
        { value: "选项1", label: "选项1" },
        { value: "选项2", label: "选项2" },
      ],
      use: false,
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
      name: "允许清空",
      default: true,
    },
    multiple: {
      type: "boolean",
      default: false,
      name: "是否多选",
    },
    "collapse-tags": {
      type: "boolean",
      name: "按文字的形式展示",
      tip: "多选时是否将选中值按文字的形式展示",
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
      name: "是否可搜索",
    },
    "allow-create": {
      type: "boolean",
      name: "是否允许用户创建新条目，需配合 filterable 使用",
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
      name: "是否为远程搜索",
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
      name: "是否正在从远程获取数据",
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
      name: "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
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
      name: "是否将弹出框插入至 body 元素",
      tip: "在弹出框的定位出现问题时，可将该属性设置为 false",
      default: true,
    },
    "automatic-dropdown": {
      type: "boolean",
      name: "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
      default: false,
      show: false,
    },
  },
};

const BInput = {
  doc: "https://element.eleme.cn/#/zh-CN/component/input",
  desc: "",
  author: "",
  category: "基础组件",
  title: "输入框",
  name: "b-input",
  replaceName: "el-input",
  icon: "form-input",
  config: {
    value: {
      type: "string",
      default: "",
      name: "默认值",
    },
    type: {
      type: "select",
      default: "text",
      name: "类型",
      select: ["text", "textarea", "number", "password", "file", "color"],
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
      name: "是否显示输入字数统计",
    },
    "show-password": {
      type: "boolean",
      default: false,
      name: "是否显示切换密码图标",
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
      name: "控制是否能被用户缩放",
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
      name: "输入时是否触发表单的校验",
    },
  },
};

export const itemOptions = {
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
};

export const formOptions = {
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
};

export const componentsData = [BInput, BSelect];
