import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from '../features/authentication/Login';
function AppRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Login}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter