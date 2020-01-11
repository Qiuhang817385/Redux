/*
  Time to practice removing items from an array. The spread operator can be used here as well.
  Other useful JavaScript methods include slice() and concat().

  The reducer and action creator were modified to remove an item from an array based on the index of the item.
  Finish writing the reducer so a new state array is returned with the item at the specific index removed.
 */

[
  ...state.slice(0, action.index),
  ...state.slice(action.index + 1, state.length)
];
// or 
return state.slice(0, action.index).concat(state.slice(action.index + 1, state.length));




[0, 1, 2, 3, 4, 5]


// [...state.splice(action.index,1)]

// state.concat([]).slice(action.index,1)