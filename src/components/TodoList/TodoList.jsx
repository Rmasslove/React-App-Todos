import { Todoitem } from "../Todoitem/Todoitem" //Ипорт компонента


export const TodoList = ({todos, deleteTodo, changeTodoStatus}) => { //Компанент с пропсами


    return ( //jsx разметка
        <ul className="list-group">
                {
                  todos.map((todo, i) =>  /*Метод изменения массива и отрисовки (li)*/
                      (<Todoitem /*Прокидываем функцию в виде (props) в (Todoitem)*/
                      key = {todo.id} /*Присвоение каждому элементу (todo) из массива - уникального и постоянного номера*/
                      inx={i} /*Номер по порядку для задачи*/
                      changeTodoStatus={changeTodoStatus} /*Прокидываем функции*/
                      deleteTodo={deleteTodo} /*Прокидываем функции*/
                      {...todo} /*Разворачивание остальных параметров*/
                      />)
                    )
                }            
            </ul>      
    )
}

