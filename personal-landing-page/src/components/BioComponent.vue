<template>
	<section>
		<div class="biografy">
			<div class="title">Hello, I'm Gui. Nice to meet you!</div>
			<div class="body">
				Since the beginning of my Web Development journey 3 years ago, I have
				worked remotely for companies in Brazil and in the USA, created digital
				products for both business and consumer use, built many personal
				projects, and dived deep in many courses to improve my skills.
			</div>
		</div>

		<div class="skills">
			<div class="card-wrapper">
				<div class="card front-end">
					<header>
						<div class="image-wrapper">
							<img src="/img/frontend-icon.png" />
						</div>
						<h1>Front End</h1>
					</header>
				</div>
				<div class="card back-end">
					<header>
						<div class="image-wrapper">
							<img src="/img/backend-icon.png" />
						</div>
						<h1>Back End</h1>
					</header>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style scoped>
section {
	/* background-color: rgb(0, 128, 83); */
	background-color: #616161;
	position: relative;
	z-index: 2;
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	flex-direction: column;

	font-family: "Roboto Slab", serif;
}

.image-wrapper {
	margin: 1rem;
	padding: .7rem;
	width: 4rem;
	height: 4rem;
	border-radius: 50%;
	background-color: #008053;
}

.skills {
	width: 100%;
	margin: 2rem;
}
.card-wrapper {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-evenly;
}

.card {
	width: 40%;
	padding: 1rem;
	box-shadow: 0px 0px 5px #000;
}
.card > header {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.card > header > h1{
	font-size: 2rem;
	border-bottom: 1px solid #000;
}
.biografy {
	padding: 2rem;
	/* background-color: rgba(207, 207, 207, 0.496); */
	border-radius: 15px;
	width: 70vw;
	margin: 3rem auto;
}

.title {
	color: #fff;
	margin-top: 1rem;
	margin-bottom: 2rem;
}

.body {
	color: #fff;
	width: 80%;
	margin: 1rem auto;
	text-align: center;
	font-size: 1.2rem;
}
</style>
