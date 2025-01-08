import Authorization from './AuthAdmin/Authorization'
import Site from './Main/Site/Site'
import Admin from './AuthAdmin/Administrator'
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './AuthContext';

const App = observer(() => {  

    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route id='auth' path="/" element={<Authorization />}/>
                    <Route element={<PrivateRoute />}> 
                        <Route id='site' path="/home" element={<Site />} />
                    </Route>
                    <Route element={<PrivateRoute />}> 
                        <Route id='site' path="/admin" element={<Admin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
});

export default App