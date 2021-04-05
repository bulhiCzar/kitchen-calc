import {
    ADD_CONF,
    ADD_DETAILS, ADD_MIS, CLEAR_CONF, COPY_CONF,
    COPY_DETAILS, COPY_MIS,
    DEL_CONF,
    DEL_DETAILS, DEL_MIS,
    DETAILS_CONF, HANDLER_CONF, HANDLER_DETAIL, HANDLER_MIS, HANDLER_PERCENT,
    ITEM_CONF, LOAD_DATA,
    SECTION_DETAIL
} from "./types"

export const addMis = () => ({type: ADD_MIS})
export const handlerMis = (id) => ({type: HANDLER_MIS, payload: id})
export const copyMis = (id) => ({type: COPY_MIS, payload: id})
export const delMis = (id) => ({type: DEL_MIS, payload: id})

export const addConf = (type, mis) => ({type: ADD_CONF, typeBloke: type, payload: mis})
export const copyConf = (type) => ({type: COPY_CONF, typeBloke: type})
export const delConf = (id) => ({type: DEL_CONF, payload: id})
export const itemConf = (id) => ({type: ITEM_CONF, payload: id})
export const detailsConf = (id) => ({type: DETAILS_CONF, payload: id})
export const handlerConf = (id, value, name) => ({type: HANDLER_CONF, payload: {id, value, name}})
export const clearConf = (id)=>({type: CLEAR_CONF, payload: id})

export const addDetail = (type) => ({type: ADD_DETAILS, typeBloke: type,})
export const delDetail = (id) => ({type: DEL_DETAILS, payload: id})
export const сopyDetail = (detail, type) => ({type: COPY_DETAILS, payload: detail, typeBloke: type, })
export const sectionDetail = (id) => ({type: SECTION_DETAIL, payload: id})
export const handlerDetail = (id, value, name) => ({type: HANDLER_DETAIL, payload: {id, value, name}})

export const handlerPercent = (value) => ({type: HANDLER_PERCENT, payload: value})


export const loadData = (data)=>({type: LOAD_DATA, payload: data})