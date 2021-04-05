import {
    ADD_CONF,
    ADD_DETAILS, ADD_MIS, CLEAR_CONF, COPY_CONF,
    COPY_DETAILS, COPY_MIS,
    DEL_CONF,
    DEL_DETAILS, DEL_MIS,
    DETAILS_CONF, HANDLER_CONF, HANDLER_DETAIL, HANDLER_MIS, HANDLER_PERCENT,
    ITEM_CONF,
    SECTION_DETAIL
} from "../types";
import {typeBlocks} from "../../consts";

const initConf = [
    {
        id: 0,
        instance: 0,
        isDuplicate: false,
        name: 'Комплект Корпусов',
        data: '',
        color: '',
        cubicMeter: '',
        details: [],
        type: typeBlocks.CORPUS
    },
    {
        id: 1,
        instance: 0,
        isDuplicate: false,
        name: 'Комплект Фасадов',
        data: '',
        color: '',
        cubicMeter: '',
        details: [],
        type: typeBlocks.FASAD
    },
    {id: 2, instance: 0, name: 'Фурнитура Петли', type: typeBlocks.FPETLI},
    {id: 3, instance: 0, name: 'Фурнитура Ящики', type: typeBlocks.FBOX},
    {id: 4, instance: 0, name: 'Фурнитура Подъемные механизмы', type: typeBlocks.FPOWERUP},
    {id: 5, instance: 0, name: 'Фурнитура Раздвижные механизмы', type: typeBlocks.FSLIDING},
    {id: 6, instance: 0, name: 'Столешница', type: typeBlocks.ETABLE,},
    {id: 7, instance: 0, name: 'Столешница (ПСЦ)', type: typeBlocks.ETABLEpsc, isFree: true},
    {id: 8, instance: 0, name: 'Стеновая панель', type: typeBlocks.EWALLPANAL,},
    {id: 9, instance: 0, name: 'Стеновая панель (ПСЦ)', type: typeBlocks.EWALLPANALpsc, isFree: true},
    {id: 10, instance: 0, name: 'Ручки', type: typeBlocks.EPAN},
    {id: 11, instance: 0, name: 'Ручки (ПСЦ)', type: typeBlocks.EPANpsc, isFree: true},
    {id: 12, instance: 0, name: 'Проче', type: typeBlocks.EANY},
    {id: 13, instance: 0, name: 'Прочее (ПСЦ)', type: typeBlocks.EANYpsc, isFree: true},
    {id: 14, instance: 0, name: 'Фурнитура', type: typeBlocks.FACCES,},
]

const corp = {isSection: false, width: '', height: '', depth: '',}

const initialState = {
    conf: initConf.map(item => {
        const d = {}
        Object.assign(d, item)
        if (d.details) {
            d.details = d.details.map(detail => {
                const i = {}
                Object.assign(i, detail)
                return i
            })
        }
        return d
    }),
    miscalculation: [{
        id: 0,
        name: 'A'
    }],
    item: false,
    detail: false,
    lengthD: 2,
    misLength: 1,
    misActive: 0,
    percent: 12
}

export const calculatorReducer = (state = initialState, action) => {
    const type = searchName(action.typeBloke)
    const lengthC = state.conf.length

    let counter = 0
    let el

    switch (action.type) {
        case CLEAR_CONF:
            el = state.conf[action.payload]
            delete el.price
            delete el.color
            delete el.cubicMeter
            delete el.data
            delete el.quantity
            el.details = []

            state.conf[action.payload] = el
            return {...state}
        case ADD_CONF:
            return {...state}
        case COPY_CONF:
            state.conf.push({
                isDuplicate: true,
                name: type.name,
                id: lengthC,
                type: action.typeBloke,
                isFree: type.isFree,
                instance: state.misActive,
                details: [{...corp, name: type.name, toId: lengthC}],
            })
            return {...state}
        case DEL_CONF:
            return {
                ...state,
                conf: state.conf.filter((_) => _.id !== action.payload),
            }
        case ITEM_CONF:
            if (action.payload === state.item) action.payload = false
            return {...state, item: action.payload}
        case DETAILS_CONF:
            if (action.payload === state.detail) action.payload = false
            return {...state, detail: action.payload}
        case HANDLER_CONF:
            let idInLog
            state.conf.forEach((item, idx)=> {
                if (item.id === action.payload.id) {
                    idInLog = idx
                }
            })
            state.conf[idInLog][action.payload.name] = action.payload.value
            return {...state}
        case ADD_DETAILS:
            state.conf[state.item].details.push({...corp, name: type.name})
            state.detail = state.conf[state.item].details.length - 1
            return {...state}
        case DEL_DETAILS:
            state.conf[state.item].details =
                state.conf[state.item].details
                    .filter((_, id) => id !== action.payload)
            return {...state}
        case COPY_DETAILS:
            state.conf[state.item].details.push({...action.payload})
            return {...state}
        case SECTION_DETAIL:
            state.conf[state.item].details[state.detail].isSection = true
            state.conf[state.item].details[state.detail].name = 'Секция корпусов'
            return {...state}
        case HANDLER_DETAIL:
            state.conf[state.item].details[action.payload.id][action.payload.name] = action.payload.value
            return {...state}
        case HANDLER_MIS:
            return {...state, misActive: action.payload}
        case COPY_MIS:
            state.conf = [...state.conf, ...state.conf
                .filter((item) => item.instance === action.payload)
                .map((item) => {
                    const data = {}
                    Object.assign(data, item);
                    data.instance = state.misLength
                    data.id = state.conf.length + counter
                    if (data.details) {
                        data.details = data.details.map(detail => {
                            const i = {}
                            Object.assign(i, detail)
                            return i
                        })
                    }
                    counter++
                    return data
                })]
            state.miscalculation.push({id: state.misLength, name: Date.now()})
            state.misActive = state.misLength
            state.misLength++
            return {...state,}
        case ADD_MIS:
            state.conf = [...state.conf, ...initConf
                .map((item) => {
                    const data = {}
                    Object.assign(data, item);
                    data.instance = state.misLength
                    data.id = state.conf.length + counter
                    if (data.details) {
                        data.details = data.details.map(detail => {
                            const i = {}
                            Object.assign(i, detail)
                            return i
                        })
                    }
                    counter++
                    return data
                })]
            state.miscalculation.push({id: state.misLength, name: Date.now()})
            state.misActive = state.misLength
            state.misLength++
            return {...state,}
        case DEL_MIS:
            state.conf = state.conf.filter(item => item.instance !== action.payload)
            state.miscalculation = state.miscalculation.filter(item => item.id !== action.payload)
            return {...state}
        case HANDLER_PERCENT:
            state.percent = action.payload
            return {...state}
        default:
            return state
    }
}


const searchName = (block) => {
    const F = 'Фурнитура'
    const type = {name: '', isFree: false}
    switch (block) {
        case typeBlocks.FASAD:
            type.name = 'Комплект Фасадов'
            break
        case typeBlocks.CORPUS:
            type.name = 'Комплект Корпусов'
            break
        case typeBlocks.FACCES:
            type.name = `${F}`
            break
        case typeBlocks.FPETLI:
            type.name = `${F} Петли`
            break
        case typeBlocks.FBOX:
            type.name = `${F} Ящики`
            break
        case typeBlocks.FPOWERUP:
            type.name = `${F} Подъемные механизмы`
            break
        case typeBlocks.FSLIDING:
            type.name = `${F} Раздвижные механизмы`
            break
        case typeBlocks.ETABLE:
            type.name = `Столешница`
            break
        case typeBlocks.ETABLEpsc:
            type.name = `Столешница (ПСЦ)`
            type.isFree = true
            break
        case typeBlocks.EWALLPANAL:
            type.name = `Стеновая панель`
            break
        case typeBlocks.EWALLPANALpsc:
            type.name = `Стеновая панель (ПСЦ)`
            type.isFree = true
            break
        case typeBlocks.EPAN:
            type.name = `Ручки`
            break
        case typeBlocks.EPANpsc:
            type.name = `Ручки (ПСЦ)`
            type.isFree = true
            break
        case typeBlocks.EANY:
            type.name = `Прочее`
            break
        case typeBlocks.EANYpsc:
            type.name = `Прочее (ПСЦ)`
            type.isFree = true
            break
        default:
            type.name = 'default'
            break
    }
    return type
}