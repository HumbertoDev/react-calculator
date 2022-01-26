// import libraries
import React from 'react'
import Button from '../src/components/Button'
import Functions from './components/Functions'
import MathOperations from './components/MathOperators'
import Result from '../src/components/Result'
import "./App.css"


// component creation with an arrow function
// Función Flecha o Arrow Function
const App = () => {
    // Lo que ejecuta la función
    return (
        <main className='react-calculator' >
            <Result value={34} />
            <div className="numbers" >
                <Button text={'1'} clickHandler = {(text) => {
                    console.log('segunda function en app.js: ' + text)
                }}/>
                <button > 2 </button>
                <button > 3 </button>
                <button > 4 </button>
                <button > 5 </button>
                <button > 6 </button>
                <button > 7 </button>
                <button > 8 </button>
                <button > 9 </button>
                <button > 0 </button>
            </div>
            <Functions 
                onClickClear={text => {console.log('Clear:' + text)}}
                onClickDelete={r => {console.log('Delete:' + r)}}
            />
            <MathOperations 
                onClickOperations={operation=>{console.log('Operacion : ' + operation)}}
                onClickEqual={equal=>{console.log('Equal : ' + equal)}}
            />
        </main>
    )
}

 // export the function
export default App