// You can also send specific data along with your actions.
/*
this is very common because actions usually originate from some user interaction and tend to carry some data with them
action带数据是非常常见的,因为一般action来源于一些用户接口,并且会附加一些数据

The Redux store often needs to know about this data.
 */

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch (action.type) {
    // change code below this line
    case ADD_NOTE:
      return action.text;

    // change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
