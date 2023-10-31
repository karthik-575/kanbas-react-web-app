import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import DynamicStyling from "./DynamicStyling";
import ConditionalOutput from "./ConditionalOutput";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div>
            <h1>Assignment 3</h1>


            <JavaScript/>
            <PathParameters/>
            <DynamicStyling/>
            <ConditionalOutput/>
            <TodoItem/>
            <TodoList/>
            <br/>
            <h3>A4 todoList</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item" key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <br/>
        </div>
    );
}
export default Assignment3;