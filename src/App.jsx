import { useState } from 'react'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='bg-yellow-400 text-black font-bold px-6 py-2' onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}

export default App
  