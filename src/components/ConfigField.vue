<!--  -->
<template>
  <div class="">
    <template v-if="item.type === 'string'">
      <el-input v-model="cValue"></el-input>
    </template>

    <template v-if="item.type === 'number'">
      <el-input v-model="cValue" type="number"></el-input>
    </template>

    <template v-if="item.type === 'boolean'">
      <el-switch v-model="cValue"></el-switch>
    </template>
    <template v-if="item.type === 'select'">
      <el-select v-model="cValue" placeholder="请选择">
        <el-option
          v-for="value in item.select"
          :key="value"
          :label="value"
          :value="value"
        >
        </el-option>
      </el-select>
    </template>
    <b-select-options v-if="item.type === 'select-options'"></b-select-options>
  </div>
</template>

<script>
import BSelectOptions from "./config/BSelectOptions";

export default {
  components: { BSelectOptions },
  props: {
    item: {
      type: Object,
      required: true,
    },
    value: {},
  },
  model: {
    prop: "value",
    event: "change",
  },
  data() {
    return {
      cValue: "",
    };
  },
  created() {},
  mounted() {},
  computed: {
    currentItem() {
      return this.$store.getters.currentItem;
    },
  },
  watch: {
    value: {
      handler(newVal) {
        this.cValue = newVal;
      },
      immediate: true,
    },
    cValue(newVal) {
      this.$emit("change", newVal);
    },
  },
  methods: {},
};
</script>
<style scoped>
.title {
  margin-bottom: 4px;
  font-size: 18px;
}
</style>
