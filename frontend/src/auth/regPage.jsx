import React from "react";
import './stylePage.scss'
import { SquishyBox } from "../squishyBox";

function regPage() {

    return(
        <SquishyBox>
            <div className="login-container" id="reg">
                <h2>Регистрация</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Введите email или логин" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Логин</label>
                        <input type="text" id="login" placeholder="Введите email или логин" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" placeholder="Введите пароль" required />
                    </div>
                    <button type="submit">Зарегистрироваться</button>
                </form>
                <div className="footer"> Есть аккаунта?
                    <a href="#"> Войти</a>
                </div>
            </div>
        </SquishyBox>
        
    )
}
export default regPage;