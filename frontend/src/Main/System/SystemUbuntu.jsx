import  {useState, useEffect} from "react";
import './SysUb.css';
import BackgroundProvider from '../Weather/BackgroundContext';
import  { ADDRESS } from "../Config";
import axios from "axios";




export default function SystemUbuntu() {
    const [systemInfo, setSystemInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const SysUbuntuData = () => {
        try {
            axios.get(`${ADDRESS}/user/systeminfo`).then((response) => {
              setSystemInfo(response.data)  
            })
            
        } catch {
            setError(error.message)
        } finally {
            setLoading(false)
        }
        
    };
    
    useEffect(() => {
        SysUbuntuData();
        const intervalId = setInterval(SysUbuntuData, 1000)
        return () => clearInterval(intervalId)
    }, []);
    // todo ERROR WINDOW
    
    return(<>
        <BackgroundProvider>
        
            <div id="container_system">
                <p className="text_system">Информация о системе</p>
                <div className="system">
                    <img src="../../../public/ubuntustarthere_104634.png" alt="img Ubuntu" className="img_ubuntu"/>
                    <div className="info_system" id="os"><p className="name_sys">OS:</p>{systemInfo.OS}</div>
                    <div className="info_system" id="host"><p className="name_sys">Host:</p>{systemInfo.HOST}</div>
                    <div className="info_system" id="kernel"><p className="name_sys">Kernel:</p>{systemInfo.KERNEL}</div>
                    <div className="info_system" id="shell"><p className="name_sys">Shell:</p>{systemInfo.SHELL}</div>
                    <div className="info_system" id="cpu"><p className="name_sys">CPU:</p>{systemInfo.CPU}</div>
                    <div className="info_system" id="gpu"><p className="name_sys">GPU:</p>{systemInfo.GPU}</div>
                    <div className="info_system" id="memory"><p className="name_sys">Memory:</p>{systemInfo.MEMORY}</div>
                    <div className="info_system" id="uptime"><p className="name_sys">Uptime:</p>{systemInfo.UPTIME}</div>
                    <div className="info_system" id="ping"><p className="name_sys">PING:</p>{systemInfo.PING}</div>
                </div>
            </div>
        
        </BackgroundProvider>
        </>
    )
}