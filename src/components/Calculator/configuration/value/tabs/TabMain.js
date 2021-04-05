import cn from 'classnames'
import {typeBlocks} from "../../../../../consts";
import MainList from "../list/MainList";
import {useSelector} from "react-redux";

const TabMain = ({isActive, conf}) => {
    const {percent} = useSelector(s => s.calc)
    const actionConf = conf.filter(item => item.type === typeBlocks.CORPUS || item.type === typeBlocks.FASAD)

    return (
        <div className={cn(
            "miscalculation-tabs__content",
            isActive && 'miscalculation-tabs__content--active'
        )}>
            {
                actionConf.map((confItem) => {
                    const item = {}
                    Object.assign(item, confItem)
                    if (!item.price || !item.color) return
                    if (Number(percent) !== 0) {
                        item.price = item.price + (item.price / 100 * percent)
                    }
                    return item.details.length ?
                        <div className="miscalculation__list miscalculation__list--main">
                            <MainList
                                name={item.name}
                                color={item.color}
                                data={item.data}
                                price={item.price}
                                cubicMeter={item.cubicMeter}
                            />
                            <div className="miscalculation__list">
                                {item.details.map((d) => {
                                    return <MainList
                                        name={item.name}
                                        color={item.color}
                                        data={item.data}
                                        price={item.price}
                                        cubicMeter={item.cubicMeter}
                                    />
                                })}
                            </div>
                        </div>
                        :
                        <div className="miscalculation__list miscalculation__list--main">
                            <MainList
                                name={item.name}
                                color={item.color}
                                data={item.data}
                                price={item.price}
                                cubicMeter={item.cubicMeter}
                            />
                        </div>
                })
            }
        </div>
    )
}

export default TabMain