<template>
    <div v-if="show" class="scroll-button" @click="scrollToTop">
           <SvgIcon :path="mdiArrowUpBold" size="28" color="white" />
    </div>
</template>

<script setup>
import {ref, onMounted, onUnmounted} from 'vue'
import { mdiArrowUpBold } from '@mdi/js'
const show = ref(false)
const handleScroll =()=>{
    show.value = window.scrollY >30
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(()=> {
    window.addEventListener('scroll',handleScroll)
    handleScroll()})
onUnmounted(()=>{
    window.removeEventListener('scroll',handleScroll)
})
</script>
<style scoped>
.scroll-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #444;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;

}
</style>