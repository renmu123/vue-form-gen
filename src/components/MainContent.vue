<!--  -->
<template>
  <div class="aside">
    <el-form class="" :label-width="form['label-width'] || ''"
      ><template v-for="(item, index) in form.items"
        ><el-form-item
          :label="item.label"
          :size="item.size"
          :required="item.required"
          :label-width="item['label-width']"
          :key="index"
        >
          <el-input
            v-if="item.type === 'input'"
            :placeholder="item.sub.placeholder"
            :type="item.sub.type"
            :disabled="item.sub.disabled"
            :clearable="item.sub.clearable"
            :show-password="item.sub['show-password']"
          ></el-input>

          <el-select
            v-if="item.type === 'select'"
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

          <el-button @click="config(index)">设置</el-button>
        </el-form-item></template
      ></el-form
    >
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
  mounted() {
    // console.log("aaa", this.genTemplate(this.form));
  },
  computed: {
    form() {
      return this.$store.state.form;
    },
    element() {
      return this.$store.state.element;
    },
  },
  watch: {},
  methods: {
    config(index) {
      this.$store.commit("setCurrentIndex", index);
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
</style>
