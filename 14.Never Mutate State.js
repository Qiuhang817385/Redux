/*
These final challenges describe several methods of enforcing (执行)
the key principle of state immutability in Redux.
Immutable state means that you never modify state directly, instead, you return a new copy of state.
If you took a snapshot of the state of a Redux app over time,
拍摄快照
you would see something like state 1, state 2, state 3,state 4, ...
and so on where each state may be similar to the last,
but each is a distinct piece of data.
This immutability, in fact, is what provides such features as time-travel debugging that you may have heard about.
事实上，这种不变性是什么提供了你可能听说过的时间旅行调试等功能。

Redux does not actively enforce state immutability in its store or reducers, that responsibility falls on the programmer.
Fortunately, JavaScript (especially ES6) provides several useful tools you can use to enforce the immutability of your state, whether it is a string, number, array, or object.
es6提供了数据不变性的几个工具
Note that strings and numbers are primitive values and are immutable by nature.
请注意，字符串和数字是原始值，并且本质上是不可变的。
In other words, 3 is always 3. You cannot change the value of the number 3.
3 总是 3，你不能改变数字 3 的值
An array or object, however, is mutable.
In practice, your state will probably consist of an array or object,
状态可能包含一个数组或对象
as these are useful data structures for representing many types of information.

 */


return todos.concat(action.todo);
// or return [...todos, action.todo]