import { useState } from "react"
import axios from "axios"
import './AuAdCss/Admin.css'
export default function Authorization() {
    const [inputValue, setInputValue] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [error, setError] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const port = 4666
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(`http://93.157.248.178:${port}/user/auth`, { username, password });
          const token = response.data.token;
          localStorage.setItem('token', token);
          setIsAuthenticated(true);
        } catch (error) {
          setError(error.response.data.error);
        }
    };

    return (
        <body id="admin">
            <div id="container_admin">
                <div className="ad_log_pass">
                    <h1>Администратор</h1>
                    <form id="form_cont" onSubmit={handleSubmit}>
                        <div className="one_class login_input">
                            <label className="log">Логин</label>
                            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} name="login" className="login" />
                        </div>
                        <div className="one_class pass_input">
                            <label className="pass">Пароль</label>
                            <input type={showPassword ? "text" : "password"} value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} name="password" className="password" />
                        </div>
                        <input className="check_pass" type="checkbox" onClick={() => setShowPassword(!showPassword)}/>
                        <button type="submit" className="autho_button">Войти</button>
                    </form>
                    {error && <div style={{color: 'red'}}>{error}</div>}
                    {isAuthenticated && <div>Вы авторизовались</div>}
                </div>
            </div>
        </body>
    )
}