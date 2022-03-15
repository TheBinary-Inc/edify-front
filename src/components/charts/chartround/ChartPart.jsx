import React from 'react'
import Example from './Charts'
import "./chart.css"

function ChartPart() {
    return (
        <div>
            <>
                <div className="chartpart__main">
                    <h1>O'quvchilar oqimi</h1>
                    <div className="ChartPart__first__chart">
                        <Example />
                    </div>
                    <div className="charts__bottom">
                        <div className="chartpart__main__last__parts">
                            <div className="chartpart__main__last__parts__first">
                                <button></button> <h3>Kelmaganlar</h3>
                            </div>
                            <p>66 ta</p>
                        </div>
                        <div className="chartpart__main__last__parts">
                            <div className="chartpart__main__last__parts__first">
                                <button className='chartpart__main__last__parts__first__btn2'></button> <h3>Kelganlar</h3>
                            </div>
                            <p>129 ta</p>
                        </div>
                    </div>
                </div>
            </>
        </div>
    )
}

export default ChartPart