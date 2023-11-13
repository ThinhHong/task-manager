export const AddTask = (props) =>{
  return(
      <div className="taskContainer" style={{backgroundColor: (props.completed) ? "lightgreen": "white"}}>
          <h2 >{props.taskName}</h2>
          <div >
          <button className="finishedTask" onClick= {()=> props.completeTask(props.id)}> Completed </button>
          <button className="finishedTask" onClick= {()=> props.deleteTask(props.id)}> X </button>
          </div>
          
      </div>
  )
}