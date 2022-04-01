function genProps(options, cOptions) {
  let props = [];
  for (const [key, value] of Object.entries(options)) {
    const configItem = cOptions.config[key];
    if (configItem.default !== value) {
      if (configItem.inProp === false) {
        continue;
      }
      if (configItem.type === "string" || configItem.type === "select") {
        props.push(`${key}="${value}"`);
      } else {
        props.push(`:${key}="${value}"`);
      }
    }
  }

  return props.join(" ");
}

export function formRender(options, cOptions, form, subComponent = "") {
  const props = genProps(options, cOptions);
  const tag = cOptions.tag;
  const formDataName = form.form.model;

  const componentHTML = `<${tag} ${props} :model="${formDataName}" ref="elForm">${subComponent}</${tag}>`;

  return {
    template: componentHTML,
  };
}

/**
 * @param  {object} 当前组件数据
 * @param  {object} 组件所有选项
 * @param  {object} 当前表单所有数据
 */
export function defaultRender(options, cOptions, form, subComponent = "") {
  const props = genProps(options.config, cOptions);
  const tag = cOptions.tag;
  const formDataName = form.form.model;
  const model = `${formDataName}.${options.itemConfig.prop}`;

  const componentHTML = `<${tag} v-model="${model}" ${props}>${subComponent}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formDataName]:
        { [options.itemConfig.prop]: options.config._defaultValue } ?? {},
    },
  };
}

export function radioRender(options, cOptions, form, subComponent = "") {
  const props = genProps(options.config, cOptions);
  const tag = cOptions.tag;
  const formDataName = form.form.model;
  const model = `${formDataName}.${options.itemConfig.prop}`;

  // 生成options 元素
  const optionsData = `${options.itemConfig.prop}Options`;
  const childrenComponentHTML = `<el-radio
                v-for="options in ${optionsData}"
                :key="options.value"
                :label="options.label"
                >{{options.value}}}
                ${subComponent}</el-radio>`;

  const componentHTML = `<${tag} v-model="${model}" ${props}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formDataName]:
        { [options.itemConfig.prop]: options.config._defaultValue } ?? {},
      [optionsData]: options.config.options,
    },
  };
}

export function selectRender(options, cOptions, form, subComponent = "") {
  const props = genProps(options.config, cOptions);
  const tag = cOptions.tag;
  const formDataName = form.form.model;
  const model = `${formDataName}.${options.itemConfig.prop}`;

  // 生成options 元素
  const optionsData = `${options.itemConfig.prop}Options`;
  const childrenComponentHTML = `<el-option
                v-for="options in ${optionsData}"
                :key="options.value"
                :label="options.label"
                :value="options.value">
                ${subComponent}</el-option>`;
  const componentHTML = `<${tag} v-model="${model}" ${props}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formDataName]:
        { [options.itemConfig.prop]: options.config._defaultValue } ?? {},
      [optionsData]: options.config.options,
    },
  };
}
