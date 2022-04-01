function genProps(item, options) {
  let props = [];
  for (const [key, value] of Object.entries(item.sub)) {
    const configItem = options.config[key];
    if (configItem.default !== value) {
      if (configItem.inProp === false) {
        continue;
      }
      if (configItem.type === "string") {
        props.push(`${key}="${value}"`);
      } else {
        props.push(`:${key}="${value}"`);
      }
    }
  }

  return props.join(" ");
}

export function defaultRender(item, options, form) {
  const props = genProps(item, options);
  const tag = options.tag;
  const formData = form.form.model;
  const model = `${formData}.${item.prop}`;

  const componentHTML = `<${tag} v-model="${model}" ${props}></${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formData]: { [item.prop]: item.sub._defaultValue } ?? {},
    },
  };
}

export function radioRender(item, options, form) {
  const props = genProps(item, options);
  const tag = options.tag;
  const formData = form.form.model;
  const model = `${formData}.${item.prop}`;

  // 生成options 元素
  const optionsData = `${item.prop}Options`;
  const childrenComponentHTML = `<el-radio
                v-for="item in ${optionsData}"
                :key="item.value"
                :label="item.label"
                >{{item.value}}}
              </el-radio>`;

  const componentHTML = `<${tag} v-model="${model}" ${props}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formData]: { [item.prop]: item.sub._defaultValue } ?? {},
      [optionsData]: item.sub.options,
    },
  };
}

export function selectRender(item, options, form) {
  const props = genProps(item, options);
  const tag = options.tag;
  const formData = form.form.model;
  const model = `${formData}.${item.prop}`;

  // 生成options 元素
  const optionsData = `${item.prop}Options`;
  const childrenComponentHTML = `<el-option
                v-for="item in ${optionsData}"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>`;
  const componentHTML = `<${tag} v-model="${model}" ${props}>${childrenComponentHTML}</${tag}>`;

  return {
    template: componentHTML,
    data: {
      [formData]: { [item.prop]: item.sub._defaultValue } ?? {},
      [optionsData]: item.sub.options,
    },
  };
}
