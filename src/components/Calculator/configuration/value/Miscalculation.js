import {useState} from "react"
import cn from 'classnames'
import TabMain from "./tabs/TabMain";
import TabSettings from "./tabs/TabSettings";
import TabImg from "./tabs/TabImg";
import {useDispatch, useSelector} from "react-redux";
import ListItem from "./list/ListItem";
import {copyMis, delMis, handlerMis} from "../../../../redux/actions";
import goToPrice from "../../../../utils/goToPrice";

const Miscalculation = ({data, id}) => {
    const [settings, setSettings] = useState(false)
    const [visible, setVisible] = useState(true)
    const [tab, setTab] = useState(0)

    let totalPrice = 0

    const {conf, percent} = useSelector(s => s.calc)
    const dispatch = useDispatch()

    const actionConf = conf.filter((item) => item.instance === data.id)

    return (
        <div className={cn(
            "miscalculation__wrapper",
            !visible && 'miscalculation__wrapper--hidden'
        )}>
            <div className="miscalculation__header">
                <h4 className="miscalculation__title">ПРОСЧЕТ <strong>{data.name} {data.id}</strong></h4>
                <button
                    className={cn(
                        "miscalculation__settings",
                        settings && 'miscalculation__settings--active'
                    )}
                    onClick={() => setSettings(pre => !pre)}
                >
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.7674 1.23174C12.7437 2.20805 12.7437 3.79096 11.7674 4.76727C10.7911 5.74358 9.20816 5.74358 8.23186 4.76727C7.25556 3.79096 7.25556 2.20805 8.23186 1.23174C9.20813 0.255435 10.791 0.255435 11.7674 1.23174Z"
                            fill="#3C545C"/>
                        <path
                            d="M11.7678 16.2322C12.7441 17.2085 12.7441 18.7915 11.7678 19.7678C10.7915 20.7441 9.20856 20.7441 8.23226 19.7678C7.25595 18.7915 7.25595 17.2085 8.23226 16.2322C9.20852 15.2559 10.7914 15.2559 11.7678 16.2322Z"
                            fill="#3C545C"/>
                        <path
                            d="M11.7678 8.73223C12.7441 9.70854 12.7441 11.2915 11.7678 12.2678C10.7915 13.2441 9.20856 13.2441 8.23226 12.2678C7.25595 11.2915 7.25595 9.70854 8.23226 8.73223C9.20852 7.75592 10.7914 7.75592 11.7678 8.73223Z"
                            fill="#3C545C"/>
                    </svg>
                </button>
                <ul className={cn("miscalculation__panel")}>
                    <li className="miscalculation__panel-item">
                        <button
                            className="miscalculation__panel-button"
                            onClick={() => dispatch(handlerMis(data.id))}
                        >
                            Редактировать
                        </button>
                    </li>
                    <li className="miscalculation__panel-item">
                        <button
                            className="miscalculation__panel-button"
                            onClick={() => dispatch(copyMis(data.id))}
                        >
                            Дублировать
                        </button>
                    </li>
                    <li className="miscalculation__panel-item">
                        <button
                            className="miscalculation__panel-button"
                            onClick={() => dispatch(delMis(data.id))}
                        >Удалить
                        </button>
                    </li>
                    <li className="miscalculation__panel-item">
                        <button className="miscalculation__panel-button">%</button>
                    </li>
                </ul>
            </div>
            <div className="miscalculation__inner">
                <div className="miscalculation__list">
                    {
                        actionConf.map((confItem) => {
                            const item = goToPrice(confItem)
                            if (!item) return
                            if (Number(percent) !== 0) {
                                item.price = item.price + (item.price / 100 * percent)
                            }
                            totalPrice = totalPrice + Number(item.price)
                            return <ListItem
                                data={item}
                            />
                        })
                    }
                </div>
                <div className="miscalculation__result">
                    <span className="miscalculation__result-title">ИТОГО:</span>
                    <p className="miscalculation__result-price"><span>{totalPrice}</span> ₽</p>
                </div>
                <div className="miscalculation-tabs">
                    <ul className="miscalculation-tabs__list" role="tablist">
                        {
                            [1, 2, 3].map((item, idx) => {
                                return (
                                    <li className={cn(
                                        "miscalculation-tabs__item",
                                        idx === tab && "miscalculation-tabs__item--active")}
                                    >
                                        <button
                                            className="miscalculation-tabs__button"
                                            style={{backgroundImage: `url(img/dist/sprite.svg#miscalculation-tabs-0${idx + 1})`}}
                                            onClick={() => setTab(idx)}
                                        />
                                    </li>
                                )
                            })
                        }
                    </ul>

                    <TabMain
                        isActive={(() => tab === 0 && true)()}
                        conf={actionConf}
                    />
                    <TabSettings
                        misId={id}
                        isActive={(() => tab === 1 && true)()}
                    />
                    <TabImg
                        isActive={(() => tab === 2 && true)()}
                    />

                </div>
            </div>
            <button
                className="miscalculation__roll-up"
                onClick={() => {
                    setVisible(pre => !pre)
                }}
            />
        </div>
    )
}

export default Miscalculation