// Step 1: Import necessary Redux functions
import { configureStore } from '@reduxjs/toolkit';

// Step 2: Define the initial state
const initialState = {
  value: 0, // Start with a counter value of 0
};

// Step 3: Define a reducer function to handle actions
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'counter/increment':
      // Increment the counter value by 1
      return {
        ...state,
        value: state.value + 1,
      };
    case 'counter/decrement':
      // Decrement the counter value by 1
      return {
        ...state,
        value: state.value - 1,
      };
    case 'counter/reset':
      // Reset the counter value to 0
      return {
        ...state,
        value: 0,
      };
    default:
      // Return the current state for other actions
      return state;
  }
}

// Step 4: Create the Redux store with the reducer
const store = configureStore({ reducer: counterReducer });

// Step 5: Dispatch actions to update the state
// Dispatch the 'counter/increment' action
store.dispatch({ type: 'counter/increment' });

// Step 6: Get and log the updated state
console.log(store.getState()); // { value: 1 }

// Dispatch the 'counter/increment' action again
store.dispatch({ type: 'counter/increment' });

// Step 7: Get and log the updated state after the second dispatch
console.log(store.getState()); // { value: 2 }

// Step 8: Define a selector function
const selectCounterValue = (state) => state.value;

// Step 9: Use the selector to get and log a specific piece of information from the state
const currentValue = selectCounterValue(store.getState());
console.log(currentValue); // 2

/*
!!!Here's a more detailed explanation of each step:

*1 
Importing Necessary Redux Functions: You start by importing the configureStore function from Redux Toolkit. 
This function is used to create a Redux store.

*2 
Defining the Initial State: You define an initial state object for your Redux store. In this case, 
it's a simple object with a value property initialized to 0. This is the starting value for your counter.

*3 
Defining a Reducer Function: You create a reducer function (counterReducer) that takes the current state 
and an action as arguments. The reducer is responsible for specifying how the state should change 
in response to actions. In this case, it listens for the 'counter/increment' action and increments 
the value by 1.

*4 
Creating the Redux Store: You create a Redux store using configureStore and pass in the 
counterReducer as the reducer for the store. This store holds the application's state.

*5 
Dispatching Actions: You use the store.dispatch method to dispatch actions. 
Dispatching an action is like triggering an event in your application. 
Here, you dispatch the 'counter/increment' action twice, which tells the store to increment the counter value.

*6 
Getting and Logging the Updated State: You use store.getState() to retrieve the updated state 
from the store after each dispatch. This updated state reflects the changes made by the reducer 
in response to the dispatched action. You log the state to the console to see the current counter value.

*7
Selectors: In the final part, you define a selector function (selectCounterValue) that takes the state 
as an argument and extracts the value property from it. 
Selectors are used to efficiently access specific pieces of information from the state.

*8 
Using the Selector: You use the selectCounterValue selector to get the current counter value 
from the store's state. This is a way to access a specific piece of data from the state 
without directly accessing the state object.

*9 
Logging the Selected Value: Finally, you log the selected value (the current counter value) 
to the console. This demonstrates how selectors can be used to access and display specific pieces of data 
from the Redux store.
*/