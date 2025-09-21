function Tasks(props) {
  console.log(props)
  return(
    <ul>
      {props.tasks.map((task) => (
        <li className="text-cyan-200 text-2xl">{task.title}</li>
      ))}
    </ul>
  )
}

export default Tasks;
