import React from 'react';
import './Notifications.css'
import { Messages_Static } from "../../static/Rooms_Static";

function Notifications() {
  return (
    <div className='notification'>
        <textarea cols="30" rows="10" className='sendmessage' placeholder="Xodimlar uchun xabar jo'natish"></textarea>
        <button className="sendmessage_btn">Xabar jo'natish</button>
        <div className="notifications_bar">
            <p>Barcha xabarlar</p>
            <div className="notbar_container">
                {
                    Messages_Static?.map(messages =>
                     <div className="messages" key={messages.id}>
                     <span className='message_text'>{messages.message}...</span>
                     <span className="message_more">batafsil</span>
                     <button className="delete_message">O'chirish</button>
                     </div>                
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Notifications
