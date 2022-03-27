import store from "@/store";

export function defaultRender(item, form) {
  let props = [];
  const options = store.getters.componentsObj[item.type];

  for (const [key, value] of Object.entries(item.sub)) {
    const configItem = options.config[key];
    if (configItem.default !== value) {
      if (configItem.use === false) {
        continue;
      }
      if (configItem.type === "string") {
        props.push(`${key}="${value}"`);
      } else {
        props.push(`:${key}="${value}"`);
      }
    }

    const componentHTML = `<${options._tag} v-model="${form.form.model}.${
      item.prop
    }" ${props.join(" ")}></${options._tag}>`;

    return {
      template: componentHTML,
      data: {
        formData: { [item.prop]: item.sub.value } ?? {},
      },
    };
  }
}

export function selectRender(item, form) {
  let props = [];
  for (const [key, value] of Object.entries(item.sub)) {
    const configItem = store.getters.componentsObj[item.type].config[key];
    // console.log(
    //   "aa",
    //   configItem,
    //   item.type,
    //   store.getters.componentsObj[item.type],
    //   key
    // );
    if (configItem.default !== value) {
      if (configItem.use === false) {
        continue;
      }
      if (configItem.type === "string") {
        props.push(`${key}="${value}"`);
      } else {
        props.push(`:${key}="${value}"`);
      }
    }
  }

  // 生成options 元素
  const optionsData = `${item.prop}Options`;
  const childrenComponentHTML = `<el-option
                v-for="item in ${optionsData}"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>`;
  // Object.entries(item.sub.options).map((item) => {});
  const componentHTML = `<el-select v-model="${form.form.model}.${
    item.prop
  }" ${props.join(" ")}>${childrenComponentHTML}</el-select>`;

  return {
    template: componentHTML,
    data: {
      formData: { [item.prop]: item.sub.value } ?? {},
      [optionsData]: item.sub.options,
    },
  };
}
