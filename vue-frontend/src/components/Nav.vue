<template>
  <nav >
    <div class ='nav-container'>
      <router-link to="/" class="home-link">
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="black"
    >
      <path :d="mdiHome" />
    </svg>

  </router-link>
      <div class="menu-container"  ref="menuRef">

    <div class="menu-icon" @click="toggleDropdown">
      <SvgIcon type="mdi" :path="mdiMenu" :size="28" />
    </div>


    <ul v-if="dropdownOpen" class="dropdown">
      <template v-if="!auth">
        <li><router-link to="/login" class="dropdown-btn">Login</router-link></li>
        <li><router-link to="/register"  class="dropdown-btn">Register</router-link></li>
      </template>
      <template v-else>
        <li><a href="#" @click.prevent="logout">Logout</a></li>
      </template>
    </ul>
  </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import {ref, onMounted,onBeforeUnmount} from 'vue'
import { mdiMenu } from "@mdi/js";
import { mdiHome } from '@mdi/js'

const store = useStore()

const auth = computed(() => store.state.authenticated)
const dropdownOpen = ref(false);
const menuRef =ref(null)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

const logout = async () => {

  await fetch('/api/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
  })
  dropdownOpen.value = false
}

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    dropdownOpen.value = false;
  }
}
onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="css">
@import "../src/assets/Nav.css";
</style>