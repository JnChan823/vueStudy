<template>
	<!--vue3的组件模版结构可以没有根标签-->
	<Demo> </Demo>
</template>

<script>
import Demo from './components/Demo'
export default {
	name: 'App',
	components: { Demo },
	
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
