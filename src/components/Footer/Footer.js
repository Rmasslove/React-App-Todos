//import styles from './footer.module.css' //импорт стилей
import React from "react"

const Footer = ({clearAllTodos}) => { //компонент {props}


    return ( //jsx разметка
        <footer className="d-flex justify-content-center">
             <button onClick={() => clearAllTodos()} /*Вешаем обработчик на кнопку*/ 
              type="button" className="btn btn-danger">Clear</button>
        </footer>
    )
}

export default React.memo(Footer) //экспорт компонента, обёрнутого в функцию (React.memo) для предотвращения перересовки компанента (Footer), методом (default)
