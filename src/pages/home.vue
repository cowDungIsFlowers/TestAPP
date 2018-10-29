<template>
	<div class="home">
		<p>{{ count }}</p>
		<p>
		    <button @click="add">+</button>
		    <button @click="decrement">-</button>
		</p>
	</div>
</template>

<script>
	import store from './../store/index'
	export default{
		computed: {
			count () {
					return store.state.count
			},
			title(){
					return store.state.title
			}
		},
		methods: {
			add () {
				store.commit('add');
			},
			decrement () {
				store.commit('decrement')
			}
		}
	}
</script>

<style lang="less">
	
</style>