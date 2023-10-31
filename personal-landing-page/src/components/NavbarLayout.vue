<template>
  <section>
    <div class="logo">
      <img src="/img/gui-fernandes.png" alt="">
    </div>
    <div class="action">
      <button>Say Hello</button>
    </div>
  </section>
</template>

<style scoped>
.logo > img {
  width: 10rem;
}

section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 1rem 0 1rem;
  border-bottom: 1px solid black;
  height: 20vh;
}

button {
  background: none;
  padding: .5rem 3rem;
  margin: 0 1rem;
  border: 2px solid #000;
  border-radius: 15px;
  font-size: 1rem;
  cursor: pointer;
  transition: all ease-in-out 200ms;
}

button:hover {
  border: 2px solid green;
  color: green;
}
</style>