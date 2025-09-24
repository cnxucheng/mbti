<template>
  <div v-if="doProblem">
    <ShowProblem :problemId="(pageId - 1) * 8" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 1" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 2" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 3" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 4" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 5" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 6" :key="pageId" @change="callback" />
    <ShowProblem :problemId="(pageId - 1) * 8 + 7" :key="pageId" @change="callback" />
    <div style="text-align: center; margin-top: 20px">
      <a-button type="primary" v-if="pageId < 7" @click="goNextPage"> 下一页 </a-button>
      <a-button type="primary" v-else @click="submit"> 提交 </a-button>
    </div>
  </div>
  <div v-else>
    <ResultPage :res-set="resSet" />
  </div>

</template>

<script setup lang="ts">
import ShowProblem from "@/components/ShowProblem.vue";
import { ref } from "vue";
import { Message } from '@arco-design/web-vue';
import ResultPage from "@/components/ResultPage.vue";

const pageId = ref(1);
const resSet = ref(new Array(56));


const goNextPage = () => {
  console.log(resSet);
  for (let i = 0; i < 8; i++) {
    if (resSet.value[(pageId.value - 1) * 8 + i] === 0 || resSet.value[(pageId.value - 1) * 8 + i] === undefined) {
      Message.error("第" + (i + 1) + '题未作答。');
      return;
    }
  }
  if (pageId.value < 8) {
    pageId.value ++;
  }
}

const callback = (res: number, problemId: number) => {
  resSet.value[problemId] = res;
}

const doProblem = ref(true);

const submit = () => {
  for (let i = 0; i < 8; i++) {
    if (resSet.value[(pageId.value - 1) * 8 + i] === 0 || resSet.value[(pageId.value - 1) * 8 + i] === undefined) {
      Message.error("第" + (i + 1) +  '题未作答。');
      return;
    }
  }
  doProblem.value = false;
  Message.info("提交成功")
}


</script>

<style scoped>

</style>