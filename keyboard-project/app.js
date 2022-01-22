const input = document.querySelector('input');

const keys = document.querySelectorAll('.keyboard-item');

let caps = false;

keys.forEach(key => {
  key.addEventListener('click', (event) => {
    const keyValue = key.dataset.value;

    if (keyValue === 'escape') {
      return input.value = input.value.slice(0, input.value.length - 1 );
    } 

    if (keyValue === 'space') {
      return input.value += ' ';
    }

    if (keyValue === 'caps') return

    if (keyValue === 'enter') {
      return alert('you have entered: ' + input.value)
    }

    input.value += keyValue
  })
})


