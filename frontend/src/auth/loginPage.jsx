import React from "react";
import './stylePage.scss'
import { SquishyBox } from "../squishyBox";

function loginPage() {

    return(
        <SquishyBox>
            <div className="login-container">
                <h2>Войти</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email или логин</label>
                        <input type="text" id="email" placeholder="Введите email или логин" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Пароль</label>
                        <input type="password" id="password" placeholder="Введите пароль" required />
                    </div>
                    <button type="submit">Войти</button>
                </form>
                <div className="footer"> Нет аккаунта?
                    <a href="#"> Зарегистрироваться</a>
                </div>
            </div>
        </SquishyBox>
    )
}
export default loginPage;