/*
  The last several challenges worked with arrays, but there are ways to help enforce state immutability when state is an object, too.
  A useful tool for handling objects is the Object.assign() utility.

  Object.assign() takes a target object and source objects and maps properties from the source objects to the target object.
  Any matching properties are overwritten by properties in the source objects.
  任何匹配的属性都会被源对象中的属性覆盖。
  This behavior is commonly used to make shallow copies of objects by passing an empty object as the first argument followed by the object(s) you want to copy. Here's an example:
  通常用于通过传递一个空对象作为第一个参数，然后是要用复制的对象来制作对象的浅表副本。这是一个例子：

  const newObject = Object.assign({}, obj1, obj2);

  This creates newObject as a new object, which contains the properties that currently exist in obj1 and obj2.


 */
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ONLINE':
      return Object.assign({}, state, { status: "online" });
      // don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
