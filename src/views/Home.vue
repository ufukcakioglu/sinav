<template>
  <div class="home">
    <Exam />
  </div>
</template>

<script>
// @ is an alias to /src
import Exam from "@/components/Exam.vue";

export default {
  name: "Home",
  components: {
    Exam
  }
};
</script>
