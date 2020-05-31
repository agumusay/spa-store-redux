import faker from 'faker';

const words = (
  state = {
    counter: 0,
    payload: {
      text: '',
    },
  },
  action,
) => {
  switch (action.type) {
    case 'counter/increment':
      return {
        ...state,
        counter: state.counter + 1,
        payload: {
          text: faker.lorem.sentence(),
        },
      };
    default:
      return state;
  }
};

export default words;
