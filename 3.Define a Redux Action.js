// Redux is a state management framework, updating state is one of its core tasks
// redux的核心任务:更新state

// all state updates are triggered by dispatching actions
// 什么时候更新??????????

// 通过派发action来进行state的更新

// 那么什么是action
// An action is simply a JavaScript object that contains information about an action event that has occurred
// 是一个js对象,包含有关已发生的 action 事件的信息

// Redux store receives these action objects, then updates its state accordingly(相应的)
// store接受action,更新state

// a Redux action also carries some data.
// action可以携带数据

// the action carries a username after a user logs in比如用户名,在用户登录之后

// actions must carry a type property that specifies the 'type' of action that occurred
// action必须传递的值是type属性

// Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store
// redux就像一个快递员,在app里面跑,来传递在store里面的信息

// The store then conducts the business of updating state based on the action that occurred.
// store是一个主管,action是一个个小兵来回跑


// Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.

// Define an action here:
const action = {
  type: 'LOGIN'
}