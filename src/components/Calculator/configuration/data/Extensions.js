import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {copyConf, delConf, handlerConf} from "../../../../redux/actions";
import Select from "../../../Select";
import Input from "../../../Input";


const Extensions = ({data, wId}) => {
    wId++
    const dispatch = useDispatch()
    const {nomenclature} = useSelector(s=>s.data)
    const {isDuplicate, isFree} = data

    return (
        <div className="set-fittings__item">
            <button className="set-fittings__btn set-fittings__btn--content btn"
                    style={{backgroundImage: 'url(img/dist/sprite.svg#fittings)'}}>11
            </button>
            <div className="set-fittings__group set-fittings__group--lg">
                <span className="set-fittings__help">{data.name} {wId}</span>
                {
                    isFree ?
                        <Input
                            dataId={data.id}
                            type="text"
                            className="set-fittings__input"
                            name='data'
                            value={data.data}
                            onClick={(value, price)=>{
                                dispatch(handlerConf(data.id, value, 'data'))
                                dispatch(handlerConf(data.id, price, 'setPrice'))
                                dispatch(handlerConf(data.id, price, 'price'))
                            }}
                        />
                        :
                        <Select
                            className='set-fittings__select'
                            array={nomenclature[data.type] }
                            onClick={(value, price)=>{
                                console.log(price)
                                dispatch(handlerConf(data.id, value, 'data'))
                                dispatch(handlerConf(data.id, price, 'setPrice'))
                                if (!isFree){
                                    dispatch(handlerConf(data.id, price * data.quantity , 'price'))
                                } else{
                                    dispatch(handlerConf(data.id, price, 'price'))
                                }
                            }}
                        />
                }
            </div>
            <div className="set-fittings__group">
                <span className="set-fittings__help">{isFree ? 'Кол-во' :'Цвет'}</span>
                <Input
                    dataId={data.id}
                    type={isFree ? 'number' : 'text'}
                    className="set-fittings__input"
                    placeholder={isFree ? 'Кол-во' : 'Цвет'}
                    name={isFree ? 'quantity' : 'color'}
                    value={isFree ? data.quantity : data.color}

                />
            </div>
            <div className="set-fittings__group">
                <span className="set-fittings__help">{isFree ? "Цена" : 'Кол-во'}</span>
                <Input
                    dataId={data.id}
                    type="number"
                    className="set-fittings__input"
                    placeholder={isFree ? 'Цена' : 'Кол-во'}
                    name={isFree ? 'price' : 'quantity'}
                    value={isFree ? data.price : data.quantity}
                    price={!isFree && data.setPrice}
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

export default Extensions