import React, {useState, useEffect} from "react";
import './SysUb.css';
import axios from "axios";
import BackgroundProvider from '../Weather/BackgroundContext';
// import { Token } from "../../AuthAdmin/Authorization";
// import Authorization from "../../AuthAdmin/Authorization";
import { useAuth } from '../../AuthContext';

const IP = "93.157.248.178"
const PORT = 4666
export default function SystemUbuntu() {
    const [systemInfo, setSystemInfo] = useState({});
    const { token } = useAuth();
    
    
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const UB = async () => {
        try{
            const ubuntu = await axios.get(`http://${IP}:${PORT}/user/systeminfo`, config
            
            );
            const data = ubuntu.data
            
            setSystemInfo(data) // todo Обработка данных: Когда получен ответ API, функция fetchData обрабатывает данные ответа, вызывая метод json() для анализа ответа в формате JSON. Результирующие данные затем сохраняются в переменной состояния systemInfo с помощью функции setSystemInfo.
        } catch (error) {
            console.error(error)
        }
    }

    // const fetchData = () => {
    //     fetch(`http://${IP}:${PORT}/user/systeminfo`, {
    //         method: 'GET'
    //     })
    //     .headers('Authorization', 'Bearer' + Token)
    //     .then(response => response.json())
    //     .then(data => {
    //         setSystemInfo(data);    
    //     });
    // };
    
    useEffect(() => {
        UB();
        const intervalId = setInterval(UB, 2000)
        return () => clearInterval(intervalId)
    }, []);

    return(
        <BackgroundProvider>
            <div id="container_system">
                <p className="text_system">Информация о системе</p>
                <div className="system">
                    <img src="../../../public/ubuntustarthere_104634.png" alt="img Ubuntu" className="img_ubuntu"/>
                    <div className="info_system" id="os"><p className="name_sys">OS:</p>{systemInfo.OS}</div>
                    <div className="info_system" id="host"><p className="name_sys">Host:</p>{systemInfo.HOST}</div>
                    <div className="info_system" id="kernel"><p className="name_sys">Kernel:</p>{systemInfo.KERNEL}</div>
                    <div className="info_system" id="shell"><p className="name_sys">Shell:</p>{systemInfo.SHELL}</div>
                    <div className="info_system" id="cpu"><p className="name_sys">CPU:</p>{systemInfo.NAME_CPU}</div>
                    <div className="info_system" id="gpu"><p className="name_sys">GPU:</p>{systemInfo.GPU}</div>
                    <div className="info_system" id="memory"><p className="name_sys">Memory:</p>{systemInfo.MEMORY}</div>
                    <div className="info_system" id="uptime"><p className="name_sys">Uptime:</p>{systemInfo.UPTIME}</div>
                    <div className="info_system" id="ping"><p className="name_sys">PING:</p>{systemInfo.PING}</div>
                </div>
            </div>
        </BackgroundProvider>
    )
}