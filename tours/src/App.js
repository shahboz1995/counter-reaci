import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  const random = () => {
    setCount(Math.floor(Math.random() * 100))
  }


  return (
    <div className="App">
      <div className="card text-center">
        <div className="card-body">
          <h1> </h1>
          <div className="my-5">

            <h1>{count}</h1>
            <button
              className="btn increment"
              onClick={() => setCount(count + 1)}
            >
              Increment
            </button>
            <button
              className="btn decrement"
                onClick={() => setCount(count - 1)}
            >
              Decrement
            </button>
            <button className="btn reset" onClick={() => setCount(0)}>
              Reset
            </button>
          </div>
          <button className="btn randomNumbr" onClick={random}>
            Random Numbr
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
