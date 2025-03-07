<template>
	<nav class="container py-[7rem] text-center">
		<h1 class="capitalize text-[3.5rem] text-neutral-500">our pricing</h1>
		<div class="flex items-center justify-center mt-[4rem] gap-x-[2.7rem]">
			<p id="annualy">Annualy</p>
			<button
				type="button"
				aria-labelledby="annually monthly"
				aria-label="toggle subscription status"
				role="switch"
				:aria-pressed="isMontlhy"
				class="py-[1.7rem] px-[3.2rem] rounded-badge bg-gradient-to-r from-primary-ffrom to-primary-tto relative before:absolute before:w-[2.5rem] before:h-[2.5rem] before:rounded-full before:top-1/2 before:transition-[left] before:translate-y-[-50%] before:bg-white"
				:class="isMontlhy ? 'before:left-[54%]' : 'before:left-[9%]'"
				@click="isMontlhy = !isMontlhy"></button>
			<p id="monthly">Monthly</p>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'

const isMontlhy: Ref<boolean> = ref(false)
</script>

<style scoped></style>
