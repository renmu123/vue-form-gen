<!--  -->
<template>
  <div class="aside">
    {{ currentItem }}
    <el-tabs type="border-card">
      <el-tab-pane label="组件配置">
        <div v-for="(item, key) in options" :key="key">
          <p class="title">{{ item.name }}({{ key }})</p>
          <div v-if="item.type === 'string'">
            <el-input v-model="currentItem.sub[key]"></el-input>
          </div>

          <div v-if="item.type === 'number'">
            <el-input v-model="currentItem.sub[key]" type="number"></el-input>
          </div>

          <div v-if="item.type === 'boolean'">
            <el-switch v-model="currentItem.sub[key]"></el-switch>
          </div>
          <div v-if="item.type === 'select'">
            <el-select v-model="currentItem.sub[key]" placeholder="请选择">
              <el-option
                v-for="value in item.select"
                :key="value"
                :label="value"
                :value="value"
              >
              </el-option>
            </el-select>
          </div>
          <b-select-options
            v-if="item.type === 'select-options'"
          ></b-select-options>
        </div>
      </el-tab-pane>
      <el-tab-pane label="通用配置">
        <div v-for="(item, key) in itemOptions" :key="key">
          <p class="title">{{ item.name }}({{ key }})</p>
          <div v-if="item.type === 'string'">
            <el-input v-model="currentItem.sub[key]"></el-input>
          </div>

          <div v-else-if="item.type === 'number'">
            <el-input v-model="currentItem.sub[key]" type="number"></el-input>
          </div>

          <div v-else-if="item.type === 'boolean'">
            <el-switch v-model="currentItem.sub[key]"></el-switch>
          </div>
          <div v-else-if="item.type === 'select'">
            <el-select v-model="currentItem.sub[key]" placeholder="请选择">
              <el-option
                v-for="value in item.select"
                :key="value"
                :label="value"
                :value="value"
              >
              </el-option>
            </el-select>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="表单配置"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import BSelectOptions from "./config/BSelectOptions.vue";

export default {
  components: { BSelectOptions },
  setup() {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  computed: {
    options() {
      return this.$store.state.element[this.currentItem.type];
    },
    inputsConfig() {
      return this.$store.state.element.input;
    },
    itemOptions() {
      return this.$store.state.element.itemOptions;
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
