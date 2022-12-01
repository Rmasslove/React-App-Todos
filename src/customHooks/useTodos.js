import { useCallback, useEffect, useState } from "react" //Импорт функции в Реакте
import { TODOS_KEY_IN_LS } from "../utils/constants" //Импорт из "constants"



export const useTodos = () => { //"Кастомный Хук" функция с вынесенной в отдельный файл логикой

    const [todos, setTodos] = useState([]) //Хук для (todos)

    useEffect(() => { //Хук запускающийся один раз для проверки содержимого (localStorage)
      const todosFromLS = localStorage.getItem(TODOS_KEY_IN_LS) //переменная получающая значение от localStorage по ключу
      const prepareTodos = todosFromLS ? JSON.parse(todosFromLS) : [] //проверяем наличие данных, забираем данные или пустой массив
      
      if (prepareTodos.length) { //Доп проверка если (prepareTodos) пустой то следующая строка не запустится 
        setTodos(prepareTodos) //Вызываем функцию изменения, которая принимает данные и изменяет (todos)
      }    
    }, [])
  
    useEffect (() => { //Хук для захвата изменений данных и отправки их в (localStorage)
      localStorage.setItem(TODOS_KEY_IN_LS, JSON.stringify(todos)) //Метод записи в (localStorage)
    }, [todos]) //Параметр на изменение которого срабатывает Хук
  
  
    const addNewTodo = (title) => { //Функция для созданим новой задачи в массиве
      const newTodo = { //Объект со значениями одной задачи в массиве
        title, //Текст задачи
        id: Date.now(), //id генерируемый с помощью функции времени
        status: false //Статус выполнения задач
      }
  
      setTodos(prev => [newTodo, ...prev]) //изменение (todos) добавление новой задачи + разварот старых задач в массив через функцию (setTodos)
    }
  
    const deleteTodo = (id) => { //Функция для удаления задачи
      setTodos(prev => prev.filter((todo) => todo.id !== id)) //Проверка массива задач по id и возвращение массива без задачи совпавшей с (id)
    }
  
    const changeTodoStatus = (id) => { //Функция для смены статуса задачи
      setTodos(prev => prev.map((todo) => { //Функция изменения (todos), изменение массива при помощи метода (map)
        if (todo.id === id) { //Поиск (todo) среди всех (todos) по (id)
          return { //возврат измененной (todo)
            ...todo, //Разворачиваем значения (todo)
            status: !todo.status //Меняем статус (добавляя новый)
          }
        }
        return todo //возвращаем (todo) по методу (map)
      }))
    }

    const clearAllTodos = useCallback(() => { //Функция для очисти списка задач, обёрнутая в (useCallback) с аргументом ([]) для однократного запуска и предотвращения перезапуска в дальнеёшем
      setTodos([]) //Присвоение пустого массива, это обнуляет предыдущие значение 
    },[]) //([]) устанавливает однократны запуск при монтировании и предотвращает повторные перересовки, помогает оптимизировать (Footer) при помощи (React.memo)

    return { //Возврат сущностей 
        todos,
        addNewTodo,
        deleteTodo,
        changeTodoStatus,
        clearAllTodos
    }
}