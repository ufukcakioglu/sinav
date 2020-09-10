<template>
  <div>
    <paginate name="data" :list="data" :per="1">
      <div v-for="item in paginated('data')" :key="item.id" class="mold">
        <h5>{{ item.questions }}</h5>
        <el-radio-group class="rank">
          <el-radio
            v-for="(index, option) in item.answers"
            :key="'option' + index"
            :label="3"
          >
            {{ option }}
          </el-radio>
        </el-radio-group>
      </div>
    </paginate>
    <paginate-links
      for="data"
      :simple="{
        next: 'Next »',
        prev: '« Back'
      }"
    ></paginate-links>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      radio: "",
      paginate: ["data"],
      data: [
        {
          id: 1,
          questions: "zxc nedir?",
          answers: {
            option1: "isimdir",
            option2: "hayvandır",
            option3: "nesnedir",
            option4: "hiçbirşeydir"
          }
        },
        {
          id: 2,
          questions: "asd nedir?",
          answers: {
            option1: "isimdir",
            option2: "hayvandır",
            option3: "nesnedir",
            option4: "hiçbirşeydir"
          }
        },
        {
          id: 3,
          questions: "qwer nedir?",
          answers: {
            option1: "isimdir",
            option2: "hayvandır",
            option3: "nesnedir",
            option4: "hiçbirşeydir"
          }
        }
      ]
    };
  },
  methods: {
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      let l = this.data.length,
        s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.listData.slice(start, end);
    }
  }
};
</script>

<style lang="scss" scoped>
.mold {
  padding: 0 50px;
  h5 {
    text-align: left;
  }
  .rank {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    .el-radio:last-child {
      margin-right: 30px;
    }
  }
}
</style>
