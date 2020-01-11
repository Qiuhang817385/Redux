/*
  After creating an action, the next step is sending the action to the Redux store so it can update its state
  创建小兵,让它发消息
  但是这个时候小兵么有车,怎么办
  action creator就是车
  In Redux, you define action creators to accomplish this

  An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

  action creator是一个js函数
  action creator 只是一个返回action的 JavaScript 函数
action creator 创建表示动作事件的对象





 */
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
let actionCreator = () => {
  return action
}