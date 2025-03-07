<template>
	<main class="container">
		<img :src="lines" alt="" aria-hidden="true" class="absolute top-[-4%] right-[-52%]" />
		<img :src="botLines" alt="" aria-hidden="true" class="hidden lg:block absolute bottom-0 left-0">
		<Cards />
	</main>
</template>

<script setup lang="ts">
import Cards from './Cards.vue'
import lines from '@/images/bg-top.svg'
import botLines from '@/images/bg-bottom.svg'
</script>

<style scoped></style>
