import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux"
import {copyConf, addDetail, delConf, itemConf, handlerConf} from "../../../../redux/actions"
import CorpsDescriptionItem from './conf/CorpsDescriptionItem'
import {createContext} from "react"
import Select from "../../../Select";
import Input from "../../../Input";


const CorpsItem = ({
                       selectMain,
                       type,
                       id,
                       wId,
                       data,
                       isActive,
                   }) => {
    const dispatch = useDispatch()
    const {nomenclature, percent} = useSelector(s=>s.data)
    wId++
    const goodArr = []

    data.details.forEach((corp, corpId) => {
        if (selectMain === corp.toId) {
            corp.trueId = corpId
            goodArr.push(corp)
        }
    })

    return (
        <>
            <div className="set-corps">
                <div className={cn("set-corps__item",
                    isActive && 'set-corps__item--black')}>
                    <button className="set-corps__btn set-corps__btn--content btn"
                            style={{backgroundImage: 'url(img/dist/sprite.svg#square)'}}>
                        12
                    </button>
                    <div className="set-corps__group set-corps__group--lg">
                        <span className="set-corps__help">{data.name} {wId}</span>
                        <Select
                            className='set-corps__select'
                            array={nomenclature[data.type]}
                            onClick={(value, price)=>{
                                dispatch(handlerConf(data.id, value, 'data'))
                                dispatch(handlerConf(data.id, price, 'setPrice'))
                                dispatch(handlerConf(data.id, price * data.cubicMeter, 'price'))
                            }}
                        />
                    </div>
                    <div className="set-corps__group">
                        <span className="set-corps__help">Цвет</span>
                        <Input
                            dataId={data.id}
                            type="text"
                            className="set-corps__input"
                            placeholder="Цвет"
                            name='color'
                            value={data.color}
                        />
                    </div>
                    <div className="set-corps__group set-corps__group--sm">
                        <span className="set-corps__help">М<sup>2</sup></span>
                        <Input
                            dataId={data.id}
                            type="number"
                            className="set-corps__input"
                            placeholder="0"
                            name='cubicMeter'
                            value={data.cubicMeter}
                            price={data.setPrice}
                        />
                    </div>
                    {
                        isActive ?
                            <>
                                <button
                                    className="set-corps__btn btn"
                                    style={{backgroundImage: 'url(img/dist/sprite.svg#delete)'}}
                                    onClick={() => {
                                        dispatch(itemConf(false))
                                    }}
                                />
                                <button className="set-corps__btn btn" disabled/>
                            </>
                            :
                            <>
                                <button
                                    className="set-corps__btn set-corps__btn--accent btn"
                                    style={{backgroundImage: 'url(img/dist/sprite.svg#cub)'}}
                                    onClick={() => {
                                        dispatch(itemConf(id))
                                    }}
                                />
                                {
                                    data.isDuplicate ?
                                        <button
                                            className="set-corps__btn btn"
                                            style={{backgroundImage: 'url(img/dist/sprite.svg#minus)'}}
                                            onClick={() => {
                                                dispatch(delConf(id))
                                            }}
                                        />
                                        :
                                        <button
                                            className="set-corps__btn btn"
                                            style={{backgroundImage: 'url(img/dist/sprite.svg#plus)'}}
                                            onClick={() => {
                                                dispatch(copyConf(type))
                                            }}
                                        />
                                }
                            </>
                    }
                </div>
            </div>
            {
                isActive &&
                <>
                        {
                            data.details.map((corp, corpId) => {
                                return <CorpsDescriptionItem
                                    id={corpId}
                                    data={corp}
                                />
                            })
                        }
                        <div className="set-corps__item set-corps__item--grey">
                            <button
                                className="set-corps__btn-plus btn"
                                style={{backgroundColor: '#484D53', backgroundImage: 'url(img/dist/sprite.svg#plus)'}}
                                onClick={() => {
                                    dispatch(addDetail(type))
                                }}
                            />
                        </div>
                </>
            }
        </>
    )
}


export default CorpsItem