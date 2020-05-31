import '../styles/main.scss';
import store from './store';
import words from './reducer';

let container = document.querySelector('.container');
let button = document.createElement('button');
button.innerText = 'Add items';
let counter = document.createElement('div');
counter.innerHTML = 'No Items Yet';
let wordsContainer = document.createElement('section');
container.appendChild(counter);
container.appendChild(button);
container.appendChild(wordsContainer);

const unsubscribe = store.subscribe(() => {
  counter.innerHTML = store.getState().counter;
  let word = document.createElement('p');
  word.innerHTML = store.getState().payload.text;
  wordsContainer.appendChild(word);

  if (store.getState().counter >= 5) {
    clearInterval(myInterval);
  }
});

let myInterval = setInterval(() => {
  store.dispatch({
    type: 'counter/increment',
  });
}, 2000);
document.querySelector('button').addEventListener('click', () => {
  store.dispatch({
    type: 'counter/increment',
  });
  if (store.getState().counter >= 10) {
    unsubscribe();
  }
});
