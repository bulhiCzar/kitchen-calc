import {useDispatch, useSelector} from "react-redux";
import {delDetail, detailsConf, handlerConf, сopyDetail} from "../../../../../redux/actions";
import CorpsDetails from "./CorpsDetails";


const CorpsDescriptionItem = ({data, id, index}) => {
    index++
    const dispatch = useDispatch()
    const {detail, conf, item} = useSelector(s=>s.calc)

    if (detail === id) {
        return <CorpsDetails data={data} id={id}/>
    }

    const actionConf = conf[item]

    return (
        <div className="set-corps__item set-corps__item--grey">
            <button
                className="set-corps__btn btn"
                style={{backgroundImage: 'url(img/dist/sprite.svg#minus)'}}
                onClick={() => {
                    dispatch(delDetail(id, ))
                }}
            />
            <span className="set-corps__heading">
                <strong>{data.name} {id}:</strong> {actionConf.data}, {actionConf.color}, {data.height}х{data.width}х{data.depth}
            </span>
            <span className="set-corps__help">{data.cubicMeter || '0'} м<sup>2</sup></span>
            <button
                className="set-corps__btn set-corps__btn--full-img btn"
                style={{backgroundImage: 'url(img/dist/sprite.svg#calculation)'}}
                onClick={() => {
                    dispatch(detailsConf(id, actionConf.id))
                }}
            />
            <button
                className="set-corps__btn btn"
                style={{
                    backgroundColor: '#484D53',
                    backgroundImage: 'url(img/dist/sprite.svg#copy)'
                }}
                onClick={() => {
                    dispatch(сopyDetail(data, actionConf.type))
                    const cubicMeter = Number(data.cubicMeter)
                    let allCubicMeter = 0
                    actionConf.details.forEach((item)=>{
                        if (item.cubicMeter > 0 && item.cubicMeter !== cubicMeter){
                            allCubicMeter = Number(allCubicMeter) + Number(item.cubicMeter)
                        }
                    })
                    allCubicMeter = allCubicMeter + Number(cubicMeter)
                    dispatch(handlerConf(actionConf.id, allCubicMeter.toFixed(2), 'cubicMeter'))
                }}
            />
        </div>
    )
}


export default CorpsDescriptionItem