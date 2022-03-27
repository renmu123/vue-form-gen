<!--  -->
<template>
  <div class="aside">
    <el-tabs type="border-card">
      <el-tab-pane label="组件配置">
        <div v-if="!currentItem">暂无数据</div>
        <template v-else>
          <div>
            <p class="title">字段名</p>
            <el-input v-model="currentItem.prop"></el-input>
          </div>
          <div>
            <p class="title">标题</p>
            <el-input v-model="currentItem.label"></el-input>
          </div>
          <div>
            <p class="title">栅格</p>
            <el-slider
              v-model="currentItem.span"
              @change="changeSpan"
              :max="24"
            ></el-slider>
          </div>
          <div v-for="(item, key) in options" :key="key">
            <config-field
              :item="item"
              v-model="currentItem.sub[key]"
            ></config-field>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="表单项配置">
        <div v-if="!currentItem">暂无数据</div>
        <div v-for="(item, key) in itemOptions" :key="key" v-else>
          <config-field :item="item" v-model="currentItem[key]"></config-field>
        </div>
      </el-tab-pane>
      <el-tab-pane label="表单配置">
        <div v-if="!currentItem">暂无数据</div>
        <div v-for="(item, key) in formOptions" :key="key" v-else>
          <config-field :item="item" v-model="form.form[key]"></config-field>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import ConfigField from "./ConfigField";

export default {
  components: {
    ConfigField,
  },
  setup() {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    options() {
      const components =
        this.$store.getters.componentsObj[this.currentItem.type];
      return components ? components.config : [];
    },
    itemOptions() {
      return this.$store.state.itemOptions;
    },
    formOptions() {
      return this.$store.state.formOptions;
    },
    currentItem() {
      return this.$store.getters.currentItem;
    },
    form() {
      return this.$store.state.form;
    },
  },
  watch: {},
  methods: {
    changeSpan(val) {
      this.$store.commit("setSpan", val);
    },
  },
};
</script>
<style scoped>
.aside {
  width: 400px;
}
.title {
  margin-bottom: 4px;
  font-size: 18px;
}
</style>
