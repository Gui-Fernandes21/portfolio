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
  margin: 0 1rem;
  border-bottom: 1px solid black;
}

button {
  background: none;
  padding: 1rem 3rem;
  margin: 0 1rem;
  border: 2px solid #000;
  font-size: 1rem;
  cursor: pointer;
}
</style>