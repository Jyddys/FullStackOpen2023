import { useState } from "react"


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
  


  const [selected, setSelected] = useState(0)

  const [voteArr, setVoteArr] = useState(new Uint8Array(anecdotes.length))

  const randomValue = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  console.log(voteArr)


  const increase = () => {
    const copy = [...voteArr]
    copy[selected] += 1
    setVoteArr(copy)
  }

  // const copy = voteArr
  // copy[0] += 1
 

  
  return (
    <div>
      {anecdotes[selected]}
      <br/>
      <p>has {voteArr[selected]} votes</p>
      <button onClick={increase}>vote</button>
      <button onClick={randomValue}>next necdote</button>
    </div>
  )
}

export default App
