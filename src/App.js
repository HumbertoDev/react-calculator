// import libraries
import React from 'react'
import Button from '../src/components/Button'
import Result from '../src/components/Result'
import "./App.css"

// component creation with an arrow function
const App = () => {

  return ( 
    <main>
      <section className='glass-efect'>
        <section className='header'>
          <h1>Calculadora de IMC</h1>
          <h2>Con esta Calculadora de IMC podrás lleva run control de tu índice de masa corporal</h2>
          <Result value={77}/>
        </section>
        <section className='numbers-container'>

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'1'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'2'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'3'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

        <Button 
          bType={'button'} 
          pType={'number'} 
          value={'+'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />
        </section>

        <section className='numbers-container'>

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'4'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'5'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

          <Button 
          bType={'button'} 
          pType={'number'} 
          value={'6'} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />

        <Button 
          bType={'button'} 
          pType={'number'} 
          value={'='} 
          clickHandler={() => {
            console.log('segunda arrow function')
          }}
          />
        </section>
      </section>
    </main> 
    )
}

// export the function
export default App
