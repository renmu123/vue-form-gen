<!--  -->
<template>
  <div class="aside">
    <el-form label-width="120px" label-position="left">
      <el-tabs type="border-card" value="1">
        <el-tab-pane label="组件配置" name="1">
          <div v-if="isEmpty(currentItem)">暂无数据</div>
          <template v-else>
            <el-form-item label="字段名" class="form-item">
              <el-input v-model="currentItem.itemConfig.prop"></el-input>
            </el-form-item>
            <el-form-item label="标题" class="form-item">
              <el-input v-model="currentItem.itemConfig.label"></el-input>
            </el-form-item>

            <el-form-item label="栅格" class="form-item">
              <el-slider
                v-model="currentItem.colConfig.span"
                @change="changeSpan"
                :max="24"
              ></el-slider>
            </el-form-item>

            <el-form-item
              v-for="(item, key) in options"
              :key="key"
              class="form-item"
              ><template slot="label"
                >{{ item.name }}
                <el-tooltip
                  v-if="item.tip"
                  effect="light"
                  :content="item.tip"
                  placement="top"
                  ><i class="el-icon-info" /> </el-tooltip
              ></template>
              <config-field
                :item="item"
                v-model="currentItem.config[key]"
              ></config-field>
            </el-form-item>
          </template>
        </el-tab-pane>

        <el-tab-pane label="表单项配置" name="2">
          <div v-if="isEmpty(currentItem)">暂无数据</div>
          <template v-else>
            <el-form-item
              v-for="(item, key) in itemOptions"
              :key="key"
              class="form-item"
              ><template slot="label"
                >{{ item.name }}
                <el-tooltip
                  v-if="item.tip"
                  effect="light"
                  :content="item.tip"
                  placement="top"
                  ><i class="el-icon-info" /> </el-tooltip
              ></template>
              <config-field
                :item="item"
                v-model="currentItem.itemConfig[key]"
              ></config-field>
            </el-form-item>
          </template>
        </el-tab-pane>

        <el-tab-pane label="表单配置" name="3">
          <div v-if="isEmpty(currentItem)">暂无数据</div>
          <template v-else>
            <el-form-item
              v-for="(item, key) in formOptions"
              :key="key"
              class="form-item"
              ><template slot="label"
                >{{ item.name }}
                <el-tooltip
                  v-if="item.tip"
                  effect="light"
                  :content="item.tip"
                  placement="top"
                  ><i class="el-icon-info" /> </el-tooltip
              ></template>

              <config-field
                :item="item"
                v-model="form.form[key]"
              ></config-field>
            </el-form-item>
          </template>
        </el-tab-pane>
      </el-tabs>
    </el-form>
  </div>
</template>

<script>
import ConfigField from "./ConfigField";
import { isEmpty } from "lodash-es";

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
        this.$store.getters.componentsObj[this.currentItem.name];
      return components ? components.config : [];
    },
    itemOptions() {
      return this.convert(this.$store.state.itemOptions.config);
    },
    formOptions() {
      return this.convert(this.$store.state.formOptions.config);
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
    convert(obj) {
      const arr = Object.entries(obj);
      return Object.fromEntries(
        arr.filter(([_, item]) => {
          return !(item.show === false);
        })
      );
    },
    changeSpan(val) {
      this.$store.commit("setSpan", val);
    },
    isEmpty,
  },
};
</script>
<style scoped>
.aside {
  width: 400px;
}
.form-item {
  margin-bottom: 12px;
}
</style>
