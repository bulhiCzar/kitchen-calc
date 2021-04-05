import React, {createContext, } from "react";
import ConfigurationData from '../../components/Calculator/СonfigurationData'
import ConfigurationValue from "../../components/Calculator/ConfigurationValue";


const CalculatorPages = () => {

    return (
        <CalcContext.Provider>
            <div className="content content--asunder">

                <ConfigurationData/>

                <ConfigurationValue/>

            </div>
        </CalcContext.Provider>
    )

}

const noop = () => {}
export const CalcContext = createContext({
    state: {},
    corps: [],
    setState: noop,
    setCorps: noop,
})


export default CalculatorPages