

const MainList = ({name, data, color, price, cubicMeter})=>{
    return(
        <div className="miscalculation__item">
            <p className="miscalculation__name">{name}: <span>{data}, {color}</span></p>
            <p className="miscalculation__price"><span>{price}</span> ₽</p>
            <p className="miscalculation__meters"><span>{cubicMeter}</span> м<sup>2</sup></p>
        </div>
    )
}

export default MainList