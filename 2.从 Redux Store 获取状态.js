// getState()方法检索 Redux store 对象中保存的当前的state。
// 在store中使用store.getState()检索state，并将其分配给新变量currentState。
const store = Redux.createStore(
  (state = 5) => state
);

// 更改此行下方的代码
const currentState = store.getState();
// Get State from the Redux Store

// The Redux store object provides several methods that allow you to interact with it.
// store提供了几种方式来允许你和他做关联



// 可以用getState()方法获取 Redux store 对象中保存的当前的state。
// you can retrieve(检索) the current state held in the Redux store object with the getState() method.
// 获取store里面的数据,使用store对象的方法,getState