<template>
	<section>
		<header>
			<img src="/img/portfolio-pic.JPG" alt="" />
			<h1>Web Developer</h1>
			<p>
				I build Web Apps, Code Beautifully, Good Team Player, and Love what I
				do!
			</p>
			<div class="accredited-logos">
				<img src="/img/udemy-logo.png" />
				<img src="/img/UoL-logo.png" />
				<img src="/img/IMD-logo.png" />
			</div>
		</header>
		<div class="background">
			<img src="/img/coding-pics.jpg" />
		</div>
	</section>
</template>

<style scoped>
section {
	min-height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
}

header {
	z-index: 1;
  text-align: center;
}

header > h1 {
	font-size: 3rem;
	color: #fff;
	font-weight: bold;
	background-color: black;
	padding: 0 1rem;
	font-family: "Sometype Mono", monospace;
}

header > p {
	font-family: "Sometype Mono", monospace;
	font-size: 1.1rem;
  width: max-content;
  text-align: center;
	color: black;
	background-color: #fff;
	padding: 0 1rem;
	margin: 3rem auto;
}

header > img {
	height: 15rem;
	border-radius: 50%;
	border: 1px solid grey;
	margin: 4rem;
}

header > .accredited-logos {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 4rem 0;
}

header > .accredited-logos > img {
	width: 12rem;
}

.background {
	position: absolute;
	top: 0;
	left: 0;
	height: 80vh;
	width: 100vw;
	user-select: none;
}

.background > img {
	opacity: 0.5;
	z-index: 0;
}
</style>
