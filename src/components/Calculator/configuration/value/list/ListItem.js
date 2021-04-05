import {useDispatch} from "react-redux";
import {clearConf} from "../../../../../redux/actions";


const ListItem = ({data = {}})=>{
    const onlyPrice = !!!data.quantity
    const dispatch = useDispatch()
    return(
        <div className="miscalculation__item">
            <p className="miscalculation__name">{data.name}: <span>{data.data}, {data.color}</span>
            </p>
            <p className="miscalculation__price"><span>{data.price}</span> ₽</p>
            {
                onlyPrice &&
                <p className="miscalculation__meters"><span>{data.cubicMeter}</span> м<sup>2</sup></p>
            }
            <button
                className="miscalculation__btn miscalculation__btn--delete"
                onClick={()=>{
                    dispatch(clearConf(data.id))
                }}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.0754 2.92755C13.1759 -0.971943 6.82893 -0.971943 2.92944 2.92755C1.04052 4.81721 0 7.32908 0 10.0005C0 12.6719 1.04052 15.1838 2.92944 17.0727C4.87958 19.0229 7.44101 19.9975 10.0024 19.9975C12.5638 19.9975 15.1253 19.0229 17.0754 17.0727C20.9749 13.1732 20.9749 6.82778 17.0754 2.92755ZM15.9798 15.9772C12.6839 19.2731 7.32089 19.2731 4.02496 15.9772C2.42893 14.3811 1.54955 12.2582 1.54955 10.0005C1.54955 7.74279 2.42893 5.61988 4.02496 4.02307C7.32089 0.727136 12.6839 0.727917 15.9798 4.02307C19.275 7.319 19.275 12.682 15.9798 15.9772Z"
                        fill="#ECF0F3"/>
                    <path
                        d="M13.3409 12.1422L11.1475 9.95192L13.3409 7.76162C13.643 7.45947 13.643 6.96904 13.3417 6.66607C13.0387 6.36235 12.5483 6.36313 12.2454 6.66529L10.0504 8.85714L7.85547 6.66529C7.55254 6.36313 7.0621 6.36235 6.75917 6.66607C6.45702 6.969 6.45702 7.45943 6.75995 7.76162L8.95337 9.95192L6.75995 12.1422C6.45702 12.4444 6.45702 12.9348 6.75917 13.2378C6.91027 13.3896 7.10937 13.4648 7.30773 13.4648C7.50609 13.4648 7.70441 13.3888 7.85551 13.2385L10.0505 11.0467L12.2454 13.2385C12.3965 13.3896 12.5948 13.4648 12.7932 13.4648C12.9915 13.4648 13.1906 13.3888 13.3417 13.2378C13.6438 12.9348 13.6438 12.4444 13.3409 12.1422Z"
                        fill="#ECF0F3"/>
                </svg>
            </button>
        </div>
    )
}

export default ListItem