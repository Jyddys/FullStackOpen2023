import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button style={{marginLeft: '10px'}}onClick={handleClick}>{name}</button>
  )
}

const Display = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
    </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} name="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} name="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} name="bad"/>
      <Display 
        good={good} 
        neutral={neutral} 
        bad={bad}
      />
    </div>
  )
}

export default App