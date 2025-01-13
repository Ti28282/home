import React, { useState } from 'react';
import './NavigationWindow.css';
import axios from 'axios';
// import Setting from '../Modal/Setting.';
import Modal from 'react-modal'
import BackgroundContextNav from './BackgroundContextNav.jsx'

export default function NavigationWindow() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [userAvatar, setUserAvatar] = useState(''); // default avatar URL
  const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('avatar', selectedFile);

    axios.post('server', formData)
      .then((response) => {
        setUserAvatar(response.data.avatarUrl); // update the user's avatar URL
      })
      .catch((error) => {
        console.error(error);
      });
    }

    return(
        <BackgroundContextNav>
            <header>
                <div className="container_header">
                    <div className="avatar_nick_home">
                        <div className='avatar_nick'>
                            <div className="avatar">
                                {/* <button onClick={handleUpload} className='button_avatar'>Upload Avatar</button> */}
                                {/* <input type="file" onChange={handleFileChange} className='file_type'/> */}
                                <img src={userAvatar} className='avatar_img'/>
                            </div>
                            <div className='line l1'></div>
                            <div className="nickname">Nickname</div>
                            <div className='line l2'></div>
                        </div>
                        <div>
                            <input type="button" className="home"/>
                        </div>
                    </div>
                    <div className="func_head_sett">
                        <input type="button" className="exit"/>
                        <div className='setting_container'>
                            <input type="button" className="setting" onClick={openModal}/>
                            <Modal portalClassName="modal" id='container_setting' isOpen={modalIsOpen} onRequestClose={closeModal}>
                                    <h1>Окно готово</h1>
                            </Modal>
                            <img src="../../../public/icons8-settings-48.svg" alt="" className='setting_img'/>
                        </div>
                    </div>
                </div>
            </header>
            <body>
                <div className="container_nav">
                    <button className='but_nav_GPT'>Chat-GPT</button>
                </div>
            </body>
        </BackgroundContextNav>
    )
}