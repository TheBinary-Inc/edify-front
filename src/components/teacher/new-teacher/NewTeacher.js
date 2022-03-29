import React, {useState} from "react";
import "./Newteacher.css";
import teacher_instance from '../../../apis/new-teacher';
import { AiOutlineClose } from "react-icons/ai";
import Loader from "../../loader/Loader";

const NewTeacher = () => {
  const [fullname, setFullname] = useState('');
  const [loading, setLoading] = useState(false);
  const [phonenumbers, setPhonenumbers] = useState([]);
  const [profession, setProfession] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('')
  const [telegram, setTelegram] = useState('')
  const [password, setPassword] = useState('')
  const [percent, setPercent] = useState(0);
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
  const handleCreateTeacher = () => {
      setLoading(true);
      teacher_instance.post("newteacher", {
        fullname: fullname,
        phonenumbers: phonenumbers,
        profession: profession,
        address: address,
        telegram: telegram,
        username: username,
        password: password,
        percent: percent
      })
      .then(newteacher =>{
         console.log(newteacher.data)
         setLoading(false)
        })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }

  const loaderStyle = {
    fontSize: "25px",
    marginRight: "10px"
  }

  return (
    <div className="newTeacher">
     <div className="left">
        <div className="container">
          <p>O'qituvchi ismi va familiyasi</p>
          <input type="text" required value={fullname} onChange={e => setFullname(e.target.value)} />
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
          <input type="text"  required  value={profession} onChange={e => setProfession(e.target.value)}/>
        </div>
        <div className="container">
          <p>O'qituvchi manzili</p>
          <input type="text" required  value={address} onChange={e => setAddress(e.target.value)}/>
        </div>
      </div> 
      <div className="right"> 
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required  value={username} onChange={e => setUsername(e.target.value)}/>
          </div>
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required  value={telegram} onChange={e => setTelegram(e.target.value)}/>
          </div>
          <div className="container">
            <p>O'qituvchi paroli</p>
            <input type="text" required  value={password} onChange={e => setPassword(e.target.value)}/>
          </div>
          <div className="container">
            <p>O'qituvchi foydalanuchi nomi</p>
            <input type="text" required  value={percent} onChange={e => setPercent(e.target.value)}/>
          </div>

      </div>
      <button disabled={loading} style={loading ? {opacity: 0.7} : {opacity: 1}} type="submit" className="add_btn" onClick={handleCreateTeacher}> {loading && <Loader loaderStyle={loaderStyle}/>} Qo'shish</button>
    </div>
  );
};

export default NewTeacher;