import {useDispatch, useSelector} from "react-redux";
import {copyConf, delConf, handlerConf} from "../../../../redux/actions";
import React from "react";
import Select from "../../../Select";
import Input from "../../../Input";

const Furnitura = ({data, wId}) => {
    wId++
    const dispatch = useDispatch()
    const {nomenclature} = useSelector(s=>s.data)
    const {isDuplicate} = data

    return (
        <div className="set-fittings__item">
            <button className="set-fittings__btn set-fittings__btn--content btn"
                    style={{backgroundImage: 'url(img/dist/sprite.svg#fittings)'}}>11
            </button>
            <div className="set-fittings__group set-fittings__group--lg">
                <span className="set-fittings__help">{data.name} {wId}</span>
                <Select
                    className='set-fittings__select'
                    array={nomenclature[data.type]}
                    onClick={(value, price)=>{
                        dispatch(handlerConf(data.id, value, 'data'))
                        dispatch(handlerConf(data.id, price, 'setPrice'))
                        dispatch(handlerConf(data.id, price * data.quantity, 'price'))
                    }}
                />
            </div>
            <div className="set-fittings__group">
                <span className="set-fittings__help">Кол-во</span>
                <Input
                    dataId={data.id}
                    type="number"
                    className="set-fittings__input"
                    placeholder="Кол-во"
                    name='quantity'
                    value={data.quantity}
                    price={data.setPrice}
                />
            </div>
            {
                isDuplicate ?
                    <button
                        className="set-fittings__btn btn"
                        style={{backgroundImage: 'url(img/dist/sprite.svg#minus)'}}
                        onClick={()=>{
                            dispatch(delConf(data.id))
                        }}
                    />
                    :
                    <button
                        className="set-fittings__btn btn"
                        style={{backgroundImage: 'url(img/dist/sprite.svg#plus)'}}
                        onClick={()=>{
                            dispatch(copyConf(data.type))
                        }}
                    />
            }

        </div>
    )
}

export default Furnitura