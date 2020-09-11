<template>
  <div>
    <el-container>
      <el-header height="100px">
        <el-row type="flex" justify="center" align="middle">
          <el-col :span="12">
            <span>Exam Application</span>
          </el-col>
          <el-col :span="12">
            <span>Sign in: Ufuk Çakıoğlu</span>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <Questions />
      </el-main>
      <el-footer>
        Copyright BUM by 2020
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Questions from "./Questions";
export default {
  name: "HelloWorld",
  components: {
    Questions
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
