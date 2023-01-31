import Part from "./Part"

const Content = (props) => {

  return (
   <div>
    <ul>
      {props.course.parts.map(part => 
        <Part key={part.id} name={part.name} exercise={part.exercises}/>
      )}
    </ul>
   </div>
  )
}

export default Content