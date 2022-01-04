//importing libraries
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App' 

//render the content

const root = document.getElementById('root')

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  root
)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

