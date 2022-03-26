<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :value="value"
    @input.native="input($event)"
  ></el-input>
</template>

<script>
export default {
  name: "BInput",
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    input($event) {
      this.$emit("input", $event.target.value);
    },
  },
};
</script>
