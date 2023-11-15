export const Task = (props) =>{
    return( 
        <div
        className="task"
        style={{backgroundColor : props.completed ? "#59C3C3" : "blueviolet" }} 
        >
        <h1 className="name">{props.taskName}</h1>
        <div class = "buttons" >
            <button className = "x" onClick={ () => props.deleteTask(props.id)}> x </button>
            <button className = "done"  onClick={ () => props.completeTask(props.id)}> DONE </button>
        </div>
        </div>
    );
};