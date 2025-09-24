<template>
  <div class="show-problem">
    <h2> {{ problem.q }} </h2>
    <span>认可度：</span><a-rate v-model="res" :default-value="0"  @change="(value: number) =>{
      res = value;
      $emit('change', res, props.problemId);
    } " allow-clear/>
  </div>
</template>

<script setup lang="ts">
import { problemSet } from "@/data/ProblemSet";
import { defineProps, ref } from 'vue';
const props = defineProps({
  problemId: Number,
})
const problem = problemSet[props.problemId];
const res = ref(0);

</script>

<style scoped>
.show-problem {
  width: 80%;
  margin: auto;
}
</style>