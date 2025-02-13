import React, { useState } from "react";
import './Setting.css';
import { ADDRESS } from "../Config";
import axios from "axios";

export default function Setting() {
    const [selectedFile, setBase64String] = useState('');
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleFileChange = (event) => {
        const file = (event.target.files[0])
        const reader = new FileReader();
    
        reader.onloadstart = () => {
          
          setBase64String('');
        };
        reader.onload = () => {
            setBase64String(reader.result);
        };
        reader.readAsDataURL(file);
        }
    
    const handleUpload = async () => {
        if(!selectedFile) return;
        // todo Объект, представляющий данные HTML формы.
        
        const formData = new FormData();
        // json object
        formData.append('img', selectedFile); //todo Добавляем файл в FormData

        setLoading(true);
        setSuccess(false);
        setError(null);

        try{
          await axios.post(`${ADDRESS}/user/avatar`, formData, {
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
            setSuccess(true)
        } catch(error) {
            setError(error.message);
              console.log(err)
        } finally {
            setLoading(false);
              console.log(loading)
        }
      
    }

    return(
        <div id="container_setting">
            <div id="setting">
                <input className="choice_avatar" type="file" onChange={handleFileChange}/>
                <button className="button_avatar" onClick={handleUpload}>Сменить аватар</button>
                {err && <div>{err}</div>}
                {success && <div>Аватар успешно загружен</div>}
            </div>
        </div>
    )
};