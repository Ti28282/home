import './SWTCss/SysWeaTrack.css'

export default function NavigationWindow() {

    return(
        <>
            <header>
                <div className="container_header">
                    <div className="avatar_nick">
                        <div>
                            <div className="avatar">фыв</div>
                            <div className="nickname">фыв</div>
                        </div>
                        <div>
                            <input type="button" />
                        </div>
                    </div>
                    <div className="func_head_sett">
                        <input type="button" />
                        <input type="button" />
                    </div>
                </div>
            </header>
            <body>
                <div className="container_nav">
                    <button className='but_nav_GPT'></button>
                </div>
            </body>
        </>
    )
}