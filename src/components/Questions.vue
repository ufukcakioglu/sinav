<template>
  <div>
    <paginate name="data" :list="data" :per="1">
      <div v-for="item in paginated('data')" :key="item.id" class="mold">
        <el-row type="flex" justify="space-between">
          <span>{{ "Question " + item.id + " of " + data.length }}</span>
          <span>timer: 00:00:00</span>
        </el-row>
        <el-row type="flex" align="middle">
          <h5>{{ item.id + ". " + item.questions }}</h5>
        </el-row>
        <div class="rank">
          <el-radio
            v-for="(index, option) in item.answers"
            :key="'option' + index"
            :label="index"
            v-model="radio"
          >
            {{ option }}
          </el-radio>
        </div>
      </div>
    </paginate>
    <paginate-links
      for="data"
      :simple="{
        next: 'İleri',
        prev: 'Geri'
      }"
    ></paginate-links>
  </div>
</template>

<script>
export default {
  name: "Questions",
  data() {
    return {
      radio: "0",
      paginate: ["data"],
      data: [
        {
          id: 1,
          questions:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
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
  created() {},
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

@media screen and (max-width: 768px) {
  .mold {
    padding: 0 !important;
  }
}
</style>
