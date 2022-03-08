<!--  -->
<template>
  <div class="aside">
    <!-- {{ form }} -->
    {{ currentItem }}
    <el-tabs type="border-card">
      <el-tab-pane label="控件配置">
        <div v-for="(item, key) in inputsConfig" :key="key">
          <p class="title">{{ item.name }}({{ key }})</p>
          <div v-if="item.type === 'string'">
            <el-input v-model="form.sub[key]"></el-input>
          </div>

          <div v-if="item.type === 'number'">
            <el-input v-model="form.sub[key]" type="number"></el-input>
          </div>

          <div v-if="item.type === 'boolean'">
            <el-switch v-model="form.sub[key]"></el-switch>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="组件管理">
        <div v-for="(item, key) in commonConfig" :key="key">
          <p class="title">{{ item.name }}({{ key }})</p>
          <div v-if="item.type === 'string'">
            <el-input v-model="form.sub[key]"></el-input>
          </div>

          <div v-if="item.type === 'number'">
            <el-input v-model="form.sub[key]" type="number"></el-input>
          </div>

          <div v-if="item.type === 'boolean'">
            <el-switch v-model="form.sub[key]"></el-switch>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    inputsConfig() {
      return this.$store.state.element.input;
    },
    commonConfig() {
      return this.$store.state.element.common;
    },

    form() {
      // TODO: 得合并
      return this.$store.state.form.items[0];
    },
    currentItem() {
      return this.$store.getters.currentItem;
    },
  },
  watch: {},
  methods: {},
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
