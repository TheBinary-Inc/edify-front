import React from 'react'
import Diogram from './chartdiogra'
import "./diogram.css"


function Diogramma() {
    return (
        <div>
            <>
                <div className="diogram">
                    <h1>Oylik maosh va to'lovlar</h1>
                    <div className="diogram__color">
                        <div className="chartpart__main__last__parts1">
                            <div className="chartpart__main__last__parts__first1">
                                <button></button> <h3>To'lov soni</h3>
                            </div>
                        </div>
                        <div className="chartpart__main__last__parts1">
                            <div className="chartpart__main__last__parts__first1">
                                <button className='chartpart__main__last__parts__first__btn2__1'></button> <h3>Oylik maosh</h3>
                            </div>
                        </div>
                    </div>
                    <div className="diogram__main">
                        <Diogram />
                    </div>



                </div>
            </>
        </div>
    )
}

export default Diogramma