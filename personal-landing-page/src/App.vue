<template>
	<navbar-layout></navbar-layout>
  <presentation-section></presentation-section>
</template>

<script>
import NavbarLayout from "./components/NavbarLayout.vue";
import PresentationSection from "./components/PresentationSection.vue";

export default {
	components: {
		NavbarLayout,
    PresentationSection
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
