<template>
	<main>
		<img :src="lines" alt="" aria-hidden="true" class="absolute top-[-4%] right-[-52%]" />
		<Cards />
	</main>
</template>

<script setup lang="ts">
import Cards from './Cards.vue'
import lines from '@/images/bg-top.svg'
</script>

<style scoped></style>
