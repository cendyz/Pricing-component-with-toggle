<template>
	<Nav />
	<Main />
</template>

<script setup lang="ts">
import { provide, ref, Ref } from 'vue';
import Nav from './components/Nav.vue'
import Main from './components/MainContent/Main.vue'
const isMonthly: Ref<boolean> = ref(true)

provide('isMonthly', isMonthly)
</script>

<style lang="scss">
* {
	transition: color 0.2s, background-color 0.2s;
}
</style>
