<template>
	<section
		class="px-[3rem] relative grid gap-y-[3rem] pb-[15rem] w-full md:flex md:flex-wrap md:justify-center md:gap-x-[3rem] lg:gap-x-0 xl:gap-x-[6rem] xl:mt-[5rem]">
		<div
			class="bg-white p-[3rem] text-center text-neutral-blue-300 rounded-xl even:bg-gradient-to-r even:from-primary-ffrom even:to-primary-tto even:text-white w-[32rem] xl:scale-[1.1] xl:w-[35rem]"
			:class="index == 1 && 'md:order-3 lg:order-[0] lg:scale-[1.1] xl:scale-[1.25] xl:z-[100]'"
			v-for="(item, index) in data"
			:key="index">
			<h2 class="mb-[1rem] text-[2rem]">{{ item.title }}</h2>
			<p
				class="text-[6.6rem] flex items-center justify-center gap-x-[.5rem]"
				:class="index == 1 ? 'text-white' : 'text-neutral-blue-400'">
				<span class="text-[4rem]">$</span>{{ item.price }}
			</p>
			<ul class="mb-[2.8rem] mt-[1.5rem]">
				<li
					v-for="(liItem, index) in item.info"
					:key="index"
					class="py-[1.5rem] border-t-[1px] border-neutral-blue-200"
					:class="index == 2 && 'border-b-[1px]'">
					{{ liItem }}
				</li>
			</ul>
			<button
				class="block w-full rounded-xl leading-[0] py-[2.2rem] text-[1.3rem] uppercase tracking-[1.2px] lg:border-[1px] lg:border-transparent lg:hover:bg-transparent z-[100]"
				:class="
					index == 1
						? 'bg-white text-primary-tto  lg:hover:text-white  lg:hover:border-white'
						: 'transparentGradient text-white lg:hover:border-black importantHover lg:hover:text-primary-tto'
				">
				learn more
			</button>
		</div>
	</section>
</template>

<script setup lang="ts">
import { reactive, inject, Ref, computed } from 'vue'
const isMonthly = inject<Ref<boolean>>('isMonthly')

const data = computed(() => [
	{
		title: 'Basic',
		price: isMonthly.value ? 19.99 : 199.99,
		info: ['500 GB', '2 Users Allowed', 'Send up to 3 GB'],
	},
	{
		title: 'Professional',
		price: isMonthly.value ? 24.99 : 249.99,
		info: ['1 TB', '5 Users Allowed', 'Send up to 10 GB'],
	},
	{
		title: 'Master',
		price: isMonthly.value ? 39.99 : 399.99,
		info: ['2 TB', '10 Users Allowed', 'Send up to 20 GB'],
	},
])
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
	.transparentGradient {
		position: relative;
		overflow: hidden;

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to right, hsl(236, 72%, 79%), hsl(237, 63%, 64%));
			z-index: -1;
			transition: opacity 0.3s;
		}

		&:hover {
			&::before {
				opacity: 0;
			}
		}
	}
}
</style>
