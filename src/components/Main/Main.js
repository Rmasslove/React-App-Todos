import { TodoList } from '../TodoList/TodoList' //Импорт компонента


const Main = ({todos, deleteTodo, changeTodoStatus}) => { //Компонент {props}

if (!todos.length) { //Проверка на наличие "задач" в листе
    return <p>Todo list is empty ...</p> //jsx разметка
}

    return ( //jsx разметка
        <main>
            <TodoList todos={todos} deleteTodo={deleteTodo} changeTodoStatus={changeTodoStatus} /*Прокидываем функцию в виде (props) в (TodoList)*//> 
        </main>
    )
}

export { //экспорт компонента
    Main
}