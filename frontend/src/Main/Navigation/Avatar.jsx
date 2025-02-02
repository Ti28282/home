import axios from 'axios';
import {  useState, useEffect } from 'react';
import { ADDRESS } from '../Config';
import './NavigationCss/Avatar.css'

export default function AvatarUpLoader() {
  const [avatarDataImg, setAvatarDataImg] = useState(null)
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState(null);

  useEffect(() => {
      const AvatarData = () => {
        try{
          axios.get(`${ADDRESS}/user/avatar`).then((response) => {
            setAvatarDataImg(response.data);
        })
        } catch(error) {
            setError(error.message);
              console.log(err)
        } finally {
            setLoading(false);
              console.log(loading)
        }
      
    }
    AvatarData();
  }, []) // todo Пустой массив зависимостей означает, что это выполняется один раз при монтировании компонента
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (err) {
    return <div>Error: {err}</div>;
  }
  //! Преобразовывает base64 в src
  // todo смотрит пусто ли avatarDataImg
  const imageSrc = avatarDataImg ? `data:image/png;base64,${avatarDataImg.img}` : null
  
  return (
    <div className='container_avatar'>
      {imageSrc ? (
        <img src={imageSrc} alt='user default avatar' className='default_avatar'/>
      ) : (
        <div>Аватар не найден</div>
      )}
    </div>
  );
}