// import libraries
import React from 'react'
import Result from '../src/components/Result'
import Button from '../src/components/Button'
import "./App.css"

// component creation with an arrow function
const App = () => {
  return ( 
    <main>
      <section className='glass-efect'>
          <Result value={'555'}/>
          <Button type='Hola' text='Como estas' clickHandler={()=>{
            console.log('segundo piso')
          }}/>
      </section>
    </main> 
    )
}

// export the function
export default App