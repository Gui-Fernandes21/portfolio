<template>
	<navbar-layout></navbar-layout>
	<presentation-section></presentation-section>
	<bio-component></bio-component>
</template>

<script>
import NavbarLayout from "./components/NavbarLayout.vue";
import PresentationSection from "./components/PresentationSection.vue";
import BioComponent from "./components/BioComponent.vue";

export default {
	components: {
		NavbarLayout,
		PresentationSection,
		BioComponent,
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Osmanya&family=Roboto+Slab:wght@200;400;700&family=Sometype+Mono:ital@1&display=swap");
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
body {
	width: 100vw;
}
</style>
