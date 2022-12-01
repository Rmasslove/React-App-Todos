//Данный компонент не используется

import React from "react" //Импорт из (react)
import { useTodos } from "../../customHooks/useTodos"



export const TodosContext = React.createContext() //Объевляем контекст

export const TodosContextProvider = ({children}) => { //Создаём компонент с контекстом

    const { todos, addNewTodo, deleteTodo, changeTodoStatus, clearAllTodos } = useTodos() //Деструктуризация полученных сущностей 

    return ( //jsx разметка
        <TodosContext.Provider  value={{ todos, addNewTodo, deleteTodo, changeTodoStatus, clearAllTodos }} /*Обязательное свойство (value) которое хранит те данные которые передаёт контекст*/ > 

            {children /*обстрактная сущность которая представляет те модули которые будут обёрнуты в контекст*/} 

        </TodosContext.Provider> //обязательное свойство (Provider) для контекста
    )
}