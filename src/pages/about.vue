<template>
  <h1 @click="toggle">click</h1>
  {{ x }},{{ y }}
  <button @click="loading">123</button>
  <button @click="exit">exit</button>
  <button @click="enter">enter</button>
  <Rate :value="3.5">test</Rate>
  <h1>你的评分是 {{ score }}</h1>
  <Rate :value="score" @update-rate="update"></Rate>
  <Heading :level="3">HelloWorld</Heading>
</template>
<script setup>
import { useFullscreen } from "@vueuse/core";
import { useMouse } from "../utils/mouse";
import useFavicon from "../utils/useFavicon";
import { ref } from "vue";
import Rate from "../components/Rate.vue";
import Heading from "../components/Heading";
let score = ref(3.5);
let { favicon } = useFavicon();
function loading() {
  favicon.value = "../assets/test.png";
}
function update(num) {
  score.value = num;
}

let { x, y } = useMouse();
const { isFullscreen, enter, exit, toggle } = useFullscreen();
</script>
