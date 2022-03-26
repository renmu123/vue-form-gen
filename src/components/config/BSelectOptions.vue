<!--  -->
<template>
  <div class="b-select-options">
    <div
      v-for="(item, index) in currentItem.sub.options"
      :key="index"
      style="margin-bottom: 10px"
    >
      <el-input v-model="item.label" class="options-item"></el-input
      ><el-input v-model="item.value" class="options-item"></el-input>
      <i class="el-icon-delete pointer" @click="remove(index)"></i>
    </div>

    <div class="add">
      <el-input
        v-model="label"
        placeholder="label"
        class="options-item"
      ></el-input>
      <el-input
        placeholder="value"
        v-model="value"
        class="options-item"
      ></el-input>
      <i class="el-icon-document-add pointer" @click="add(index)"></i>
    </div>
  </div>
</template>

<script>
// import draggable from "vuedraggable";
export default {
  components: {
    // draggable,
  },
  data() {
    return {
      value: "",
      label: "",
    };
  },
  created() {},
  mounted() {},
  computed: {
    currentItem() {
      return this.$store.getters.currentItem;
    },
  },
  watch: {},
  methods: {
    remove(index) {
      this.currentItem.sub.options.splice(index, 1);
    },
    add() {
      if (!this.value) {
        return false;
      }
      const data = {
        value: this.value,
        label: this.label,
      };
      this.currentItem.sub.options.push(data);
      this.value = "";
      this.label = "";
    },
  },
};
</script>
<style scoped>
.options-item {
  width: 40%;
  margin-right: 10px;
}
</style>
