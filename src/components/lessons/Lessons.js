import React from "react";
import LessonItem from "./lesson-item/LessonItem";
import "./Lessons.css";

const Lessons = ({ Room_Static, allrooms }) => {
  const dchj = [];
  const spsh = [];

  Room_Static.forEach((room) => {
    if (room.roomInfo.day === "DCHJ") {
      dchj.push(room);
    } else {
      spsh.push(room);
    }
  });
  return (
    <div className="lessons">
      <h2>Dushanba-Chorshanba-Juma</h2>
      <div className="lesson-days">
        {dchj.map(({ id, roomNumber, roomInfo }) => (
          <LessonItem
            key={id}
            allrooms={allrooms}
            id={id}
            roomNumber={roomNumber}
            roomInfo={roomInfo}
          />
        ))}
      </div>
      <h2>Seshanba-Payshanba-Shanba</h2>
      <div className="lesson-days">
        {spsh.map(({ id, roomNumber, roomInfo }) => (
          <LessonItem
            key={id}
            allrooms={allrooms}
            id={id}
            roomNumber={roomNumber}
            roomInfo={roomInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
