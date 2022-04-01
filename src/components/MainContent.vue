<!--  -->
<template>
  <div class="aside components-content">
    <el-row :gutter="15">
      <template v-if="form.items.length !== 0">
        <el-form
          class=""
          :label-width="form.form['label-width']"
          :label-position="form.form['label-position']"
          :hide-required-asterisk="form.form['hide-required-asterisk']"
          :show-message="form.form['show-message']"
          :inline-message="form.form['inline-message']"
          :disabled="form.form.disabled"
        >
          <draggable
            class="dragArea list-group"
            :list="form.items"
            :group="{ name: 'components' }"
            :clone="clone"
            @change="log"
            @end="onEnd"
          >
            <template
              v-for="(item, index) in form.items"
              class="item-container"
            >
              <el-col
                :span="item.colConfig.span"
                :key="index"
                class="col-item relative"
                :class="{ active: currentIndex === index }"
              >
                <el-form-item
                  :label="item.itemConfig.label"
                  :size="item.itemConfig.size"
                  :required="item.itemConfig.required"
                  :label-width="item.itemConfig['label-width']"
                  class="item"
                  :class="{ active: currentIndex === index }"
                  @click.native="config(index)"
                >
                  <el-input
                    v-if="item.name === 'el-input'"
                    v-model="item.config._defaultValue"
                    :placeholder="item.config.placeholder"
                    :name="item.config.name"
                    :disabled="item.config.disabled"
                    :clearable="item.config.clearable"
                    :show-password="item.config['show-password']"
                  ></el-input>

                  <el-select
                    v-if="item.name === 'el-select'"
                    :placeholder="item.config.placeholder"
                    :multiple="item.config.multiple"
                    :disabled="item.config.disabled"
                    :clearable="item.config.clearable"
                    v-model="item.config._defaultValue"
                  >
                    <el-option
                      v-for="item in item.config.options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>

                  <el-radio-group
                    v-model="item.config._defaultValue"
                    v-if="item.name === 'el-radio-group'"
                    :disabled="item.config.disabled"
                  >
                    <el-radio
                      v-for="item in item.config.options"
                      :key="item.value"
                      :label="item.label"
                      >{{ item.value }}</el-radio
                    >
                  </el-radio-group>
                </el-form-item>
                <div class="config">
                  <i
                    class="el-icon-copy-document pointer"
                    @click="copyItem(index)"
                    style="margin-right: 5px"
                  ></i>
                  <i
                    class="el-icon-delete pointer"
                    @click="deleteItem(index)"
                  ></i></div></el-col></template></draggable
        ></el-form>
      </template>

      <div v-else>请选择组件再进行操作</div>
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
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
    clone(data) {
      console.log("content", data);
    },
    log({ added }) {
      this.$store.commit("setCurrentIndex", added.newIndex);
    },
    onEnd() {},
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

.active.col-item .config {
  opacity: 1;
}

.active.item {
  background-color: #f6f7ff;
}
.item:hover {
  background-color: #f6f7ff;
}
.config {
  position: absolute;
  bottom: 15px;
  right: 8px;
  opacity: 0;
}
.col-item:hover .config {
  opacity: 1;
}
</style>

<style>
.components-content .c-body.sortable-ghost {
  position: relative;
  display: block;
  width: 100% !important;
  overflow: hidden;
}
</style>
