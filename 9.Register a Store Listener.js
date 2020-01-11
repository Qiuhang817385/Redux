/*
  注册store监听
Another method you have access to on the Redux store object is store.subscribe().
另一个需要掌握的对象是store.subscribe
This allows you to subscribe listener functions to the store,
订阅store的监听函数
which are called whenever an action is dispatched against the store.
这允许你将监听器函数订阅到 store，只要一个 action 被 dispatch 就会调用它们。
an action is dispatched against the store.
对store执行一个操作
One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.
简单应用就是
每当一个action被接收或者store被更新的时候,打印日志信息
 */
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// global count variable:
let count = 0;

// change code below this line
store.subscribe(() => count++)
// change code above this line

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
