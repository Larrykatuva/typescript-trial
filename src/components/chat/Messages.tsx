import React from 'react'
import Sent from '../../assets/sent.png'

const Messages = () => {
  return (
    <div className="messages">
      <div className="sent sms float-left">
        <img src={Sent} alt="" />
        <p>Hi bro can i get that product asap</p>
      </div>
      <div className="received sms float-right">
        <p>Yeah bro bro we can hook up and make arragements on the where we can meet.</p>
        <img src={Sent} alt="" />
      </div>
      <div className="sent sms float-left">
        <img src={Sent} alt="" />
        <p>Hi bro can i get that product asap</p>
      </div>
      <div className="received sms float-right">
        <p>Yeah bro bro we can hook up and make arragements on the where we can meet.Yeah bro bro we can hook up and make arragements on the where we can meet.</p>
        <img src={Sent} alt="" />
      </div>
    </div>
  )
}

export default Messages
