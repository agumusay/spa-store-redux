import { createStore } from 'redux';
import faker from 'faker';
import words from './reducer';

const store = createStore(words);

export default store;
