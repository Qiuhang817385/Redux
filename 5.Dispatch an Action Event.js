// dispatch method is what you use to dispatch actions to the Redux store.
// dispatch是一个用来派发action的方法
/*
  Calling store.dispatch() and passing the value returned from an action creator sends an action back to the store.
  store的dispatch方法
  调用store.dispatch()将从 action creator 返回的值发送回 store。


  Recall that action creators return an object with a type property that specifies the action that has occurred.
action creator 返回一个具有 type 属性的对象，该属性指定已发生的 action，

Then the method dispatches an action object to the Redux store
然后，该方法将 action 对象 dispatch 到 Redux store

Based on the previous challenge's example, the following lines are equivalent, and both dispatch the action of type LOGIN
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
 */


const store = Redux.createStore(
  (state = 5) => state
);


const currentState = store.getState();




const action = {
  type: 'LOGIN'
}
// Define an action creator here:
let actionCreator = () => {
  return action
}

store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });

// store的方法
// dispatch,
// getState


const store = Redux.createStore(
  (state = { login: false }) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:

store.dispatch(loginAction())