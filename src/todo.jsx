export default function Todo({task, isDone}){
    // return isDone ? <li>Finished: {task}</li> : <li>Work On: {task}</li>
    return (

        <li>{task} : {isDone? '✔️' : '❌'}</li>
    )

}