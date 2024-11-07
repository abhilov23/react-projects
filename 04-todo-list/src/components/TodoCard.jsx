export default function TodoCard(props) {
    const {children} = props
  return (
    <li className="todoItem">
        {children} {/*passing up the props here */}
                    <div className="actionsContainer">

                    <i className="fa-regular fa-pen-to-square"></i>
                    <i className="fa-solid fa-trash"></i>
                    </div>
                </li>
  )
}
