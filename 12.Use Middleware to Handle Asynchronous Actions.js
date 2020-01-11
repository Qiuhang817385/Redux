// endpoints
/*
  端点

  At some point you'll need to call asynchronous endpoints in your Redux app, so how do you handle these types of requests?
在某些时候，你需要在 Redux 应用程序中使用异步请求，那么如何处理这些类型的请求

Redux provides middleware designed specifically for this purpose, called Redux Thunk middleware
redux thunk中间件来处理异步请求

To include Redux Thunk middleware, you pass it as an argument to Redux.applyMiddleware()
引入thunk,需要传递它作为redux.applyMiddleware()的一个参数
This statement(声明) is then provided as a second optional parameter to the createStore() function.
后将此函数作为第二个可选参数提供给createStore()函数
Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument.
要创建一个异步的 action，你需要在 action creator 中返回一个以dispatch为参数的函数
you can dispatch actions and perform asynchronous requests.

*/
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);


const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return { type: REQUESTING_DATA } }
const receivedData = (data) => { return { type: RECEIVED_DATA, users: data.users } }

const handleAsync = () => {
  return function (dispatch) {
    // dispatch request action here
    dispatch(requestingData());
    setTimeout(function () {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch received data action here
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
