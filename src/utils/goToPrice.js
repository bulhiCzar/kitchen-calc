import {typeBlocks} from "../consts";

const goToPrice = (obj)=>{
    const item = {}
    Object.assign(item, obj)
    switch (item.type) {
        case typeBlocks.FASAD:
        case typeBlocks.CORPUS:
            if (!item.price || !item.color) return
            break;
        case typeBlocks.FACCES:
        case typeBlocks.FPETLI:
        case typeBlocks.FBOX:
        case typeBlocks.FPOWERUP:
        case typeBlocks.FSLIDING:
            if (!item.quantity || !item.price) return
            break;
        case typeBlocks.ETABLE:
        case typeBlocks.EWALLPANAL:
        case typeBlocks.EPAN:
        case typeBlocks.EANY:
            if (!item.color || !item.price) return
            break;
        case typeBlocks.ETABLEpsc:
        case typeBlocks.EWALLPANALpsc:
        case typeBlocks.EPANpsc:
        case typeBlocks.EANYpsc:
            if (!item.price || !item.quantity) return
            break;
        default:
            if (!item.price) return
            break;
    }
    return item
}

export const goToPriceArr = (arr)=>{
    const send = []
    arr.forEach((item)=>{
        const res = goToPrice(item)
        if (res){
            send.push(res)
        }
    })
    return send
}

export default goToPrice