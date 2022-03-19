import React from 'react';
import './LessonItem.css';

const LessonItem = ({id, roomNumber, roomInfo, allrooms}) => {
    const detectRoomState = ({busy, ordered}) => {
        if(busy){
            return { background: "red"}
        }
        else if(ordered){ 
            return { background: "gold"}
        }
        else if(!busy){
            return { background: "green"}
        }
    }

    return (
        <div className="lesson-item" style={allrooms ? {width: "250px", padding: 0} : {width: "350px"}}>
            <div  className={`lesson-room ${allrooms ? "lesson-room-full" : ""}`} style={detectRoomState(roomInfo) }>
                <h2>{roomNumber}</h2>
            </div>
            <h2>{roomInfo.roomType}</h2>
        </div>
    )
}

export default LessonItem
