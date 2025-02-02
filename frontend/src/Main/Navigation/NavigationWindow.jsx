import React, { useState } from 'react';
import './NavigationCss/NavigationWindow.css';
import Modal from 'react-modal'
import AvatarUpLoader from './Avatar.jsx';
import BackgroundProvider from './BackgroundContextNav.jsx'
import NickNameUser from './NickName.jsx';
import Setting from '../Modal/Setting.jsx';

export default function NavigationWindow() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return(
        <BackgroundProvider>
            <header>
                <div className="container_header">
                    <div className="avatar_nick_home">
                        <div className='avatar_nick'>
                            <div className="avatar"><AvatarUpLoader /></div>
                            <div className='line l1'></div>
                            <div className="nickname"><NickNameUser /></div>
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
                            <Modal portalClassName="modal"
                             id='container_setting'
                             isOpen={modalIsOpen} 
                             onRequestClose={closeModal}
                             ariaHideApp={false}
                             style={{
                                overlay: {
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  right: 0,
                                  bottom: 0,
                                  backgroundColor: 'rgba(255, 255, 255, 0)'
                                },
                                content: {
                                  position: 'absolute',
                                  top: '20vh',
                                  left: '28vw',
                                  right: 0,
                                  bottom: 0,
                                  border: '1px solid #ccc',
                                  background: 'rgba(182, 182, 182, 0.57)',
                                  overflow: 'auto',
                                  WebkitOverflowScrolling: 'touch',
                                  borderRadius: '4px',
                                  outline: 'none',
                                  padding: '20px'
                                }
                              }}
                             >
                                <Setting />
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
        </BackgroundProvider>
    )
}