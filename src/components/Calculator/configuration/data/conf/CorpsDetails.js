import cn from 'classnames'
import {useDispatch, useSelector} from "react-redux";
import {detailsConf, handlerConf, handlerDetail, sectionDetail} from "../../../../../redux/actions";
import {typeBlocks} from "../../../../../consts";
import Input from "../../../../Input";
import Select from "../../../../Select";

export const CorpsDetails = ({data, id}) => {
    const dispatch = useDispatch()
    const {conf, item} = useSelector(s => s.calc)
    const {type} = conf[item]

    const isFasad = type === typeBlocks.FASAD ? true : false
    const isSection = data.isSection

    const actionConf = conf[item]

    const arrType = [
        {name: 'Верх', type: 'up'},
        {name: 'Низ', type: 'down'},
        {name: 'Пенал', type: 'penal'},
    ]

    return (
        <div className={cn(
            isFasad ? "calculation-facades" : "calculation-corps"
        )}>
            <div className={cn(
                isFasad ? "calculation-facades__wrapper calculation-facades__wrapper--coral" : "calculation-corps__wrapper",
                isSection ? "calculation-corps__wrapper--green" : !isFasad && "calculation-corps__wrapper--coral"
            )}>
                <div className="calculation-facades__item">
                    <input
                        type="text"
                        className="calculation-corps__search"
                        value={data.name}
                        placeholder="Введите наименование"
                    />
                    <button
                        className="calculation-corps__btn btn"
                        style={{backgroundImage: 'url(img/dist/sprite.svg#delete)'}}
                        onClick={() => {
                            dispatch(detailsConf(false))
                        }}
                    />
                </div>
                {
                    isFasad ?
                        <div className="calculation-facades__item calculation-facades__item--ultra-width">
                            <button className="calculation-facades__btn btn" disabled/>
                            <div className="calculation-facades__group">
                                <span className="calculation-facades__help">Высота</span>
                                <input
                                    type="text"
                                    className="calculation-facades__input input"
                                    placeholder="0"
                                    name='height'
                                    value={data.height}
                                    onChange={(e) => dispatch(handlerDetail(id, e.target.value, e.target.name))}
                                />
                            </div>
                            <div className="calculation-facades__group">
                                <span className="calculation-facades__help">Ширина</span>
                                <input
                                    type="text"
                                    className="calculation-facades__input input"
                                    placeholder="0"
                                    name='width'
                                    value={data.width}
                                    onChange={(e) => dispatch(handlerDetail(id, e.target.value, e.target.name))}
                                />
                            </div>
                            <button
                                className="calculation-facades__btn calculation-facades__btn--white btn"
                                onClick={() => {
                                    let cubicMeter = ''
                                    cubicMeter = Number(data.width) * Number(data.height)
                                    cubicMeter = Number(cubicMeter).toFixed(2)
                                    dispatch(handlerDetail(id, cubicMeter, 'cubicMeter'))
                                    dispatch(handlerConf(item, cubicMeter, 'cubicMeter'))
                                    dispatch(detailsConf(false))
                                }}
                            >
                                0
                            </button>
                        </div>
                        :
                        <div className="calculation-corps__item">
                            {
                                isSection
                                    ?
                                    <div className="calculation-corps__group calculation-corps__group--sm">
                                <span className="calculation-corps__help calculation-corps__help--img"
                                      style={{backgroundImage: 'url(img/dist/sprite.svg#question-circle)'}}/>
                                        <input
                                            className="calculation-corps__input calculation-corps__input--white input"
                                            value="7" maxLength="1" placeholder="0"
                                        />
                                    </div>
                                    :
                                    <>
                                        <button
                                            className="calculation-corps__btn btn"
                                            style={{backgroundImage: 'url(img/dist/sprite.svg#energy)'}}
                                            onClick={() => {
                                                dispatch(sectionDetail())
                                            }}
                                        />
                                        <div className="calculation-corps__group calculation-corps__group--lg">
                                            <span className="calculation-corps__help">Тип</span>
                                            {/*<Select*/}
                                            {/*    array={[*/}
                                            {/*        {name: 'up'},*/}
                                            {/*        {name: 'down'},*/}
                                            {/*        {name: 'penal'},*/}
                                            {/*    ]}*/}
                                            {/*    className='calculation-corps__select'*/}
                                            {/*    onClick={() => dispatch(handlerDetail(id, 'up', 'tip'))}*/}
                                            {/*/>*/}

                                            <select className={cn("select", 'calculation-corps__select')} onChange={(e)=>{
                                                const idx = e.target.value
                                                dispatch(handlerDetail(id, arrType[idx].type, 'tip'))
                                            }}>
                                                <option value="" selected disabled>Выберите</option>
                                                {
                                                    arrType.map((item, idx)=>{
                                                        return(
                                                            <option
                                                                value={idx}
                                                                // onClick={()=>setState({name: item.name, price: item.price})}
                                                            >{item.name}</option>
                                                        )
                                                    })
                                                }
                                            </select>

                                            {/*<select className="calculation-corps__select select">*/}
                                            {/*    <option value="1" selected disabled>Тип</option>*/}
                                            {/*    <option*/}
                                            {/*        value="up"*/}
                                            {/*        onClick={() => dispatch(handlerDetail(id, 'up', 'tip'))}*/}
                                            {/*    >*/}
                                            {/*        Верх*/}
                                            {/*    </option>*/}
                                            {/*    <option*/}
                                            {/*        value="down"*/}
                                            {/*        onClick={() => dispatch(handlerDetail(id, 'down', 'tip'))}*/}
                                            {/*    >*/}
                                            {/*        Низ*/}
                                            {/*    </option>*/}
                                            {/*    <option*/}
                                            {/*        value="penal"*/}
                                            {/*        onClick={() => dispatch(handlerDetail(id, 'penal', 'tip'))}*/}
                                            {/*    >*/}
                                            {/*        Пенал*/}
                                            {/*    </option>*/}
                                            {/*</select>*/}
                                        </div>
                                    </>
                            }
                            <div className="calculation-corps__group">
                                <span className="calculation-corps__help">Ширина</span>
                                <Input
                                    dataId={id}
                                    to='details'
                                    type="text"
                                    className="calculation-corps__input"
                                    placeholder="0"
                                    name='width'
                                    value={data.width}
                                />
                            </div>
                            <div className="calculation-corps__group">
                                <span className="calculation-corps__help">Глубина</span>
                                <Input
                                    dataId={id}
                                    to='details'
                                    type="number"
                                    className="calculation-corps__input"
                                    placeholder="0"
                                    name='depth'
                                    value={data.depth}
                                />
                            </div>
                            <div className="calculation-corps__group">
                                <span className="calculation-corps__help">Высота</span>
                                <Input
                                    dataId={id}
                                    to='details'
                                    type="number"
                                    className="calculation-corps__input"
                                    placeholder="0"
                                    name='height'
                                    value={data.height}
                                />
                            </div>
                            <div className="calculation-corps__group">
                                <span className="calculation-corps__help">Полки</span>
                                <Input
                                    dataId={id}
                                    to='details'
                                    type="number"
                                    className="calculation-corps__input"
                                    placeholder="0"
                                    name='shelves'
                                    value={data.shelves}
                                />
                            </div>
                            <button
                                className="calculation-corps__btn calculation-corps__btn--white btn"
                                onClick={() => {
                                    let cubicMeter = ''
                                    const A = data.width
                                    const B = data.height
                                    const C = data.depth
                                    const n = data.shelves
                                    switch (data.tip) {
                                        case 'up':
                                            cubicMeter = (
                                                (B * C) * 2 +
                                                (C * (A - 32)) * 2 +
                                                ((A - 32) * (C - 20)) * n
                                            ) * 0.000001
                                            break
                                        case 'down':
                                            cubicMeter = (
                                                (B * C) * 2 +
                                                (C * (A - 32)) +
                                                (100 * (A - 32)) * 2 +
                                                ((A - 32) * (C - 20)) * n
                                            ) * 0.000001
                                            break
                                        case 'penal':
                                            cubicMeter = (
                                                (B * C) * 2 +
                                                (C * (A - 32)) * 2 +
                                                ((A - 32) * (C - 20)) * n
                                            ) * 0.000001
                                            break
                                    }
                                    cubicMeter = Number(cubicMeter).toFixed(2)
                                    dispatch(handlerDetail(id, cubicMeter, 'cubicMeter'))
                                    let allCubicMeter = 0
                                    actionConf.details.forEach((item) => {
                                        if (item.cubicMeter > 0 && item.cubicMeter !== cubicMeter) {
                                            allCubicMeter = Number(allCubicMeter) + Number(item.cubicMeter)
                                        }
                                    })
                                    allCubicMeter = allCubicMeter + Number(cubicMeter)
                                    dispatch(handlerConf(actionConf.id, allCubicMeter.toFixed(2), 'cubicMeter'))
                                    dispatch(detailsConf(false))
                                }}
                            >
                                0
                            </button>
                        </div>
                }

            </div>
        </div>
    )
}

export default CorpsDetails