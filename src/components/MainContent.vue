<!--  -->
<template>
  <div class="aside">
    <template v-if="form.items">
      <el-form class="" :label-width="form.form['label-width'] || ''">
        <div
          v-for="(item, index) in form.items"
          :key="index"
          class="item-container"
        >
          <el-form-item
            :label="item.label"
            :size="item.size"
            :required="item.required"
            :label-width="item['label-width']"
            class="item"
            :class="{ active: currentIndex === index }"
            @click.native="config(index)"
          >
            <el-input
              v-if="item.type === 'b-input'"
              v-model="item.sub.value"
              :placeholder="item.sub.placeholder"
              :type="item.sub.type"
              :disabled="item.sub.disabled"
              :clearable="item.sub.clearable"
              :show-password="item.sub['show-password']"
            ></el-input>

            <el-select
              v-if="item.type === 'b-select'"
              :placeholder="item.sub.placeholder"
              :multiple="item.sub.multiple"
              :disabled="item.sub.disabled"
              :clearable="item.sub.clearable"
              v-model="value"
            >
              <el-option
                v-for="item in item.sub.options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <div class="config">
            <i
              class="el-icon-copy-document pointer"
              @click="copyItem(index)"
              style="margin-right: 5px"
            ></i>
            <i class="el-icon-delete pointer" @click="deleteItem(index)"></i>
          </div></div
      ></el-form>
    </template>
    <div v-else>请选择组件再进行操作</div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {
      value: "",
    };
  },
  created() {},
  mounted() {},
  computed: {
    form() {
      return this.$store.state.form;
    },
    currentIndex() {
      return this.$store.state.currentIndex;
    },
  },
  watch: {},
  methods: {
    config(index) {
      this.$store.commit("setCurrentIndex", index);
    },
    deleteItem(index) {
      this.$store.commit("deletItem", index);
    },
    copyItem(index) {
      this.$store.commit("copyItem", index);
    },
  },
};
</script>
<style scoped>
.aside {
  width: 1000px;
  padding-left: 20px;
  padding-right: 20px;
}
.item-container {
  position: relative;
}

.item {
  padding: 10px;
}
.active.item {
  background-color: #f6f7ff;
}
.item:hover {
  background-color: #f6f7ff;
}
.config {
  position: absolute;
  bottom: -17px;
  right: 8px;
  /* opacity: 0; */
}
/* .config:hover {
  opacity: 1;
} */
</style>
