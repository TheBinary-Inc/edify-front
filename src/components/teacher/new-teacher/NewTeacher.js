import React from "react";
import "../new-teacher/Newteacher.css";
const NewTeacher = () => {
  return (
    <div className="new__teacher__main__container">
      <h1 className="new__teacher__title">O'qituvchi Qo'shish</h1>
      <div className="info__wrapper">
        <div className="teachers__information">
          <form action="">
            <label htmlFor="">
              O'qituvchi Ismi<span>*</span>:
            </label>
            <input type="text" placeholder="O'qituvchi Ismi" required />
            <label htmlFor="">
              O'qituvchi Familiyasi<span>*</span>:
            </label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
            <label htmlFor="">
              Telefon raqam<span>*</span>:{" "}
            </label>
            <input type="text" placeholder="Telefon raqam" required />
            <label htmlFor="">
              O'qituvchi Kasbi<span>*</span>:
            </label>
            <input type="text" placeholder="O'qituvchi Kasbi" required />
            <label htmlFor="">O'qituvchi Familiyasi:</label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
            <label htmlFor="">O'qituvchi Familiyasi:</label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
          </form>
        </div>
        <div className="teachers__information">
          <form action="">
            <label htmlFor="">O'qituvchi Ismi:</label>
            <input type="text" placeholder="O'qituvchi Ismi" required />
            <label htmlFor="">O'qituvchi Familiyasi:</label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
            <label htmlFor="">Telefon raqam: </label>
            <input type="text" placeholder="Telefon raqam" required />
            <label htmlFor="">O'qituvchi Kasbi:</label>
            <input type="text" placeholder="O'qituvchi Kasbi" required />
            <label htmlFor="">O'qituvchi Familiyasi:</label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
            <label htmlFor="">O'qituvchi Familiyasi:</label>
            <input type="text" placeholder="O'qituvchi Familiyasi" required />
          </form>
        </div>
      </div>
      <button className="add__new__teacher">Yaratish</button>
    </div>
  );
};

export default NewTeacher;
