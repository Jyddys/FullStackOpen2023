import Part from "./Part"
import Total from "./Total"

const Content = (props) => {

  return (
   <div>
    <ul>
      {props.course.parts.map(part => 
        <Part key={part.id} name={part.name} exercise={part.exercises}/>
      )}
      <Total course={props.course}/>
    </ul>
   </div>
  )
}

export default Content