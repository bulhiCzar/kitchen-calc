import cn from 'classnames'

const Select = ({className, array = [], onClick})=>{
    return(
        <select className={cn("select", className)} onChange={(e)=>{
            const idx = e.target.value
            onClick(array[idx].name, array[idx].price)
        }}>
            <option value="" selected disabled>Выберите</option>
            {
                array.map((item, idx)=>{
                    return(
                        <option
                            value={idx}
                        >{item.name}</option>
                    )
                })
            }
        </select>
    )
}

export default Select