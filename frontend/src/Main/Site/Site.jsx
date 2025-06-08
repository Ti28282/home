import Weather from '../Weather/Weather.jsx';
import NavigationWindow from '../Navigation/NavigationWindow.jsx';
import Monitoring from '../Monitoring/Monitoring.jsx';
import SystemUbuntu from '../System/SystemUbuntu.jsx';
import './Site.css';
import LoadingSite from '../../Loading/WebsiteLoading.jsx';
import { useEffect, useState } from 'react';


export default function Site() {
    const [loading, setLoading] = useState(true)
    
        useEffect(() => {
        //todo Функция, которая будет вызвана, когда DOM полностью загружен
            const handleDOMContentLoaded = () => {
                console.log("DOM полностью загружен")
                setLoading(false)
            }
        //todo Проверка состояния документа
            if(document.readyState === "complete") {
            //todo Если загружен, вызывает функцию сразу
                handleDOMContentLoaded();
            } else {
            //! В противном случае добавляем слушатель события DOMContentLoaded
                document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
            }
            //todo Возвращаем функцию для очистки, удаляем слушатель события
            return() => {
                document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
            };
        }, []);

        //* Если TRUE то показываем загрузку
        if(loading) {
            return(
                <LoadingSite />
            );
        }

    return(
        <div id="system_site">
            <div id='container'>
                <NavigationWindow/>
                <Weather/>
                <Monitoring/>
                <SystemUbuntu/>
            </div>
        </div>
    )
}