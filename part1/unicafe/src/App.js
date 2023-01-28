import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button style={{marginLeft: '10px'}}onClick={handleClick}>{name}</button>
  )
}

const Display = ({good, neutral, bad, number}) => {

  const total = good + neutral + bad
  const array = number
  const avg = array.reduce((sum, value) => sum + value, 0) / array.length

  const positiveReview = good / total * 100

  return (
    <div>
      <h1>statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        {avg ? <p>average {avg}</p> :<p>average 0</p> }
        <p>positive {positiveReview} %</p>
    </div>
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState([])

  const handleGood = () => {
    setGood(good + 1)
    setValue(oldValue => [...oldValue, 1])
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setValue(oldValue => [...oldValue, 0])
  }

  const handleBad = () => {
    setBad(bad + 1)
    setValue(oldValue => [...oldValue, -1])
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood} name="good" />
      <Button handleClick={handleNeutral} name="neutral" />
      <Button handleClick={handleBad} name="bad"/>
      
      <Display 
        good={good} 
        neutral={neutral} 
        bad={bad}
        number={value}
      />
    </div>
  )
}

export default App