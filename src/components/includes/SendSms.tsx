import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";

interface IProps {
  isShow: string;
  showSmsBox: () => void;
}

const SendSms: React.FC<IProps> = ({ isShow, showSmsBox }) => {
  const [text, setText] = useState();
  const handleText = (e: any) => {
    setText(e.target.value);
  };
  const handleSms = (e: any) => {
    e.preventDefault();
  };

  return (
    <form className="sms-form" onSubmit={handleSms} style={{ display: isShow }}>
      <p className="text-success">
        Type your message{" "}
        <span className="float-right">
          <AiOutlineCloseCircle onClick={showSmsBox} />
        </span>
      </p>
      <hr />
      <div className="form-group">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea4"
          onChange={handleText}
        ></textarea>
        <button className="send" type="submit">
          <AiOutlineSend onClick={handleSms} />
        </button>
      </div>
    </form>
  );
};

export default SendSms;
