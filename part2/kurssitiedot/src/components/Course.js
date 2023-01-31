import Header from "./Header"
import Content from "./Content"

const Course = (props) => {

  return (
    <>
    {props.courses.map(course => 
    <>
      <Header key={course.id} name={course.name}/>
      <Content key={course.parts.id} course={course}/>
    </>
      )}
    </>
  )
}



export default Course

