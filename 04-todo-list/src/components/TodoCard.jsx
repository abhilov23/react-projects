export default function TodoCard(props) {
    const {children, handleDeleteTodo, index} = props
  return (
    <li className="todoItem">
        {children} {/*passing up the props here */}
                    <div className="actionsContainer">
                    <button>
                    <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button onClick={()=>{
                        handleDeleteTodo(index)
                    }}></button>
                    <i className="fa-solid fa-trash"></i>
                    </div>
                </li>
  )
}
