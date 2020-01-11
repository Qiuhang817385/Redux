// One solution from ES6 to help enforce state immutability in Redux is the spread operator: ....
/*
The spread operator has a variety of applications,
one of which is well-suited to the previous challenge of producing a new array from an existing array.
This is relatively new, but commonly used syntax.

For example, if you have an array myArray and write:
 */
// 数组的那些方法会产生新的数组,也就是返回一个新的数组,concat???

let newArray = [...myArray];

/*
  newArray is now a clone of myArray.
  Both arrays still exist separately in memory.
  If you perform a mutation like newArray.push(5),
  myArray doesn't change. The ... effectively spreads out the values in myArray into a new array.
  To clone an array but add additional values in the new array, you could write [...myArray, 'new value'].
  This would return a new array composed of the values in myArray and the string 'new value' as the last value.

  The spread syntax can be used multiple times in array composition like this,
  but it's important to note that it only makes a shallow copy of the array.
  That is to say, it only provides immutable array operations for one-dimensional arrays.
  但重要的是要注意它只做一个浅拷贝这就是说，它只为一维数组提供了不可变的数组操作。


 */


return [...state, action.todo]