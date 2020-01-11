// 在 Redux 中，有一个状态对象负责应用程序的整个状态
// 这意味着如果你有一个包含十个组件且每个组件都有自己的本地状态的 React 项目，那么这个项目的整个状态将通过 Reduxstore被定义为单个状态对象
// Redux store 是应用程序状态的唯一真实来源。
// 可以使用 Redux 对象中的createStore()来创建一个 reduxstore

// 声明一个store变量并把它分配给createStore()方法，然后把reducer作为一个参数传入即可。

// housed in the Redux store
// 位于redux store

const reducer = (state = 5) => {
  return state;
}

// Redux 方法可以从 Redux 对象获得
// 例如: Redux.createStore()
// 在这里定义一个 store
const store = Redux.createStore(reducer);



// In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux store. 
// redux里面,有一个对象负责全局应用的状态,意味着
// 如果10个react组件有各自的state
// 那么就会有一个state对象管理全局state,这个state定义在redux store里面

// This is the first important principle to understand when learning Redux:
// 什么时候学习redux
// the Redux store is the single source of truth when it comes to application state.
// redux store 是整个应用程序state的真实来源

// This also means that any time any piece of your app wants to update state, it must do so through the Redux store
// 意味着,任何时候任何app部分想要更新state,必须经过redux store

// unidirectional data flow 单向数据流

//  The unidirectional data flow makes it easier to track state management in your app
// 单向数据流让这样做更简单

// The Redux store is an object 
// store是一个对象
// There is a method called createStore() on the Redux object,
// redux对象里面有一个createStore方法来创建redux  Store create the Redux store
// redux有一个方法来创建store


// store是一个对象,创建方式-redux.createStore
//    获取store里面的数据,使用store对象的方法,getState   
//        store接受action,更新state
// action是一个js对象,包含有关已发生的 action 事件的信息
// action必须传递的值是type属性,date数据可选
