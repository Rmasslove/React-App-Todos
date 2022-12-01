import { Form } from '../Form/Form' //Импорт компонента


const Header = ({addNewTodoFunc}) => { //Компонент {props}



    return ( // jsx разметка
        <header >
            <Form addNewTodoFunc={addNewTodoFunc} /*Прокидывание функции (addNewTodo) в виде (props) в компонент (Form)*/ />       
        </header>
    )
}

export { //экспорт компонента
    Header
}