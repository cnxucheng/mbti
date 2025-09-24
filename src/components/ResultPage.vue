<template>
  <div style="width: 75%; margin: auto;">
    <span>类型：</span> <p> {{ MBTIResult.type }}</p><br>
    <span>昵称：</span> <p> {{ MBTIResult.nickname }}</p><br>
    <span>描述：</span> <p> {{ MBTIResult.description }} </p><br>
    <span>代表人物：</span>
    <div v-for="item in MBTIResult.famous_examples">
      <p>{{ item }}</p>
    </div>
    <br>
    <span>优点：</span>
    <div v-for="item in MBTIResult.strengths">
      <p>{{ item }}</p>
    </div>
    <br>
    <span>缺点：</span>
    <div v-for="item in MBTIResult.weaknesses">
      <p>{{ item }}</p>
    </div>
    <br>
    <span>I</span> <a-progress :percent="dic.I / (dic.I + dic.E)" :style="{width:'80%'}" :show-text="false" /> <span>E</span>
    <br>
    <span>S</span> <a-progress :percent="dic.S / (dic.S + dic.N)" :style="{width:'80%'}" :show-text="false" /> <span>N</span>
    <br>
    <span>T</span> <a-progress :percent="dic.T / (dic.T + dic.F)" :style="{width:'80%'}" :show-text="false" /> <span>F</span>
    <br>
    <span>J</span> <a-progress :percent="dic.J / (dic.J + dic.P)" :style="{width:'80%'}" :show-text="false" /> <span>P</span>
  </div>
</template>

<script setup lang="ts">
import { problemSet } from '@/data/ProblemSet';
import { MBTITypeArray } from '@/data/MBTIType';
import {onMounted, ref} from "vue";

const props = defineProps({
  resSet: Array,
})

const dic = ref({
  'I': 0,
  'E': 0,
  'S': 0,
  'N': 0,
  'T': 0,
  'F': 0,
  'J': 0,
  'P': 0,
});

const MBTIResult = ref({
  "type": "",
  "nickname": "",
  "description": "",
  "strengths": [],
  "weaknesses": [],
  "famous_examples": []
})

onMounted(() => {
  for (let i = 0; i < 56; i ++ ) {
    dic.value[problemSet[i].dim] = dic.value[problemSet[i].dim] + props.resSet[i];
  }

  let answer = "";
  if (dic.value['I'] > dic.value['E']) answer += 'I';
  else answer += 'E';

  if (dic.value['S'] > dic.value['N']) answer += 'S';
  else answer += 'N';

  if (dic.value['T'] > dic.value['F']) answer += 'T';
  else answer += 'F';

  if (dic.value['J'] > dic.value['P']) answer += 'J';
  else answer += 'P';

  for (let i = 0; i < 16; i ++ ) {
    if (answer === MBTITypeArray[i].type) {
      MBTIResult.value = MBTITypeArray[i];
      return;
    }
  }
});

</script>

<style scoped>

</style>