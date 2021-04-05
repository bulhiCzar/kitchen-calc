import {useParams} from 'react-router-dom'


const ErrorPage = ()=>{
    const {key} = useParams()

    return(
        <h1>ERROR {key}</h1>
    )
}

export default ErrorPage