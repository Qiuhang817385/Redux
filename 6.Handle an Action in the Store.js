/*
  After an action is created and dispatched, the Redux store needs to know how to respond to that action.
  在action被创建和派发之后,redux store需要对action做出相应
  This is the job of a reducer function.
  做出相应的这个工作交由reducer来做
  Reducers in Redux are responsible for the state modifications that take place in response to actions.
  reducers在redux里面,负责处理state的变化并且做出相应
  A reducer takes state and action as arguments, and it always returns a new state.
  reduce接受两个参数,state和action
  并且返回一个新的state
  It is important to see that this is the only role of the reducer.
  It has no side effects — it never calls an API endpoint and it never has any hidden surprises.
  The reducer is simply a pure function that takes state and action, then returns new state.
  reducer是一个纯函数


Another key principle in Redux is that state is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions. You'll practice this in later challenges.
redux的state是只读的
不能有其他的操作,换句话说返回修改的也只是深拷贝的数据

fill 填满

The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, so you can access the action's type directly with action.type.
 */
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // change code below this line
  if (action.type === 'LOGIN') {
    return {
      login: true
    }
  }
  return state;
  // change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
