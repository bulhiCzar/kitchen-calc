import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import moment from 'moment'
import CorpsItem from "./configuration/data/CorpsItem"
import {typeBlocks} from "../../consts";
import Furnitura from "./configuration/data/Furnitura";
import Extensions from "./configuration/data/Extensions";
import s from './Configuration.module.scss'
import cn from 'classnames'
import {handlerPercent} from "../../redux/actions";


const ConfigurationData = () => {
    const [isPercent, setPercent] = useState(false)

    const {bid} = useSelector(s => s.data)
    const dispatch = useDispatch()
    const {conf, item, percent, detail, misActive} = useSelector(s => s.calc)

    const instance = conf.filter((item) => item.instance === misActive)

    const corpusArr = instance.filter(e => e.type === typeBlocks.CORPUS)
    const fasadArr = instance.filter(e => e.type === typeBlocks.FASAD)
    const fFaccesArr = instance.filter(e => e.type === typeBlocks.FACCES)
    const fPetliArr = instance.filter(e => e.type === typeBlocks.FPETLI)
    const fBoxArr = instance.filter(e => e.type === typeBlocks.FBOX)
    const fPowerUpArr = instance.filter(e => e.type === typeBlocks.FPOWERUP)
    const fSlidigArr = instance.filter(e => e.type === typeBlocks.FSLIDING)
    const eTableArr = instance.filter(e => e.type === typeBlocks.ETABLE)
    const eTablePscArr = instance.filter(e => e.type === typeBlocks.ETABLEpsc)
    const eWallPanalArr = instance.filter(e => e.type === typeBlocks.EWALLPANAL)
    const eWallPanalPscArr = instance.filter(e => e.type === typeBlocks.EWALLPANALpsc)
    const ePanArr = instance.filter(e => e.type === typeBlocks.EPAN)
    const ePanPscArr = instance.filter(e => e.type === typeBlocks.EPANpsc)
    const eAnyArr = instance.filter(e => e.type === typeBlocks.EANY)
    const eAnyPscArr = instance.filter(e => e.type === typeBlocks.EANYpsc)

    const submitPercent = (e)=>{
        e.preventDefault()
        setPercent(false)
    }

    return (
        <div className="content__wrapper content__wrapper--white">

            <div className="navbar">
                <div className="logotype">
                    <img src="img/dist/logotype-calculation.svg" alt="Logotype"/>
                </div>
                <form onSubmit={submitPercent}>
                    <div className="navbar__info">
                        <p className="navbar__title">
                            Заявка #1888-
                            {
                                !isPercent ?
                                    <strong onClick={setPercent}>{percent}</strong>
                                    :
                                    <input
                                        type="text"
                                        className={cn(s.percentInput, 'input', )}
                                        value={percent}
                                        onBlurCapture={submitPercent}
                                        onChange={(e)=>{
                                            let value = e.target.value
                                            // if (value === '') value = 0
                                            dispatch(handlerPercent(value))
                                        }}
                                    />
                            }
                        </p>
                        <p className="navbar__title">Для <strong>{bid.nameClient}</strong> от {moment(bid.pubDate).format("DD.MM.YYYY")}
                        </p>
                    </div>
                </form>
            </div>

            {
                corpusArr.map((conf, idx) => {
                    return (
                        <CorpsItem
                            key={conf.id}
                            type={typeBlocks.CORPUS}
                            wId={idx}
                            id={conf.id}
                            data={conf}
                            isActive={item === conf.id && true}
                            main={conf}
                            selectMain={item}
                            selectDetail={detail}
                        />

                    )
                })
            }

            {
                fasadArr.map((conf, idx) => {
                    return (
                        <CorpsItem
                            key={conf.id}
                            type={typeBlocks.FASAD}
                            id={conf.id}
                            wId={idx}
                            data={conf}
                            isActive={item === conf.id && true}
                            main={conf}
                            selectMain={item}
                            selectDetail={detail}
                        />

                    )
                })
            }

            <div className="set-fittings">
                {fFaccesArr.map((f, idx) => {
                    return <Furnitura
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {fPetliArr.map((f, idx) => {
                    return <Furnitura
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {fBoxArr.map((f, idx) => {
                    return <Furnitura
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {fPowerUpArr.map((f, idx) => {
                    return <Furnitura
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {fSlidigArr.map((f, idx) => {
                    return <Furnitura
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eTableArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eTablePscArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eWallPanalArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eWallPanalPscArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {ePanArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {ePanPscArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eAnyArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
                {eAnyPscArr.map((f, idx) => {
                    return <Extensions
                        key={f.id}
                        data={f}
                        wId={idx}
                    />
                })}
            </div>
        </div>
    )
}

export default ConfigurationData