function genProps(options, cOptions) {
  let props = [];
  for (const [key, value] of Object.entries(options)) {
    const configItem = cOptions.config[key];
    if (configItem.type === "event") continue;

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

function genEvent(options, cOptions) {
  let events = [];
  let methods = [];
  for (const [key, value] of Object.entries(options)) {
    const configItem = cOptions.config[key];
    if (configItem.type !== "event" || value.trim().length === 0) continue;

    events.push(`@${key}="${value}"`);
    methods.push({ name: value, params: configItem.params ?? [] });
  }

  return { events: events.join(" "), methods: methods };
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

export function genData(options, cOptions, form) {
  const props = genProps(options.config, cOptions);
  const tag = cOptions.tag;
  const formDataName = form.form.model;
  const model = `${formDataName}.${options.itemConfig.prop}`;
  const { events, methods } = genEvent(options.config, cOptions);
  const formDataObj = {
    [formDataName]:
      { [options.itemConfig.prop]: options.config._defaultValue ?? "" } ?? {},
  };

  return { props, tag, model, events, methods, formDataObj };
}

/**
 * @param  {object} 当前组件数据
 * @param  {object} 组件所有选项
 * @param  {object} 当前表单所有数据
 */
export function defaultRender(options, cOptions, form, subComponent = "") {
  const { props, tag, model, events, methods, formDataObj } = genData(
    options,
    cOptions,
    form
  );

  const componentHTML = `<${tag} v-model="${model}" ${props} ${events}>${subComponent}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      ...formDataObj,
    },
    methods: methods,
  };
}

export function radioRender(options, cOptions, form, subComponent = "") {
  const { props, tag, model, events, methods, formDataObj } = genData(
    options,
    cOptions,
    form
  );

  // 生成options 元素
  const optionsData = `${options.itemConfig.prop}Options`;
  const childrenComponentHTML = `<el-radio
                v-for="options in ${optionsData}"
                :key="options.value"
                :label="options.label"
                >{{options.value}}}
                ${subComponent}</el-radio>`;

  const componentHTML = `<${tag} v-model="${model}" ${props} ${events}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      ...formDataObj,
      [optionsData]: options.config.options,
    },
    methods: methods,
  };
}

export function selectRender(options, cOptions, form, subComponent = "") {
  const { props, tag, model, events, methods, formDataObj } = genData(
    options,
    cOptions,
    form
  );

  // 生成options 元素
  const optionsData = `${options.itemConfig.prop}Options`;
  const childrenComponentHTML = `<el-option
                v-for="options in ${optionsData}"
                :key="options.value"
                :label="options.label"
                :value="options.value">
                ${subComponent}</el-option>`;
  const componentHTML = `<${tag} v-model="${model}" ${props} ${events}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      ...formDataObj,
      [optionsData]: options.config.options,
    },
    methods: methods,
  };
}
