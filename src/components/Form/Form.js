import { useState } from "react" //Импрорт Хука из (React)


const Form = ({addNewTodoFunc}) => { //Компонент {props}

    const [input, setInput] = useState('') //Хук для (input)

    const submitHandler = (Event) => { //Слушатель на кнопку (Add)
        Event.preventDefault() //Отмена действия по умолчанию для формы

        if (input) { //проверка для поля (input)
            addNewTodoFunc(input) //Если выполнено добавление задачи то...
            setInput('') //Значение "пустая строка" для очистки поля (input) после отправки
        }

    }

    return ( //jsx разметка
        <form onSubmit={submitHandler} /*обработчик событий на отправку*/
         className="d-flex flex-column align-items-center">
            <div className="mb-3">
                <input 
                onChange={(Event) => setInput(Event.target.value)} /*обработчик событий на (input) формы*/
                type="text" 
                value={input} /*Значение поля формы*/
                placeholder="Title ..." 
                className="form-control" 
                />
            </div>
        <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export { //экспорт компонента
    Form
}