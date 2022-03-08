<!--  -->
<template>
  <div class="">
    <el-form v-model="form" class="" label-width="100px"
      ><el-form-item label="年龄" prop="name" v-model="form.name"
        ><el-input placeholder="hello"></el-input></el-form-item
      ><el-form-item label="年龄1" prop="name1" v-model="form.name1"
        ><el-input placeholder="hello"></el-input></el-form-item
      ><el-form-item label="年龄2" prop="name2" v-model="form.name2"
        ><el-input placeholder="hello"></el-input></el-form-item
      ><el-form-item label="年龄3" prop="name3" v-model="form.name3"
        ><el-input placeholder="hello"></el-input></el-form-item
    ></el-form>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {},
  data() {
    return {
      myArray: [],
      form: {
        name: "1",
        name2: "2",
        name3: "3",
        name4: "4",
      },
    };
  },
  created() {},
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
};
</script>
<style scoped></style>
