import {Route, Switch, Redirect} from "react-router-dom";
import AuthPage from "./pages/auth/AuthPage";
import CalculatorPages from "./pages/calculator/CalculatorPages";
import ErrorPage from "./pages/error/ErrorPage";


export const useRoutes = (isAuth) => {
    return (
        <Switch>
            {
                isAuth
                    ?
                    <Route exact path='/'>
                        <CalculatorPages/>
                    </Route>
                    :
                    <>
                        <Route path='/auth/:company/:name/:ticket/:token' exact>
                            <AuthPage/>
                        </Route>
                        <Route path='/' exact>
                            <h1>Нет Авторизации</h1>
                        </Route>
                    </>

            }

            <Route path='/error/:key'>
                <ErrorPage/>
            </Route>


            {/*<Redirect to='/error/404'/>*/}
            <Redirect to='/'/>
        </Switch>
    )
}

export default useRoutes