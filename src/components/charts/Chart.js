import React from 'react'
import ChartPart from "../charts/chartround/ChartPart"
import Diogramma from '../charts/chartdiogram/Diogram'

function Chart() {
    return (
        <div style={{ display: "flex", width: "1053px", height: "452px" }}>
            <ChartPart />
            <Diogramma />
        </div>
    )
}

export default Chart