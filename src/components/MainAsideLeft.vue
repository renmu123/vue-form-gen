<!--  -->
<template>
  <aside class="container">
    <div
      class="wrapper"
      v-for="([category, items], index) in componentsArr"
      :key="index"
    >
      <p>{{ category }}</p>
      <draggable
        class="dragArea list-group c-container"
        :list="items"
        :group="{ name: 'components', pull: 'clone', put: false }"
        :clone="clone"
        :sort="false"
      >
        <div class="c-body" v-for="(item, index2) in items" :key="index2">
          <div class="c-item" @click="add(item.name)">
            <i :class="item.icon" />
            {{ item.title }}
          </div>
        </div>
      </draggable>
    </div>
  </aside>
</template>

<script>
import { groupBy } from "lodash-es";
import draggable from "vuedraggable";

import { getForm, getGobalId, getSpan } from "@/api";

export default {
  components: {
    draggable,
  },
  data() {
    return {};
  },
  created() {},
  async mounted() {
    await this.init();
    this.$store.commit("setCurrentIndex", 0);
  },
  computed: {
    componentsArr() {
      const obj = groupBy(this.$store.state.componentsArr, "category");
      return Object.entries(obj);
    },
    componentsObj() {
      return this.$store.getters.componentsObj;
    },
    formOptions() {
      return this.$store.state.formOptions;
    },
    itemOptions() {
      return this.$store.state.itemOptions;
    },
    form() {
      return this.$store.state.form;
    },
  },
  watch: {},
  methods: {
    async init() {
      const span = await getSpan();
      this.$store.commit("setSpan", span);
      const globalId = await getGobalId();
      this.$store.commit("setGlobalId", globalId);

      const form = await getForm();
      if (form) {
        this.$store.commit("updateForm", form);
        if (form.items.length === 0) {
          await this.add("el-input");
        }
      }
    },
    async add(type) {
      const item = this.genData(type);
      this.$store.commit("pushItem", item);
    },
    genData(type) {
      let item = "";
      const span = this.$store.state.span;

      // let item = {
      //   type: type,
      //   span: span, // 重要
      //   required: false,
      //   label: "输入框111",
      //   sub: {
      //     _defaultValue: "",
      //     type: "text",
      //     placeholder: "请输入111",
      //     clearable: false,
      //   },
      // };

      if (type === "el-input") {
        item = {
          type: type,
          span: span, // 重要
          required: false,
          label: "输入框111",
          sub: {
            _defaultValue: "",
            type: "text",
            placeholder: "请输入111",
            clearable: false,
          },
        };
      } else if (type === "el-select") {
        item = {
          type: type,
          required: false,
          span: span, // 重要
          label: "选择器",
          sub: {
            _defaultValue: "",
            placeholder: "请选择",
            disabled: false,
            options: [
              { value: "选项3", label: "选项3" },
              { value: "选项2", label: "选项2" },
            ],
          },
        };
      } else if (type === "el-radio-group") {
        item = {
          type: type,
          required: false,
          span: span, // 重要
          label: "单选框",
          sub: {
            _defaultValue: "",
          },
        };
      } else {
        throw Error("组件还未注册");
      }

      for (const [key, value] of Object.entries(this.itemOptions.config)) {
        if (!(key in item) && value.default !== undefined) {
          item[key] = value.default;
          if (key === "prop") {
            const globalId = this.$store.state.globalId;
            this.$store.commit("setGlobalId", globalId + 1);
            item[key] = `field_${globalId}`;
          }
        }
      }

      for (const [key2, value2] of Object.entries(
        this.componentsObj[type].config
      )) {
        if (!(key2 in item.sub) && value2.default !== undefined) {
          item.sub[key2] = value2.default;
        }
      }
      console.log("aa", item);
      return item;
    },

    clone(data) {
      const res = this.genData(data.name);
      return res;
    },
  },
};
</script>
<style scoped>
.container {
  width: 400px;
  border-right: 1px solid;
}

.wrapper {
  width: 400px;
}
.c-body {
  display: inline-block;
  width: 48%;
  margin: 1%;
}
.c-item {
  background-color: #f6f7ff;
  border: 1px dashed #f6f7ff;
  padding: 8px 10px;
  border-radius: 3px;
  cursor: pointer;
}
</style>
