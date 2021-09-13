import React from "react";
import Navbar from "../includes/Navbar";
import { AiOutlineBars } from "react-icons/ai";
import Person from './Person'
import Profile from '../../assets/p1.jpg'
import Messages from './Messages'

const Chat = () => {
  return (
    <div className="chat">
      <Navbar />
      <div className="box">
        <div className="left">
          <h3>
            Chat Messages{" "}
            <span>
              <AiOutlineBars />
            </span>
          </h3>
          <hr />
          <div className="chats">
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."} />
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."} />
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."} />
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."} />
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."} />
            <Person image={Profile} name={"Lawrence Katuva"} text={"This is just to inform you that the aggreement...."}/>
          </div>
        </div>
        <Messages/>
      </div>
    </div>
  );
};

export default Chat;
