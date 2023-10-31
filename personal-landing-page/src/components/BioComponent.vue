<template>
	<section>
		<div class="biografy">
			<div class="title">Hello, I'm Gui. Nice to meet you!</div>
			<div class="body">
				Since the beginning of my Web Development journey 3 years ago, I have
				worked remotely for companies in Brazil and in the USA, created
				digital products for both business and consumer use, built many personal
				projects, and dived deep in many courses to improve my skills.
			</div>
		</div>
	</section>
</template>

<script>
export default {
	
}
</script>

<style scoped>
section {
	background-color: #fff;
	position: relative;
	z-index: 2;
  width: 100%;
	padding: 2rem 1rem;

	font-family: "Roboto Slab", serif;
}

.biografy {
  padding: 2rem;
  background-color: rgba(207, 207, 207, 0.496);
  border-radius: 15px;
  width: 70vw;
  margin: 3rem auto;
}

.title {
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.body {
  width: 80%;
  margin: 1rem auto;
  text-align: center;
  font-size: 1.2rem;
}
</style>
