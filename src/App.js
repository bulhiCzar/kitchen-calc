import {BrowserRouter} from "react-router-dom"
import useRoutes from './routes'
import {useAuth} from "./hooks/auth.hook"
import 'antd/dist/antd.css'
import './App.scss'
import {useSelector} from "react-redux";


function App() {
    const {info, ready} = useAuth()
    const {bid} = useSelector(s=>s.data)
    const isAuthenticated = !!bid.id

    const routes = useRoutes(isAuthenticated)

    if (!ready) return <h1>ЗАГРУЗКА...</h1>
    return (
        <BrowserRouter>
            <div className="wrapper">
                <div className="wrapper_pages">
                    {routes}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
