<template>
  <div>
    <h2 id="welcome-title">Welcome to CastleBnb Vue-example page</h2>
         <div class="spots-card">
          <div class="spot-card-inner">
        <div v-for="(spot, index) in spots" :key="index" class ='card'>
            <div class="card-info">
              <img 
                class ='spot-img'
                :src="spot.previewImage.url" 
                alt="spot image" 
                />
                {{ spot.name }}
            </div>
          </div>
        </div>
      </div>

     <ScrollButton />
           <div style="height: 1000px;"></div>
  </div>
</template>

<script setup>
import  ScrollButton  from '../views/ScrollButton.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'

const store = useStore()

const spots = computed(() => store.state.spots.Spots || [])

function loadSpots() {
  store.dispatch('spots/getAllSpots')
}
onMounted(()=>loadSpots())
</script>

<style lang="css">
@import "../src/assets/HomePage.css";
</style>