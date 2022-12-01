import stylesTodoItem from  './styles.module.css' //Импорт стилей


export const Todoitem = ({id, title, status, inx, deleteTodo, changeTodoStatus}) => { //Компонент {props}



    return ( //jsx разметка
        <li className="list-group-item d-flex justify-content-between">
            <span className={`d-flex align-items-center ${status ? stylesTodoItem.done : "" /*правило для изменения стиля перечёркивания текста*/}`}>{inx + 1 /*Индекс задачи*/}. {title /*Текст задачи*/}{" "}</span>
        <div>
            <button onClick={() => deleteTodo(id)} /*Вешаем обработчик на кнопку*/ type="button" className="btn mx-2 btn-danger">Delete</button> 
            <button onClick={() => changeTodoStatus(id)} /*Вешаем обработчик на кнопку*/ type="button" className="btn btn-success">Done</button>
        </div>                        
        </li>
    )
}