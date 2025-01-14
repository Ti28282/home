import { useState } from "react"
import axios from "axios"
import './AuAdCss/Autho.css'
import { useAuth } from "../AuthContext"
import { useNavigate } from "react-router-dom"
import { ADDRESS } from "../Main/Config"




export default function Authorization() {
    const [inputValue, setInputValue] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState(null)
    const { setIsAuthenticated, setToken } = useAuth();
    const [showPassword, setShowPassword] = useState()
    const navigate = useNavigate();

    const port = 4666
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(`${ADDRESS}/user/auth`, { login: inputValue, password: inputPassword });
            const token = response.data.access_token;
            
            if (token) {
                localStorage.setItem('access_token', token);
                setToken(token)
                setIsAuthenticated(true);
                setError(null); // Сброс ошибки при успешной аутентификации
                navigate('/home')
                
            } else {
                setError('Не удалось получить токен');
            }
        } catch (error) {
            setError(error.response?.data?.error || 'Произошла ошибка при авторизации');
            console.error(error);
        }
    };

    return (
        <div id="auth">
            <div id="container_auth">
                <div className="name_log_pass">
                    <h1>Авторизация</h1>
                    <form id="form_cont" onSubmit={handleSubmit}>
                        <div className="one_class login_input">
                            <label className="log">Логин</label>
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="login" className="login"/>
                        </div>
                        <div className="one_class pass_input">
                            <label className="pass">Пароль</label>
                            <input type={showPassword ? "text" : "password"} value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} name="password" className="password"/>
                        </div>
                        <input className="check_pass" type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
                        <button type="submit" className="autho_button">Войти</button>
                    </form>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                    {setIsAuthenticated}
                </div>
            </div>
        </div>
    )
}

