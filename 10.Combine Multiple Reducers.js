/*
  When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces.
  Instead, remember the first principle of Redux: all app state is held in a single state object in the store.
  Therefore, Redux provides reducer composition as a solution for a complex state model.
  You define multiple reducers to handle different pieces of your application's state,
  then compose these reducers together into one root reducer.
  The root reducer is then passed into the Redux createStore() method.

  In order to let us combine multiple reducers together,
  Redux provides the combineReducers() method.



  This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions.该方法接受一个对象作为参数，在该参数中定义一个将键与特定 reducer 函数关联的属性

  The name you give to the keys will be used by Redux as the name for the associated piece of state.



  Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting. For such an application, we might write the combineReducers() method like this:
 */
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});

/*
  In this example, the state held in the Redux store would then be a single object containing auth and notes properties.
 */

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = { authenticated: false }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  count: counterReducer
})
// define the root reducer here

const store = Redux.createStore(rootReducer);
