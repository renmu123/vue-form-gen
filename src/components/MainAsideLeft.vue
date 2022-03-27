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
        @end="onEnd"
      >
        <div class="c-body" v-for="(item, index2) in items" :key="index2">
          <div class="c-item" @click="add(item.name)">
            <i :class="item.icon" />
            {{ item.title }}
          </div>
        </div>
      </draggable>
    </div>

    <!-- <draggable
      class="dragArea list-group"
      :list="list1"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :clone="cloneDog"
      @change="log"
    >
      <div class="list-group-item" v-for="element in list1" :key="element.id">
        {{ element.name }}
      </div> -->
    <!-- </draggable> -->
  </aside>
</template>

<script>
import { groupBy } from "lodash-es";
import draggable from "vuedraggable";

import { getForm } from "@/api";

export default {
  components: {
    draggable,
  },
  data() {
    return {};
  },
  created() {},
  async mounted() {
    const form = await getForm();
    if (form) {
      this.$store.commit("updateForm", form);
      if (form.items.length === 0) {
        this.add("b-input");
        this.add("b-select");
        this.add("b-select");
        this.add("b-select");
      }
    }
    console.log("form", form);

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
  },
  watch: {},
  methods: {
    add(type) {
      const item = this.genData(type);
      this.$store.commit("pushItem", item);
      // console.log(item);
    },
    genData(type) {
      let item = "";
      if (type === "b-input") {
        item = {
          type: type,
          required: false,
          label: "输入",
          sub: { type: "text", placeholder: "请输入", clearable: false },
        };
      } else if (type === "b-select") {
        item = {
          type: type,
          required: false,
          label: "选择",
          sub: {
            placeholder: "请选",
            disabled: false,
            options: [
              { value: "选项3", label: "选项3" },
              { value: "选项2", label: "选项2" },
            ],
          },
        };
      }

      for (const [key, value] of Object.entries(this.itemOptions)) {
        if (!(key in item) && value.default) {
          item[key] = value.default;
        }
        for (const [key2, value2] of Object.entries(
          this.componentsObj[type].config
        )) {
          if (!(key2 in item.sub) && value2.default) {
            item.sub[key2] = value2.default;
          }
        }
      }
      console.log(item);
      return item;
    },

    clone(data) {
      console.log("clone-drag", data);
      return this.genData(data.name);
    },
    onEnd(obj) {
      console.log(obj);
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
.c-container {
  /* display: flex; */
  /* justify-content: space-around; */
}
.c-body {
  /* width: 180px; */
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
