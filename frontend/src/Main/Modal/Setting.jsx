import React, { useState } from "react";
import './Setting.css'

export default function Setting() {
    
    return(
        <div id="container_setting">
            <div>
                <input className="choice_avatar" type="file" />
                <button className="button_avatar">Сменить аватар</button>
            </div>

        </div>
    )
};