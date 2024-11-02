import Authorization from './AuthAdmin/Authorization'
import Site from './Main/Site/Site'
import Admin from './AuthAdmin/Administrator'
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'

export default function App() {

    return(
        <BrowserRouter>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Site</Link>
                    </li>
                    <li>
                        <Link to="/authorization">Authorization</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}
            <main>
                <Routes>
                    <Route path="/" element={<Authorization />}/>
                    <Route path="/home" element={<Site />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}