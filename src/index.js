import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return {
        ...state,
        tasks: [...state.tasks,
        {
          content: action.payload,
        },
        ],
      };
    default:
      return state;
  }
};

const addTask = contnet => ({
  type: "addTask",
  payload: contnet,
});
const selectTasks = ({ task }) => task;

const store = configureStore({ reducer: tasksReducer });
console.log(store.getState());

store.dispatch(addTask("Buy milk"));
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
