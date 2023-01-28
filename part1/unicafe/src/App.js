import { useState } from 'react'

const Button = ({handleClick, name}) => {
  return (
    <button style={{marginLeft: '10px'}}onClick={handleClick}>{name}</button>
  )
}

const StatisticLine = ({text, value, positiveReview}) => {

  return (
    <div>
    <table style={{tableLayout: "fixed",width: "150px"}}>
      <tbody>
      <tr>
        <td>{text} </td>
        <td>{value} {positiveReview ? "%" : ""}</td>
      </tr>
      </tbody>
    </table>
    </div>
  )
}

const Statistics = ({good, neutral, bad, reviewNumber}) => {

  const all = good + neutral + bad
  const avg = (reviewNumber.reduce((sum, value) => sum + value, 0) / reviewNumber.length).toFixed(2)

  const positiveReview = (good / all * 100).toFixed(2)

  return (
    <div>
      <h1>statistics</h1>
      {all ? 
      <>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all}/>
        <StatisticLine text="average" value={avg}/>
        <StatisticLine text="positive" positiveReview={positiveReview} value={positiveReview} />
      </>
        :
        <p>No feedback given</p>
        }
        
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
      
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
        reviewNumber={value}
      />
    </div>
  )
}

export default App