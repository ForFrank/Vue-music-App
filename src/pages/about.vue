<template>
  <h1 @click="toggle">click</h1>
  {{x}},{{y}}
  <button @click="loading">123</button>
  <button @click="exit">exit</button>
  <button @click="enter">enter</button>
  <Rate :value="3" ></Rate>
  <Rate :value="4" theme="red"></Rate>
  <Rate :value="1" theme="green"></Rate>
</template>
<script setup>
import { useFullscreen } from '@vueuse/core'
import {useMouse} from '../utils/mouse'
import useFavicon from '../utils/useFavicon' 
import {ref} from 'vue'
import Rate from '../components/Rate.vue'
let score = ref(3)
let {favicon}  = useFavicon() 
function loading(){   
    favicon.value = '../assets/test.png'
}

let {x,y} = useMouse()
const { isFullscreen, enter, exit, toggle } = useFullscreen()
</script>