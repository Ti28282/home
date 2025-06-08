import Authorization from './AuthAdmin/Authorization'
import Site from './Main/Site/Site'
import Admin from './AuthAdmin/Administrator'
import LoadingSite from './Loading/WebsiteLoading'
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';
import { useState, useEffect } from 'react';

const App = observer(() => {  
    // const [loading, setLoading] = useState(true)
    
    //     useEffect(() => {
    //     //todo Функция, которая будет вызвана, когда DOM полностью загружен
    //         const handleDOMContentLoaded = () => {
    //             console.log("DOM полностью загружен")
    //             setLoading(false)
    //         }
    //     //todo Проверка состояния документа
    //         if(document.readyState === "complete") {
    //         //todo Если загружен, вызывает функцию сразу
    //             handleDOMContentLoaded();
    //         } else {
    //         //! В противном случае добавляем слушатель события DOMContentLoaded
    //             document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
    //         }
    //         //todo Возвращаем функцию для очистки, удаляем слушатель события
    //         return() => {
    //             document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    //         };
    //     }, []);

    //     //* Если TRUE то показываем загрузку
    //     if(loading) {
    //         return(
    //             <LoadingSite />
    //         );
    //     }

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route id='auth' path="/" element={<Authorization />}/>
                    <Route element={<PrivateRoute />}> 
                        <Route id='site' path="/home" element={<Site />} />
                    </Route>
                    <Route element={<PrivateRoute />}> 
                        <Route id='site' path="/admin" element={<Admin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
});

export default App