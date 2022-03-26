import React, {useState} from "react";
import "./Newteacher.css";
import { AiOutlineClose } from "react-icons/ai";

const NewTeacher = () => {

  const [tags, setTags] = useState([]);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const addTags = (e) => {
    if (e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
    }
  };

  return (
    <div className="newTeacher">
     <div className="left">
        <div className="container">
          <p>O'qituvchi ismi va familiyasi</p>
          <input type="text" required />
        </div>
        <div className="container">
          <p>O'qituvchi telefon raqami</p>
            <input
              required
              type="tel"
              className="input_tags"
              maxLength={13}
              minLength={13}
              onKeyUp={(event) =>
                event.key === "Enter" ? addTags(event) : null } 
              defaultValue={"+998"} />
            <ul className="tags" >
              {Array.isArray(tags) && tags?.map((tag, index) => {
                return index <= 1 && tag.length === 13 ? <li key={index}>
                  <span>{tag} </span>
                  <AiOutlineClose onClick={() => removeTags(index)} />
                </li> : <></>
            })}
            </ul>
        </div>
        <div className="container">
          <p>O'qituvchi mutaxasisligi</p>
          <input type="text"  required />
        </div>
        <div className="container">
          <p>O'qituvchi manzili</p>
          <input type="text" required />
        </div>
      </div> 
      <div className="right"> 
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required />
          </div>
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required />
          </div>
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required />
          </div>
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required />
          </div>

      </div>
      <button type="submit" className="add_btn">Qo'shish</button>
    </div>
  );
};

export default NewTeacher;