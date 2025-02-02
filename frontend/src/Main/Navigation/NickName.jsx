import axios from "axios";
import { ADDRESS } from "../Config";
import { useState, useEffect } from "react";

export default function NickNameUser() {
    const [nickUser, setNickUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [err, setError] = useState(null);
  
    useEffect(() => {
        const NickData = () => {
          try{
            axios.get(`${ADDRESS}/user/me`).then((response) => {
              setNickUser(response.data);
          })
          } catch(error) {
              setError(error.message);
                console.log(err)
          } finally {
              setLoading(false);
                console.log(loading)
          }
        
      }
      NickData();
    }, [])

    return (
        <div className="container_nick_name">
            {nickUser.login}
        </div>
    )
}