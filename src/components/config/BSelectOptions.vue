<!--  -->
<template>
  <div class="b-select-options">
    <el-table :data="currentItem.sub.options" style="width: 100%">
      <el-table-column prop="value" label="value" width="80"> </el-table-column>
      <el-table-column prop="value" label="label" width="80"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" @click="remove(scope.$index)"
            >移除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div class="add">
      <el-input
        v-model="value"
        placeholder="value"
        style="width: 80px; margin-right: 5px"
      ></el-input>
      <el-input
        placeholder="label"
        style="width: 80px"
        v-model="label"
      ></el-input>
      <el-button @click="add">新增</el-button>
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
  methods: {
    remove(index) {
      this.currentItem.sub.options.splice(index, 1);
    },
    add() {
      if (!(this.value && this.label)) {
        return false;
      }
      const data = {
        value: this.value,
        label: this.label,
      };
      this.currentItem.sub.options.push(data);
    },
  },
};
</script>
<style scoped></style>
