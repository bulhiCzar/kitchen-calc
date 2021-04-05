import {handlerConf, handlerDetail} from "../redux/actions";
import cn from 'classnames'
import {useDispatch} from "react-redux";

const Input = ({
                   type = 'text',
                   value = '',
                   name = '',
                   placeholder = '',
                   className = '',
                   disabled = false,
                   dataId,
                   price,
                   to = 'conf'
               }) => {
    const dispatch = useDispatch()

    const handler = (e) => {
        let value = e.target.value

        switch (type) {
            case 'number':
                if (value === '') {
                    setValue(value)
                    if (price) {
                        dispatch(handlerConf(dataId, 0, 'price'))
                    }
                    return;
                } else if (!/^[0-9.]+$/.test(value)) {
                    return
                }

                if (price) {
                    const priceValue = value * price
                    dispatch(handlerConf(dataId, priceValue, 'price'))
                }
                setValue(value)
                return
            case 'text':
                setValue(value)
                return
        }
    }

    const setValue = (value) =>{
        if (to === 'conf'){
            dispatch(handlerConf(dataId, value, name))
        } else if (to === 'details'){
            dispatch(handlerDetail(dataId, value, name))
        }
    }

    return (
        <input
            disabled={disabled}
            type="text"
            className={cn("input", className)}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={handler}
        />
    )
}

export default Input