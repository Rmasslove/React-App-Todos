import './App.css'; //Импрорт стилей
import Footer from './components/Footer/Footer'; //Импорт компонента методом (default)
import { Header } from './components/Header/Heared'; //Импорт компонента
import { Main } from './components/Main/Main'; //Импорт компонента
import { useTodos } from './customHooks/useTodos'; //Импорт компонента


function App() { //Компонент

const { todos, addNewTodo, deleteTodo, changeTodoStatus, clearAllTodos } = useTodos() //Деструктуризация полученных сущностей 


    return ( //jsx разметка
      <div className='container py-5'>
        <Header addNewTodoFunc={addNewTodo} /*Прокидывание функции (addNewTodo) в виде (props) в компонент (Header)*//>
        <hr /*разделитель между разделами*//> 
        <Main changeTodoStatus={changeTodoStatus} /*Прокидываем функцию в виде (props) в (Main)*/
          deleteTodo={deleteTodo} /*Прокидываем функцию в виде (props) в (Main)*/
          todos={todos} /*Прокидываем список задач в виде (props) в компонент (Main)*/ />
        <hr /*разделитель между разделами*//>
        <Footer clearAllTodos={clearAllTodos} /*Прокидывание функции (clearAllTodos) в виде (props) в компонент (Footer)*//>
      </div>
    );
}

export default App; //экспорт компонента методом (default)
