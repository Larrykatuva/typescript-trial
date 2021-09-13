import React, { useState } from "react";
import Profile from "../../assets/p1.jpg";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { ImCheckboxChecked } from "react-icons/im";
import { VscCallOutgoing } from "react-icons/vsc";
import { FaSms } from "react-icons/fa";
import user from "../../reducers/auth.reducer";
import SendSms from "../includes/SendSms";

const Seller: React.FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showBox, setShowBox] = useState("none");
  const handleShowContact = () => {
    if (showContact) {
      console.log(showContact);
      setShowContact(false);
    } else {
      console.log(showContact);
      setShowContact(true);
    }
  };

  const handleSmsBox = () => {
    if (showBox === "none") {
      setShowBox("block");
      console.log(showBox);
    } else {
      console.log(showBox);
      setShowBox("none");
    }
  };
  return (
    <div className="col-xl-3 col-md-3 col-sm-12 seller">
      <div className="top">
        <div className="user">
          <img src={Profile} alt="" />
          <div className="info">
            <h5>Lawrence katuva</h5>
            <div>
              <p>
                <HiOutlineMail className="icon" /> Replies slowly
              </p>
              <p>
                <ImCheckboxChecked className="icon" /> 15 Jul 2019
              </p>
            </div>
          </div>
        </div>
        <SendSms isShow={showBox} showSmsBox={handleSmsBox} />
        {!showContact ? (
          <button className="btn" onClick={handleShowContact}>
            <VscCallOutgoing /> Show Contact
          </button>
        ) : (
          <button className="btn" onClick={handleShowContact}>
            <a href="tel:0705426456">0705426456</a>
          </button>
        )}
        <button className="btn" onClick={handleSmsBox}>
          <FaSms /> Send sms
        </button>
      </div>
      <div className="second">
        <h5>Safety Tips</h5>
        <ul>
          <li>Do not pay in advance even for the delivery</li>
          <li>Try to meet at a safe, public location</li>
          <li>Check the item BEFORE you buy it</li>
          <li>Pay only after collecting the item</li>
        </ul>
      </div>
    </div>
  );
};

export default Seller;
