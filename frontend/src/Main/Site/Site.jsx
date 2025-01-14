
import Weather from '../Weather/Weather.jsx';
import NavigationWindow from '../Navigation/NavigationWindow.jsx';
import Monitoring from '../Monitoring/Monitoring.jsx';
import SystemUbuntu from '../System/SystemUbuntu.jsx';
import './Site.css'

export default function Site() {
    
    return(
        <div id="system_site">
            <div id="container">
                <NavigationWindow/>
                <Weather/>
                <Monitoring/>
                <SystemUbuntu/>
            </div>
        </div>
    )
}